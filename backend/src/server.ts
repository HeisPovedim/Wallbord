import * as express from 'express';

import { Server, createServer } from 'http';

import CONFIG from './config';

import ScreenEmiter from './service/newScreenEventService';

const cors = require('cors');
const http = require('http');

export const startServer = (app: express.Application): Server => {
  const httpServer = createServer(app);

  const io = require('socket.io')(httpServer, {
    cors: {
      origin: 'http://localhost:3333', //В качестве ориджин указываем адрес фронта
      methods: ['GET', 'POST'], //Разрешаем гет и пост запросы
      transports: ['websocket', 'polling'],
      credentials: true,
    },
    allowEIO3: true,
  });

  //Ждём подключения
  io.on('connection', (socket: any) => {
    ScreenEmiter.on('newScreenEvent', (newScreen: Screen) => {
      socket.emit('receiveNewScreen', newScreen);
    });
  });

  return httpServer.listen({ port: CONFIG.APP.PORT }, (): void => {
    process.stdout.write(`⚙️  Application Environment: ${CONFIG.APP.ENV}\n`);
    process.stdout.write('📚 Debug logs are ENABLED\n');
    process.stdout.write(
      `🚀 API Server is ready at http://localhost:${CONFIG.APP.PORT}\n`,
    );
  });
};
