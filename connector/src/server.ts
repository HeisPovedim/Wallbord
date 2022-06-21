import * as express from 'express';

import { Server, createServer } from 'http';

import CONFIG from './config';

// eslint-disable-next-line import/prefer-default-export
export const startServer = (app: express.Application): Server => {
  const httpServer = createServer(app);

  return httpServer.listen({ port: CONFIG.port }, (): void => {
    process.stdout.write(`⚙️  Application Environment: ${CONFIG.nodeEnvironment}\n`);
    process.stdout.write('📚 Debug logs are ENABLED\n');
    process.stdout.write(
      `🚀 API Server is ready at http://localhost:${CONFIG.port}\n`,
    );
  });
};
