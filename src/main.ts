import Vue from "vue";

import store from "@/store";
import router from "@/router";
import App from "@/App.vue";

import "@/plugins/primevue";
import "@/registerServiceWorker";
import "@/assets/styles/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
