import Version from '@/types/response/Version';
import config from '@/config';

/**
 * Get application deployed version
 * in DigitalSkynet standard format.
 *
 * @returns {Version}
 */
export const getVersionInfo = (): Version => {
  return {
    branch: config.APP.BRANCH,
    hash: config.APP.HASH,
    buildDate: config.APP.BUILD_DATE,
    deployDate: config.APP.DEPLOY_DATE,
  };
};
