import { NextFunction, Request, Response } from 'express';

// eslint-disable-next-line max-len
export default (fn: any) => (req: Request, res: Response, next: NextFunction) => Promise.resolve(fn(req, res, next)).catch(next);
