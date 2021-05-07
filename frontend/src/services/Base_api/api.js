import axios from 'axios';

class api {
   constructor() {
      const api = axios.create({
         baseURL: "http://localhost:3333"
      });
      this.api = api;
   }  
}

export default api;