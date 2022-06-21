import buildError from '~/utils/error';
import HttpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';

import { BaseResponseEnvelope, ResponseStatus } from '~/models/response/Envelope';

export const mapStatusCode = (status: ResponseStatus): number => {
  switch (status) {
    case ResponseStatus.Success: return HttpStatus.OK;
    case ResponseStatus.NotImplemented: return HttpStatus.NOT_IMPLEMENTED;
    case ResponseStatus.NotAuthenticated: return HttpStatus.UNAUTHORIZED;
    case ResponseStatus.NotAuthorized: return HttpStatus.FORBIDDEN;
    case ResponseStatus.NotFound: return HttpStatus.NOT_FOUND;
    case ResponseStatus.FailedValidation: return HttpStatus.BAD_REQUEST;
    case ResponseStatus.InvalidOperation: return HttpStatus.INTERNAL_SERVER_ERROR;
    case ResponseStatus.UnexpectedError: return HttpStatus.INTERNAL_SERVER_ERROR;
    case ResponseStatus.ExternalRequestFailed: return HttpStatus.INTERNAL_SERVER_ERROR;
    default: return HttpStatus.NOT_IMPLEMENTED;
  }
};

/**
 * Error response middleware for 404 not found.
 * This middleware function should be at the very bottom of the stack.
 *
 * @param  {object}   req
 * @param  {object}   res
 */
export const notFoundError = (
  req: Request,
  res: Response,
) => {
  const NOT_FOUND_CODE = HttpStatus.NOT_FOUND;
  res.status(NOT_FOUND_CODE).json(
    new BaseResponseEnvelope({
      status: ResponseStatus.NotFound,
      userMessage: 'Requested resource was not found',
    }),
  );
};

/**
 * Generic error response middleware for validation and internal server errors.
 *
 *
 * @param {*} err
 * @param {Request} req
 * @param {Response} res
 */
export const genericErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars
  next: NextFunction,
) => {
  // eslint-disable-line no-unused-vars
  if (err.stack) {
    process.stdout.write('Error stack trace: ', err.stack);
  }

  const error = buildError(err);

  res.status(mapStatusCode(error.status)).json(error).end();
};
