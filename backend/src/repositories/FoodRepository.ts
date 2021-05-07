import knex from '../database/connection';

class FoodRepository {
 
  public all() {
    const foods = knex("food").select('*');
    return foods;
  }

  public getFoodsById(food_id: Number): any {
    const foods = knex("food_trend").select('*').where('food_id','=',food_id);
    return foods;
  }

  public getGeoTrendFoodsById(food_id: Number): any {
    const foods = knex.select('*').from('geo_trend').join('country', 'country.id','geo_trend.country_id').where('geo_trend.food_id',food_id);
    return foods;
  }
}

export default FoodRepository;