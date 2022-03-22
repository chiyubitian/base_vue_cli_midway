import Vue from "vue";
import Antd from "ant-design-vue";
import Components from "./components";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(Components);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
