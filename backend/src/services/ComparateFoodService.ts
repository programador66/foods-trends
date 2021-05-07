import TrendFoodsRepository from '../repositories/TrendFoodsRepository';
import { groupBy, getRandomColor } from '../helpers/FoodHelper';
interface Request {
  food_id: Array<Number>,
  date: String
}

class CreateAppointmentService {

  private trendFoodsRepository: TrendFoodsRepository;

  constructor(trendFoodsRepository: TrendFoodsRepository) {
    this.trendFoodsRepository = trendFoodsRepository;
  }

  public all(): any {
    const foods = this.trendFoodsRepository.all();

    return foods;
  }

  public async comparateFoodTrend({date, food_id}: Request){
    
    if (date == "" || food_id.length == 0)
      throw Error('Campos não podem ser nulos!');

    const findComparateFood = await this.trendFoodsRepository.comparateFoodTrend(Array<String>(date), food_id);
    
    if(!findComparateFood)
      throw Error('Erro interno do servidor!');

    const labels = findComparateFood.map((l:any) => l.date).filter((el:any,index:any,self:any) => index === self.indexOf(el));
    
   
    const groupById = groupBy("food_id");
    
    const group =  groupById(findComparateFood);

    
    let trend_foods = [];

    for (let i=0; i <= food_id.length -1;i++) {

      const obj:any = {
        borderColor: getRandomColor(),
        backgroundColor: 'rgba(0,0,0,0)',
        label: group[String(food_id[i])][0].name,
        data: group[String(food_id[i])].map((g:any) => g.food_trend )
      }
      trend_foods.push(obj)
    }
  

    return {
      datasets:trend_foods,
      labels
    };
  }

  public async getGeoTrendAllCountriesById(foods_id: Array<Number>, food_id_for_comparate: Number) {

    const geoTrendCountry = await this.trendFoodsRepository.getGeoTrendAllCountriesById(foods_id);

    const codes = geoTrendCountry.map((c:any) => c.country_id).filter((el:any,index:any,self:any) => index === self.indexOf(el));

    const group = groupBy("country_id");

    const groupGeo = group(geoTrendCountry);

    let trends:any = [];
    for (let i=0; i <= codes.length -1;i++) {
      
      const obj = {
        code: groupGeo[String(codes[i])][0].code,
        sm: groupGeo[String(codes[i])].map((c:any) => c.trend_percent)
          .filter((el:any,index:any,self:any) => index === self.indexOf(el))
          .reduce((x:any, y:any) => x+y)
      }

      trends.push(obj)
    }

    const datFinal =  geoTrendCountry.filter((geo:any) => geo.food_id === food_id_for_comparate).map((gt:any) => {

      let sm = 0;
      trends.forEach((codeWithSm:any) => {
        if (codeWithSm.code === gt.code)
          sm = codeWithSm.sm;
      });

      return [
        gt.code.toLowerCase(),
        Number((Number(gt.trend_percent)*(100/sm)).toFixed(2)) || 0
      ]

    });

    return datFinal;
  }
}

export default CreateAppointmentService;