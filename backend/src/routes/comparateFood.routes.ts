import { Router } from 'express';

import ComparateFoodController from '../controllers/ComparateFoodController';

const comparateFoodRouter = Router();
const comparateFoodController = new ComparateFoodController();

comparateFoodRouter.post('/', comparateFoodController.handleComparateFoodTrend);
comparateFoodRouter.post('/countries', comparateFoodController.handleGetGeoTrendCountriesById);

export default comparateFoodRouter;