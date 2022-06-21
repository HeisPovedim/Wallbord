import express, { Request, Response, NextFunction } from 'express';
import { Screen } from '@/models/screenModel';
import 'express-async-errors';
import ApiError from '@/middlewares/ApiError';
import ScreenEmiter from '../service/newScreenEventService';

//get all screens
export const getScreens = async () => {
  const screens = await Screen.find();
  if (!screens) throw ApiError.NotFound(`Нет экранов`);
  else return screens;
};

//--------------------------------------------------------
//get basic info of one screen
export const getSceenBasicInfo = async (screenType: String) => {
  const query = { screenType: screenType };
  const single_screen = await Screen.findOne(query);
  if (!single_screen)
    throw ApiError.NotFound(`Нет экрана с названием ${screenType}`);
  return single_screen;
};

//get еру events of one screen
// returns the screen type and array of events
export const getEventsOfOneType = async (screenType: String) => {
  const query = { screenType: screenType };
  const proj = {
    _id: 0,
    screenType: 1,
    priority: 1,
    importance: 1,
    repetition: 1,
    showPeriod: 1,
    eventData: 1,
  }; //select fields to show
  const single_screen = await Screen.findOne(query).select(proj);
  if (!single_screen)
    throw ApiError.NotFound(`Нет событий с названием ${screenType}`);
  else {
    if (single_screen['eventData']?.length != 0) return single_screen; //ok
    else throw ApiError.NotFound(`Нет событий такого типа ${screenType}`);
  }
};
//getAllScreensofOneLang new

export const getAllScreensofOneLang = async (lang: string | void) => {
  let selection;
  if (lang === 'en-en')
    selection = {
      _id: 0,
      screenType: 1,
      priority: 1,
      importance: 1,
      repetition: 1,
      showPeriod: 1,
      'eventData.dataEN': 1,
    };
  else if (lang === 'en-ru' || lang === 'ru-en') {
    selection = {
      _id: 0,
      screenType: 1,
      priority: 1,
      importance: 1,
      repetition: 1,
      showPeriod: 1,
      eventData: 1,
    };
  }
  //select fields to show
  else
    selection = {
      _id: 0,
      screenType: 1,
      priority: 1,
      importance: 1,
      repetition: 1,
      showPeriod: 1,
      'eventData.dataRU': 1,
    }; //select fields to show

  const single_screen = await Screen.find({
    eventData: { $exists: true, $not: { $size: 0 } },
  }).select(selection);
  if (single_screen) return single_screen;
  else throw ApiError.NotFound(`Нет экранов`);
};

//--------get screen by language and Type : get events with the same type in russian
export const getEventsOfOneTypeRU = async (
  screenType: string,
  lang: string | void,
) => {
  let selection;
  if (lang === 'en-en')
    selection = {
      _id: 0,
      screenType: 1,
      priority: 1,
      importance: 1,
      repetition: 1,
      showPeriod: 1,
      'eventData.dataEN': 1,
    };
  else if (lang === 'en-ru' || lang === 'ru-en') {
    selection = {
      _id: 0,
      screenType: 1,
      priority: 1,
      importance: 1,
      repetition: 1,
      showPeriod: 1,
      eventData: 1,
    };
  }
  //select fields to show
  else
    selection = {
      _id: 0,
      screenType: 1,
      priority: 1,
      importance: 1,
      repetition: 1,
      showPeriod: 1,
      'eventData.dataRU': 1,
    }; //select fields to show

  const query = { screenType: screenType };
  const single_screen = await Screen.findOne(query).select(selection);
  if (single_screen) return single_screen;
  else throw ApiError.NotFound(`Нет экрана с названием ${screenType}`);
};

//---------add new screen without events (excuted one time)
//from json object. see exampleData.js file
export const createScreen = async (
  screenType: string,
  priority: number,
  importance: number,
  repetition: number,
  showPeriod: number,
  eventData: Array<{}>,
) => {
  //check if scren not exist
  const screen = new Screen({
    screenType,
    priority,
    importance,
    repetition,
    showPeriod,
    eventData,
  });
  //check the screen name if defined
  if (!screenType || !priority || !importance || !repetition || !showPeriod) {
    throw ApiError.badRequest(`Введены не все данные экрана`);
  } else {
    const svaedScreen = await screen.save();
    return svaedScreen;
  }
};

