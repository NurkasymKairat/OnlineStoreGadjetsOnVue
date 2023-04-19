export const product =  {
  namespaced: true,
  state: {
    total: 1,
  },
  getters: {
    total: state => state.total,
    itemsMap(state) {
      let map = {};

      state.items.forEach((pr, i) => {
        map[pr.id.toString()] = i;
      });

      return map;
    },
  },
  mutations: {
    increaseNum(state) {
      if (state.total < 5) {
        state.total += 1;
      }
    },
    decreaseNum(state) {
      if (state.total > 1) {
        state.total -= 1;
      }
    },
  },

  actions: {
    increaseTotal({ commit }) {
      commit('increaseNum');
    },
    decreaseTotal({ commit }) {
      commit('decreaseNum');
    }
  }
}
