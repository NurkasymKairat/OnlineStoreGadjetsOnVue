import { createStore } from "vuex";

export const BurgersModule = {
  state: {
    burgers: false,
  },
  getters: {
    burgers: (state) => state.burgers,
  },
  mutations: {
    openBurgers(state) {
      if (state.burgers == false) {
        state.burgers = true;
      } else {
        state.burgers = false;
      }
    },
  },
};
