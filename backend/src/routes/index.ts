import { Router } from 'express';

import * as homeController from '@/controller/home';
import * as versionController from '@/controller/version';
import * as healthController from '@/controller/health';
import * as screenController from '@/controller/screens';

const router = Router();

//Screen controller
router.get('/screens', screenController.getAllscreens);
router.get('/screens/:scrType', screenController.getSceenBasicInfo);

router.get('/allevents/:lang', screenController.getAllScreensofOneLang); // get all events for defined language
router.get('/events/:scrType', screenController.getEventsOfOneType);
router.get('/events/:lang/:scrType', screenController.getEventsOfOneTypeRU);

router.post('/screens', screenController.createScreen);
router.post('/events/:scrType', screenController.createEvent);

router.patch('/screens/:scrType', screenController.updateScreenBasicInfo);
router.patch('/events/:scrType/:eventID', screenController.updateEvent);
router.patch(
  '/events/:lang/:scrType/:eventID',
  screenController.updateEventByLang,
);

router.delete('/screens/:scrType', screenController.deleteScreen);
router.delete('/events/:scrType', screenController.deleteAllEventsOfOneType);
router.delete(
  '/events/:scrType/:eventID',
  screenController.deleteSingleEventByType,
);

// Home controller
router.get('/', homeController.getExampleResponse);

// Version controller
router.get('/version', versionController.getAppVersion);

// Health Probes
router.get('/health/liveness', healthController.getLivenessProbe);
router.get('/health/readiness', healthController.getReadinessProbe);

export default router;
