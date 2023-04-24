export const cart = {
  namespaced: true,
  state: {
    allProduct: [],
    btnCart: true,
  },
  getters: {
    allProduct: (state) => state.allProduct,
    btnCart: (state) => state.btnCart,
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
      state.allProduct = state.allProduct.filter((subarray) => {
        return !subarray.every((product) => product.id === id);
      });
      localStorage.setItem("allProduct", JSON.stringify(state.allProduct));
    },
    deleteToCart(state, index) {
      state.allProduct = state.allProduct
        .map((subarray) => {
          if (subarray.indexOf(index) !== -1) {
            return subarray.filter((t) => t !== index);
          } else {
            return subarray;
          }
        })
        .filter((subarray) => {
          return subarray.length > 0;
        });
      localStorage.setItem("allProduct", JSON.stringify(state.allProduct));
    },

    setAllProduct(state, payload) {
      state.allProduct = payload;
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
    setAllProduct({ commit }, item) {
      commit("setAllProduct", item);
    },
  },
};