//Adding new event to a screen: update dataEvent field, push new array element.
//eventData: from json object. see exampleData.js file
export const createEvent = async (event_data: any, scrType: string) => {
  //check if event data ok
  if (!event_data)
    throw ApiError.badRequest(`Пожалуйста, заполните все необходимые данные`);
  else {
    //проверить, существует ли экран в БД
    const query = { screenType: scrType };
    const screen = await Screen.findOne(query);
    //если экран существует в БД
    if (screen) {
      //сгенерировать идентификатор нового события (event_id)
      const numberOfevents = screen['eventData']?.length;
      //идентификатор последнего события - тот, у которого максимальный индекс
      let newID: number;
      if (numberOfevents && screen)
        newID = screen['eventData']![numberOfevents - 1].event_id + 1;
      //увеличить последний идентификатор на 1
      else newID = 1;
      //вставляем event_id в данные входящего события (Введенные данные в postman не имеют ID)
      event_data['event_id'] = newID;
      //save the event in DB
      const newVal = { $push: { eventData: event_data } };
      const new_event = await Screen.updateOne(query, newVal);

      //получить события
      const single_screen = await Screen.findOne(query); //Нет необходимости проверять наличие экрана, потому что мы уже проверили, и сейчас мы в состоянии
      if (single_screen) {
        let newNumberOfEvents = single_screen['eventData']?.length;
        const newEvent = {
          events: single_screen['eventData'] || "",
          eventCounts: newNumberOfEvents,
        };
        ScreenEmiter.emit('newScreenEvent', newEvent);
        //Отправьте HTTP-ответ, содержащий массив событий и количество событий (и мы можем отправить все, что захотим)
        return newEvent;
      } else {
        throw ApiError.NotFound(`Нет экрана с названием ${scrType}`);
      }
    } else throw ApiError.NotFound(`Нет экрана с названием ${scrType}`);
  }
};
//--------------update screen basic information:
//eventData: from json object. see exampleData.js file screenType,priority, importance,repetition,showPeriod
export const updateScreenBasicInfo = async (
  scrType: string,
  priority: number,
  importance: number,
  repetition: number,
  showPeriod: number,
) => {
  const query = { screenType: scrType };
  if (!priority || !importance || !repetition || !showPeriod) {
    throw ApiError.badRequest(`Пожалуйста, заполните все необходимые данные`);
  } else {
    const toUpdate = {
      $set: {
        priority: priority,
        importance: importance,
        repetition: repetition,
        showPeriod: showPeriod,
      },
    };
    const updated_screen = await Screen.updateOne(query, toUpdate);
    return updated_screen;
  }
};

//Update event : update screen Data field
//The data is from a json object. See file exampleData.js
export const updateEvent = async (
  scrType: string,
  eventID: number,
  data: any,
) => {
  // check screen existence
  //check if data is not null
  if (!data) {
    throw ApiError.badRequest(`Пожалуйста, заполните все необходимые данные`);
  } else {
    //update dataEN  & dataRU
    const getScreen = await Screen.findOne({ screenType: scrType });
    if (getScreen) {
      const query = {
        screenType: scrType,
        'eventData.event_id': eventID,
      };

      const toUpdate = {
        $set: {
          'eventData.$.dataRU': data['dataRU'],
          'eventData.$.dataEN': data['dataEN'],
        },
      };

      const updated_screen = await Screen.updateOne(query, toUpdate);
      if (
        updated_screen &&
        updated_screen['modifiedCount'] != 0 &&
        updated_screen['matchedCount'] != 0
      )
        return updated_screen;
      else throw ApiError.NotFound(`Ошибка в имени экрана или номере события`);
    } else {
      throw ApiError.NotFound(`Нет экрана с названием ${scrType}`);
    }
  }
};

//Update event data by language: update screen DataEN dataRU field
//The data is from a json object. See file exampleData.js
export const updateEventByLang = async (
  lang: string | void,
  scrType: string,
  event_id: number,
  data: any,
) => {
  let toUpdate;

  const query = {
    screenType: scrType,
    'eventData.event_id': event_id,
  };
  //check if data is not empty
  if (data) {
    if (lang == 'en-en')
      toUpdate = { $set: { 'eventData.$.dataEN': data['dataEN'] } };
    else if (lang == 'ru-ru') {
      toUpdate = { $set: { 'eventData.$.dataRU': data['dataRU'] } };
    } else
      toUpdate = {
        'eventData.$.dataRU': data['dataRU'],
        'eventData.$.dataEN': data['dataEN'],
      }; // data contain two data by 2 lang

    const updated_screen = await Screen.updateOne(query, toUpdate);
    if (updated_screen && updated_screen['modifiedCount'] != 0)
      return updated_screen;
    else throw ApiError.NotFound(`Ошибка в имени экрана или номере события`);
  } else {
    throw ApiError.badRequest(`Пожалуйста, заполните все необходимые данные`);
  }
};

//Delete screen at all by id
export const deleteScreen = async (scrType: string) => {
  const removed_screen = await Screen.remove({
    screenType: scrType,
  });
  if (removed_screen) return removed_screen;
};

//delete all event of one screen
export const deleteAllEventsOfOneType = async (scrType: string) => {
  const query = { screenType: scrType };
  const toUpdate = { $set: { eventData: [] } };

  //First check if screen exist
  const getScreen = await Screen.findOne(query);
  if (getScreen) {
    const updated_screen = await Screen.updateOne(query, toUpdate);
    if (updated_screen) return updated_screen;
  } else throw ApiError.NotFound(`Нет экрана с названием ${scrType}`);
};

//Delete event by ID: update eventData
export const deleteSingleEventByType = async (
  scrType: string,
  eventID: number,
) => {
  const query = { screenType: scrType };
  //First check if screen exist
  const getScreen = await Screen.findOne(query);
  if (getScreen) {
    const toUpdate = {
      $pull: { eventData: { event_id: eventID } },
    };

    const updated_screen = await Screen.updateOne(query, toUpdate);
    if (updated_screen) return updated_screen;
  } else throw ApiError.NotFound(`Нет экрана с названием ${scrType}`);
};
