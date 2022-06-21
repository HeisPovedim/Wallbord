import * as screensService from '@/service/screensService';
import express, { Request, Response, NextFunction } from 'express';

import 'express-async-errors';
import { languageHandler } from '@/middlewares/lang.middleware';
//get all screens

export const getAllscreens = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const screens = await screensService.getScreens();
  res.status(200).json(screens);
};

//--------------------------------------------------------
//get basic info of one screen
export const getSceenBasicInfo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const singleScreen = await screensService.getSceenBasicInfo(
    req.params.scrType,
  );
  res.status(200).json(singleScreen);
};

//get events of one screen
export const getEventsOfOneType = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const singleScreen = await screensService.getEventsOfOneType(
    req.params.scrType,
  );
  return res.status(200).json(singleScreen);
};

//--------get screen by language and Type : get events with the same type in russian
export const getEventsOfOneTypeRU = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const lang = languageHandler(req, next);
  const singleScreen = await screensService.getEventsOfOneTypeRU(
    req.params.scrType,
    lang,
  );

  res.status(200).json(singleScreen);
};

//added new 31052022
export const getAllScreensofOneLang = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const lang = languageHandler(req, next);
  const eventsbylang = await screensService.getAllScreensofOneLang(lang);

  res.status(200).json(eventsbylang);
};
//---------add new screen without events (excuted one time)
//from json object. see exampleData.js file
export const createScreen = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  //check if scren not exist
  const savedScreen = screensService.createScreen(
    req.body.screenType,
    req.body.priority,
    req.body.importance,
    req.body.repetition,
    req.body.showPeriod,
    req.body.eventData,
  );
  res
    .status(201)
    .json({ savedScreen: savedScreen, msq: 'A new Screen was created' });
};

//Adding new event to a screen: update dataEvent field, push new array element.
//eventData: from json object. see exampleData.js file
export const createEvent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const newEvent = await screensService.createEvent(
    req.body.eventData,
    req.params.scrType,
  );
  res.status(200).json({ newEvent });
};
//--------------update screen basic information:
//eventData: from json object. see exampleData.js file screenType,priority, importance,repetition,showPeriod
export const updateScreenBasicInfo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const updatedScreen = await screensService.updateScreenBasicInfo(
    req.params.scrType,
    req.body.priority,
    req.body.importance,
    req.body.repetition,
    req.body.showPeriod,
  );

  res.status(200).json(updatedScreen);
};

//Update event : update screen Data field
//The data is from a json object. See file exampleData.js
export const updateEvent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(req.body.dataRU);
  const updatedEvent = await screensService.updateEvent(
    req.params.scrType,
    parseInt(req.params.eventID),
    req.body.data,
  );
  res.status(200).json(updatedEvent);
};

//Update event data by language: update screen DataEN dataRU field
//The data is from a json object. See file exampleData.js
export const updateEventByLang = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  //parseInt(req.params.eventID),
  const updatedEvent = await screensService.updateEventByLang(
    languageHandler(req, next),
    req.params.scrType,
    parseInt(req.params.eventID),
    req.body.data,
  );
  res.status(200).json(updatedEvent);
};

//Delete screen at all by id
export const deleteScreen = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const removedScreen = await screensService.deleteScreen(req.params.scrType);
  res
    .status(200)
    .json({ msg: 'Screend deleted sucessfuly', details: removedScreen });
};

//delete all event of one screen
export const deleteAllEventsOfOneType = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  //First check if screen exist
  const updatedScreen = await screensService.deleteAllEventsOfOneType(
    req.params.scrType,
  );
  res.status(200).json(updatedScreen);
};

//Delete event by ID: update eventData
export const deleteSingleEventByType = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const updatedScreen = await screensService.deleteSingleEventByType(
    req.params.scrType,
    parseInt(req.params.eventID),
  );
  return res.status(200).json(updatedScreen);
};
