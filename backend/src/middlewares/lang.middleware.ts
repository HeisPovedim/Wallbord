/**Check if parameter is set
 * Check if sended lang is used in our system
 * return lang name if exist -1 otherwise
 */
import { Request, Response, NextFunction } from 'express';
import ApiError from './ApiError';

export const languageHandler = (
  req: Request,
  next: NextFunction,
): string | void => {
  const languages = ['en-en', 'ru-ru', 'en-ru', 'ru-en']; //list of used languages
  let lang = req.params.lang;
  if (lang) {
    if (languages.includes(lang)) {
      return lang;
    } else {
      return next(
        ApiError.badRequest(`Нет данных на языке, указанном в ссылке`),
      );
    }
  }
};
