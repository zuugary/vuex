import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalTvCount: 10,
  },
  getters: {},
  mutations: {
    removeTv(state) {
      state.totalTvCount--;
    },
  },
  actions: {
    removeTv(context) {
      if (context.state.totalTvCount >= 1) {
        context.commit("removeTv");
      }
    },
  },
});
