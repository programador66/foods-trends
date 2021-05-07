import { Router } from 'express';
import FoodController from '../controllers/FoodController';

const foodRouter = Router();
const foodController =  new FoodController();

foodRouter.get('/', foodController.getFoods);
foodRouter.get('/getFoodById/:food_id', foodController.getFoodById);
foodRouter.get('/getGeotrendFoodById/:food_id', foodController.getGeotrendFoodById);

export default foodRouter;