<template>
  <div id="catalog" class="products">
    <div class="container">
      <div class="products_info">
        <div class="products_title">Каталог товаров</div>
        <div class="products_tabs">
          <a
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{ products_acitve: activeTab === index }"
            @click="
              activeTab = index;
              removeActiveClass(index - 1);
            "
            >{{ tab }}</a
          >
        </div>
      </div>

      <CatalogApp :product="listItems()"></CatalogApp>
    </div>
  </div>
</template>

<script>
import CatalogApp from "../CatalogApp.vue";

export default {
  name: "AllCatalog",
  components: {
    CatalogApp,
  },
  data() {
    return {
      activeTab: 0,
      tabs: ["Все", "Телефоны", "Дроны", "Айпады", "Часы"],
    };
  },

  computed: {
    items() {
      return this.$store.state.AllProducts.items;
    },
    filterdAllItem() {
      return this.items.sort(() => Math.random() - 0.5);
    },
    phoneItems() {
      return this.items.filter((item) => item.id <= 5);
    },
    dronesItems() {
      return this.items.filter((item) => item.id > 5 && item.id < 10);
    },
    ipadsItems() {
      return this.items.filter((item) => item.id > 9 && item.id < 13);
    },
    watchesItems() {
      return this.items.filter((item) => item.id > 12);
    },
  },
  methods: {
    removeActiveClass(index) {
      const tabs = document.querySelectorAll(".products_tabs a");
      Array.from(tabs).forEach((tab, i) => {
        if (tab.classList.contains("products_acitve") && i !== index) {
          tab.classList.remove("products_acitve");
        }
      });
    },
    listItems() {
      if (this.activeTab == 0) {
        return this.filterdAllItem;
      } else if (this.activeTab == 1) {
        return this.phoneItems;
      } else if (this.activeTab == 2) {
        return this.dronesItems;
      } else if (this.activeTab == 3) {
        return this.ipadsItems;
      } else if (this.activeTab == 4) {
        return this.watchesItems;
      }
    },
  },
};
</script>

<style lang="scss">
.fade-enter-active {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
