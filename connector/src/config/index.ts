import dotenv from 'dotenv';

dotenv.config();

const config = {
  nodeEnvironment: process.env.NODE_ENV || 'development',
  applicationEnvironment: process.env.APP_ENV || 'development',
  port: process.env.APP_PORT ?? 3000,
  channels: {
    telegram: {
      token: process.env.TELEGRAM_TOKEN,
    },
  },
  publish: {
    publicUrl: process.env.PUBLIC_URL,
    wallboardApiUrl: process.env.WALLBOARD_API_URL,
  },
  version: {
    branch: process.env.COMMIT_REF_NAME ?? 'unknown',
    hash: process.env.COMMIT_SHA ?? 'unknown',
    deployDate: process.env.DEPLOY_STAMP ?? '1970-01-01',
    buildDate: process.env.BUILD_STAMP ?? '1970-01-01',
  },
};

export default config;
