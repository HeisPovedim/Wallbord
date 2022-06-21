import pkg from '../../package.json';

require('dotenv').config();

const CONFIG = {
  APP: {
    NAME: pkg.name,
    VERSION: pkg.version,
    DESCRIPTION: pkg.description,
    AUTHORS: pkg.authors,

    BRANCH: pkg.meta.branch,
    HASH: pkg.meta.hash,
    BUILD_DATE: pkg.meta.buildDate,
    DEPLOY_DATE: process.env.DEPLOY_DATE ?? new Date().toISOString(),

    HOST: process.env.APP_HOST,
    BASE_URL: process.env.API_BASE_URL,
    PORT: process.env.NODE_ENV === 'test' ? 8888 : process.env.PORT || 8080,
    ENV: process.env.NODE_ENV,
  },
  LOG: {
    PATH: process.env.LOGGING_DIR || 'logs',
    LEVEL: process.env.LOGGING_LEVEL || 'info',
    MAX_FILES: process.env.LOGGING_MAX_FILES || 5,
  },
};

export default CONFIG;
