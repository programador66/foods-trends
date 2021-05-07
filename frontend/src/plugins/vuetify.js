import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const vuetify = new Vuetify({
   theme: {
      themes: {
         light: {
            primary: '#FFFFFF',
            secondary: '#0A334D',
            accent: '#8c9eff',
            error: '#b71c1c',
            anchor: '#20bec6',
         },
         dark: {
            primary: '#FFFFFF',
         }
      }
   }
})

export default vuetify;
