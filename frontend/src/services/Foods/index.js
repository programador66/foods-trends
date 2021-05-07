import api from '../Base_api/api';

class Foods extends api {
   async getFoods() {
      const response = await this.api.get(`/api/food`);

      return response;
   }

   async getFoodById(food_id) {
      const response = await this.api.get(`/api/food/getFoodById/${food_id}`);

      return response;
   }

   async getGeoTrendFoodById(food_id) {
      const response = await this.api.get(`/api/food/getGeotrendFoodById/${food_id}`);

      return response;
   }

   async getComparateFoods(obj) {
      const response = await this.api.post(`/api/comparate-food`,obj);

      return response;
   }

   async getGeoTrendAllCountriesById(obj) {
      const response = await this.api.post(`/api/comparate-food/countries`,obj);

      return response;
   }
}

export default new Foods;