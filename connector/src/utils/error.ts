import { ResponseStatus, BaseResponseEnvelope } from '~/models/response/Envelope';

// TODO: make it to be the standard envelope

/**
 * Build error response for validation errors.
 *
 * @param  {error} err
 * @return {array|object}
 */
export default (err: any) => {
  const allowDebugInfo = !process.env.DISABLE_STACK_TRACE;

  // Validation errors
  if (err.isJoi || err instanceof SyntaxError) {
    return new BaseResponseEnvelope({
      status: ResponseStatus.FailedValidation,
      userMessage: 'Validation failed',
      systemMessage: allowDebugInfo
        ? JSON.stringify(err.details
            && err.details.map((error: any) => ({
              message: error.message,
              param: error.path,
            })))
        : undefined,
      stackTrace: allowDebugInfo ? err.stackTrace : null,
    });
  }

  // HTTP errors
  if (err.isBoom) {
    return new BaseResponseEnvelope({
      status: ResponseStatus.InvalidOperation,
      userMessage: err.output.payload.message || 'Something went wrong',
      systemMessage: allowDebugInfo ? err.output.payload.error : null,
      stackTrace: allowDebugInfo ? err.stackTrace : null,
    });
  }

  return new BaseResponseEnvelope({
    status: ResponseStatus.InvalidOperation,
    userMessage: 'Something went wrong',
    systemMessage: allowDebugInfo ? err.message : null,
    stackTrace: allowDebugInfo ? err.stackTrace : null,
  });
};
