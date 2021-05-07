class FoodTrend {
  food_id: Number;
  food_trend: number;
  date: Date;
 
  constructor({food_id, food_trend, date }: FoodTrend) {
    
    this.food_id = food_id;
    this.date = date;
    this.food_trend = food_trend;
  }

}

export default FoodTrend;