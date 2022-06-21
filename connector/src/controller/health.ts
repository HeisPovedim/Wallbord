import { Request, Response } from 'express';
import * as healthService from '~/service/healthService';

/**
 * Returns swatch info by its ID
 * @param req
 * @param res
 */
export const getLivenessProbe = async (req: Request, res: Response) => {
  res.status(200).json(healthService.getDummyResult());
};

export const getReadinessProbe = async (req: Request, res: Response) => {
  const result = await healthService.checkDatabase();
  res.status(200).json(result);
};
