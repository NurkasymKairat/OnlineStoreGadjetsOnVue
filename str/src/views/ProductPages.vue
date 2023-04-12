<template>
  <section class="product">
    <div class="container">
      <div class="product_wrapper">
        <CatalogApp :product="products"></CatalogApp>
        
      </div>
    </div>
  </section>
</template>
<script>
import CatalogApp from "@/componentsV/CatalogApp.vue";
export default {
  name: "ProductPages",
  components: { CatalogApp },
  data() {
    return {};
  },
  computed: {
    item() {
      return this.$store.state.AllProducts.items;
    },
    id() {
      return this.$route.params.id;
    },
    products() {
      return this.item.filter((item) => item.id == this.id);
    },
  },
};
</script>
<style lang="scss">
    .product {
        &_wrapper {
            display: flex;
            justify-content: space-between;
        }
    }

</style>
