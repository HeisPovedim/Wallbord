import { Request, Response } from 'express';
import { ResponseEnvelope } from '@/types/response/Envelope';

/**
 * Gets the API information.
 *
 * @param {Request} req
 * @param {Response} res
 */
export const getExampleResponse = (req: Request, res: Response) => {
  res.json(new ResponseEnvelope({ foo: 'bar' }));
};
