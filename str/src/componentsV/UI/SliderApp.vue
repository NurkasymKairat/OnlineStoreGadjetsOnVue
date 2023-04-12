<template>
  <section class="slider">
    <div class="container">
      <div class="slider_title">Горячие поступления</div>
      <div class="slider_wrapper">
        <v-sheet class="mx-auto" elevation="8" max-width="100%">
          <v-slide-group
            v-model="model"
            class="pa-4"
            selected-class="bg-primary"
            mandatory
            show-arrows
          >
            <CatalogApp
              :styles="styelMargin"
              :product="hotProducts"
            ></CatalogApp>
          </v-slide-group>
        </v-sheet>
      </div>
    </div>
  </section>
</template>
<script>
import CatalogApp from "../CatalogApp.vue";

export default {
  name: "SliderApp",
  data() {
    return {
      styelMargin: "2rem",
    };
  },
  components: { CatalogApp },
  computed: {
    items() {
      return this.$store.state.AllProducts.items;
    },
    hotProducts() {
      return this.items.filter((item) => item.id % 2);
    },
  },
};
</script>
<style lang="scss">
.v-slide-group__next {
  i {
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid #2d2e32;
  }
}
.v-slide-group__prev {
  i {
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-right: 15px solid #2d2e32;
  }
}
</style>
