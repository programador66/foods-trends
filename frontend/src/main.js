import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Highcharts from "highcharts";
import Maps from "highcharts/modules/map";
import HighchartsVue from "highcharts-vue";

Maps(Highcharts);
Vue.use(HighchartsVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
