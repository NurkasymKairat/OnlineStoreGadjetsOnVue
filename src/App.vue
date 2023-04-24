<template>
  <NavbarApp></NavbarApp>
  <router-view></router-view>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters("cart", ["allProduct"]),
  },
  methods: {
    ...mapActions("cart", ["setAllProduct"]),
  },
  mounted() {
    if (localStorage.getItem("allProduct")) {
      const allProduct = JSON.parse(localStorage.getItem("allProduct"));
      this.setAllProduct(allProduct);
    }
  },
};
</script>
