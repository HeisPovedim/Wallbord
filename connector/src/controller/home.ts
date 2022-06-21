import { Request, Response } from 'express';
import { ResponseEnvelope } from '~/models/response/Envelope';

/**
 * Gets the API information.
 *
 * @param {Request} req
 * @param {Response} res
 */
// eslint-disable-next-line import/prefer-default-export
export const getExampleResponse = (req: Request, res: Response) => {
  res.json(new ResponseEnvelope({ foo: 'bar' }));
};
