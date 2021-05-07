import knex from '../database/connection';

class TrendFoodsRepository {
 
  public  all()  {
    const foods =  knex("food").select('*');
    return foods;
  }

  public comparateFoodTrend(date: Array<String>,food_ids: Array<Number>): any {
    
    const trend =  knex("*").from("food_trend as ft").innerJoin('food as f','ft.food_id','f.id')
      .whereIn('food_id',food_ids)
      .where('date','like',`%${date}%`);
    
    return trend;
  }

  public getGeoTrendAllCountriesById(foods_id: Array<Number>) {
    const geoTrend =  knex.select("gt.*","ct.code")
      .from("geo_trend as gt")
      .innerJoin("country as ct","gt.country_id","ct.id")
      .whereIn('gt.food_id',foods_id);
  
    return geoTrend;
  }
}

export default TrendFoodsRepository;