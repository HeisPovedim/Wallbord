import { Router } from 'express';

import * as homeController from '~/controller/home';
import * as versionController from '~/controller/version';
import * as healthController from '~/controller/health';

const router = Router();

// Home controller
router.get('/', homeController.getExampleResponse);

// Healthchecks controller
router.get('/health/liveness', healthController.getLivenessProbe);
router.get('/health/readiness', healthController.getReadinessProbe);

// Version controller
router.get('/version', versionController.getAppVersion);

export default router;
