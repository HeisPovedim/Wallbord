import * as versionService from '@/service/version';

import { Request, Response } from 'express';

export const getAppVersion = (req: Request, res: Response) => {
  const result = versionService.getVersionInfo();

  // Note: this should not be wrapped into ResponseEnvelope.
  res.json(result);
};
