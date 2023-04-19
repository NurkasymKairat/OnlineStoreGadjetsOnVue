export const CatalogFilter = {
    state: {
        activeTab: 0,
        tabs: ["Все", "Телефоны", "Дроны", "Айпады", "Часы"],
      },
      mutations: {
        SET_ACTIVE_TAB(state, index) {
          state.activeTab = index;
        },
      },
      getters: {
        filterdAllItem: (state) => {
          return state.items.sort(() => Math.random() - 0.5);
        },
        phoneItems: (state) => {
          return state.items.filter((item) => item.id <= 5);
        },
        dronesItems: (state) => {
          return state.items.filter((item) => item.id > 5 && item.id < 10);
        },
        ipadsItems: (state) => {
          return state.items.filter((item) => item.id > 9 && item.id < 13);
        },
        watchesItems: (state) => {
          return state.items.filter((item) => item.id > 12);
        },
      },
};
