import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import moment from "moment";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    api_key: "9a9e67553f653a1ad343b229dbf1bbcc",
  };
  return config;
});

Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.prototype.$moment = moment;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// 550?api_key=9a9e67553f653a1ad343b229dbf1bbcc
