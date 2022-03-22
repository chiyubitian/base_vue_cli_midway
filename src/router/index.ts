import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Antd from "../views/Antd.vue";
import VueChart from "../views/VueChart.vue";

Vue.use(VueRouter);

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home,
    props: {
      icon: "home",
    },
  },
  {
    path: "/antd",
    name: "antd",
    component: Antd,
    props: {
      icon: "appstore",
    },
  },
  {
    path: "/vueChart",
    name: "vueChart",
    component: VueChart,
    props: {
      icon: "line-chart",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
