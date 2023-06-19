import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalTvCount: 10,
    isLarryHappy: true,
    isJennyHappy: true,
  },
  getters: {
    happyStaff: (state) => {
      return state.isLarryHappy && state.isJennyHappy;
    },
  },
  mutations: {
    removeTv(state, amount) {
      state.totalTvCount -= amount;
    },
  },
  actions: {
    removeTv(context, payload) {
      const amount = payload?.amount ? payload.amount : 1;

      if (context.state.totalTvCount >= amount) {
        context.commit("removeTv", amount);
      }
    },
  },
});
