import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    initUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    initUserAsyc({ commit }, user) {
      commit("initUser", user);
    },
  },
  getters: {},
  modules: {},
});
