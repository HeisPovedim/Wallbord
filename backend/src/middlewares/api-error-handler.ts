import { Request, Response, NextFunction } from 'express';

import ApiError from './ApiError'; //

function apiErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (err instanceof ApiError) {
    res.status(err.code).json(err.message);
    return; //to exit function
  }

  res.status(500).json(err);
}

export default apiErrorHandler;
