import { GetterTree, Module } from "vuex";
import { RootState } from "@/store/types";

export const state: RootState = {
  session: {
    active: false,
    user: {}
  }
};

export const getters: GetterTree<RootState, RootState> = {
  isActiveSession(state: RootState): Boolean {
    return state.session.active;
  }
};

export const mutations = {};

export const actions = {};

const module: Module<RootState, RootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
};

export default module;
