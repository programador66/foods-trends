import { Response, Request } from 'express';
import FoodRepository from '../repositories/FoodRepository';
import FoodService from '../services/FoodService';

const foodsRepository = new FoodRepository();
const foodService = new FoodService(foodsRepository);

class FoodController {

   public async getFoods(request: Request, response: Response) {
        const foods = await foodService.all();
      
        return response.status(200).json({data: foods});
    }

    public async getFoodById(request: Request, response: Response) {
        
        try {
            const food_id = request.params.food_id;
        
            const foods = await foodService.getFoodById(Number(food_id));
    
            return response.status(200).json(foods);

        } catch (error) {
            return response.status(400).json({error:error.getMessage});
        }

    }

    public async getGeotrendFoodById(request: Request, response: Response) {
        
        try {
            const food_id = request.params.food_id;
        
            const foods = await foodService.getGeotrendFoodById(Number(food_id));
    
            return response.status(200).json(foods);

        } catch (error) {
            return response.status(400).json({error:error.getMessage});
        }

    }
}

export default FoodController;