import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from '@/routes';
//import * as errorHandler from '@/middlewares/errorHandler';

//My imports
import mongoose from 'mongoose';
import { json } from 'body-parser';
import apiErrorHandler from './middlewares/api-error-handler';
import { languageHandler } from './middlewares/lang.middleware';

export const createApp = (): express.Application => {
  const app = express();

  app.use(cors()); // cross-origin request headers
  app.use(helmet()); // security headers
  app.use(morgan('dev')); // logging middleware
  app.use(express.json()); // json serialization
  app.use(
    express.urlencoded({
      extended: true,
    }),
  );

  //connect to db ... before routing
  const URL = 'mongodb://localhost:27017/wallb';
  mongoose.connect(URL, (err: Error) => {
    if (!err) console.log('connected to database wallb');
  });

  // API Routes
  app.use('/api', routes);

  // Error Middleware
  //app.use(errorHandler.notFoundError);
  //app.use(errorHandler.genericErrorHandler);
  //My error handler
  app.use(apiErrorHandler);

  return app;
};
