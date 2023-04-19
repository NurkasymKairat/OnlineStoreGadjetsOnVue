export const cart = {
  namespaced: true,
  state: {
    allTotal: 0,
    allPrice: 0,
    allProduct: [],
    btnCart: true,
  },
  getters: {
    allProduct: (state) => state.allProduct,
    btnCart: (state) => state.btnCart,
    allTotal: (state) => state.allTotal,
  },
  mutations: {
    addProductCart(state, item) {
      if (
        item &&
        !state.allProduct.some((subarray) =>
          subarray.some((product) => product.id === item[0].id)
        )
      ) {
        state.allProduct.push(item);
      } else {
        state.allProduct = state.allProduct.map((subarray) => {
          if (subarray.some((product) => product.id === item[0].id)) {
            return [...subarray];
          } else {
            return subarray;
          }
        });
      }
      localStorage.setItem("allProduct", JSON.stringify(state.allProduct));
    },
    handleDelete(state, id) {
      state.allProduct = state.allProduct.filter(subarray => {
        // удалить подмассив, если все его элементы не равны искомому id
        return !subarray.every(product => product.id === id);
      });
      localStorage.setItem("allProduct", JSON.stringify(state.allProduct));
    },
    deleteToCart(state, id) {
      state.allProduct = state.allProduct.map((subarray) => {
        if (subarray.some((t) => t === id)) {
          return subarray.filter((t) => t !== id);
        } else {
          return subarray;
        }
      });
      localStorage.setItem("allProduct", JSON.stringify(state.allProduct));
    },
  },
  actions: {
    addProductCart({ commit }, item) {
      commit("addProductCart", item);
    },
    handleDelete({ commit }, item) {
      commit("handleDelete", item);
    },
    deleteToCart({ commit }, item) {
      commit("deleteToCart", item);
    },
  },
};
