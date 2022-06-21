import { Request, Response } from 'express';
import * as versionService from '~/service/versionService';

// eslint-disable-next-line import/prefer-default-export
export const getAppVersion = (req: Request, res: Response) => {
  const result = versionService.getVersionInfo();

  // Note: this should NOT be wrapped into ResponseEnvelope.
  res.json(result);
};
