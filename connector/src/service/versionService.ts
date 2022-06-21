import Version from '~/models/response/Version';
import config from '~/config';

/**
 * Get application deployed version
 * in DigitalSkynet standard format.
 *
 * @returns {Version}
 */
// eslint-disable-next-line import/prefer-default-export
export const getVersionInfo = (): Version => ({
  branch: config.version.branch,
  hash: config.version.hash,
  buildDate: config.version.buildDate,
  deployDate: config.version.deployDate,
});
