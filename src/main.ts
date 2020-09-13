import Vue from "vue";
import store from "@/store";
import router from "@/router";
import App from "@/App.vue";

import "@/registerServiceWorker";

import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
