import Vue from "vue";
import VueRouter from "vue-router";
import DashBoard from "../views/DashBoard.vue";
import Foods from "../views/Foods.vue";
import FoodsTrend from '../views/FoodsTrend.vue';
import teste from '../views/teste.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "DashBoard",
    component: DashBoard
  },
  {
    path: "/foods",
    name: "foods",
    component: Foods
  },
  {
    path: "/foods-trend",
    name: "foods-trend",
    component: FoodsTrend
  },
  {
    path: "/teste",
    name: "teste",
    component: teste
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
