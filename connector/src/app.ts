import express from 'express';
import * as applicationInsights from 'applicationinsights';
import routes from '~/routes';
import bodyParser from 'body-parser';
import * as errorHandler from '~/middlewares/errorHandler';
import bot, { useTelegramWebhook, secretPath } from '~/channels/telegram';
import config from '~/config';

// eslint-disable-next-line import/prefer-default-export
export const createApp = (): express.Application => {
  const app = express();

  // Set up application insights
  if (process.env.APPINSIGHTS_INSTRUMENTATIONKEY) {
    applicationInsights
      .setup()
      .setAutoCollectRequests(true)
      .setAutoCollectConsole(true, true)
      .setAutoCollectDependencies(true)
      .setAutoCollectPerformance(true, true)
      .start();

    applicationInsights.defaultClient.commonProperties = {
      Application: 'WallboardConnector',
      Version: config.version.hash,
      Environment: config.applicationEnvironment,
    };
  }

  app.use(
    bodyParser.json({
      limit: '50mb', // TODO: do not hardcode
    }),
  );
  app.use(
    bodyParser.urlencoded({
      limit: '50mb', // TODO: do not hardcode
      extended: true,
      parameterLimit: 50000,
    }),
  );

  // API routes for applications
  app.use('/api/v1', routes);

  // Set up telegraf
  if (useTelegramWebhook) {
    app.use(bot.webhookCallback(secretPath));
  } else {
    bot.launch();
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
  }

  // Error Middleware
  app.use(errorHandler.genericErrorHandler);
  app.use(errorHandler.notFoundError);

  return app;
};
