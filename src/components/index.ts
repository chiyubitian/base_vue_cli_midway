import Vue from "vue";
import ECharts from "vue-echarts";
import "echarts";

export default {
  install(V: typeof Vue) {
    V.component("app-chart", ECharts);
  },
};
