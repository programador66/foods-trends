import FoodRepository from '../repositories/FoodRepository';

class FoodService {

  private foodRepository: FoodRepository;

  constructor(foodRepository: FoodRepository) {
    this.foodRepository = foodRepository;
  }

  public all(): any {
    const foods = this.foodRepository.all();

    return foods;
  }

  public async getFoodById(food_id:Number) {
    const foodsByid = await this.foodRepository.getFoodsById(food_id);
    
    if (!foodsByid)
      throw Error('Não existe informaão para esse item!');

      const foodWithDataGraphics = foodsByid.map((f:any) => f.food_trend);
      const foodWithDataDate = foodsByid.map((f:any) => f.date);


    return {
      data:foodWithDataGraphics,
      labels:foodWithDataDate
    };
  }

  public async getGeotrendFoodById(food_id:Number) {
    const foodsGeoByid = await this.foodRepository.getGeoTrendFoodsById(food_id);
    
    if (!foodsGeoByid)
      throw Error('Não existe informaão para esse item!');

      const foodGeotrendLabels = foodsGeoByid.map((f:any) => f.name);
      const foodGeotrend = foodsGeoByid.map((f:any) => f.trend_percent);

    return {
      data:foodGeotrend,
      labels: foodGeotrendLabels
    };
  }
}

export default FoodService;