import { Request, Response } from 'express';
import { ResponseEnvelope } from '@/types/response/Envelope';

/**
 * Gets the liveness probe result.
 *
 * @param {Request} req
 * @param {Response} res
 */
export const getLivenessProbe = (req: Request, res: Response) => {
  res.send('healthy');
};

/**
 * Gets the readiness probe result.
 *
 * @param {Request} req
 * @param {Response} res
 */
export const getReadinessProbe = (req: Request, res: Response) => {
  // TODO: use some database call to check if we are ready to process requests.
  res.send('healthy');
};
