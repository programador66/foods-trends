import { Response, Request } from 'express';

import TrendFoodsRepository from '../repositories/TrendFoodsRepository';
import ComparateFoodService from '../services/ComparateFoodService';

const trendFoodsRepository = new TrendFoodsRepository();
const comparateFoodService = new ComparateFoodService(trendFoodsRepository);

class ComparateFoodController {

    public async handleComparateFoodTrend(request: Request, response: Response) {

        try {
            const { food_id, date } = request.body;

            const res = await comparateFoodService.comparateFoodTrend({food_id, date});
            
            return response.status(200).json(res);
        
        } catch (error) {
            
            return response.status(400).json({
            error: error.message
            })
        }
    }

    public async handleGetGeoTrendCountriesById(request: Request, response: Response) {

        try {
            const { foods_id, food_id_for_comparate } = request.body;

            const res = await comparateFoodService.getGeoTrendAllCountriesById(foods_id,food_id_for_comparate);
            
            return response.status(200).json(res);
        
        } catch (error) {
            
            return response.status(400).json({
            error: error.message
            })
        }
    }

}

export default ComparateFoodController;