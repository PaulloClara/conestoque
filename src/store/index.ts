import Vue from "vue";
import Vuex from "vuex";

import rootModule from "@/store/modules";

Vue.use(Vuex);

const store = new Vuex.Store({
  ...rootModule,
  modules: {}
});

export default store;
