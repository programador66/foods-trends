import { Router } from 'express';
import comparateFoodRouter from './comparateFood.routes';
import foodRouter from './food.routes';

const routes = Router();

routes.use('/comparate-food', comparateFoodRouter);
routes.use('/food', foodRouter);

export default routes;