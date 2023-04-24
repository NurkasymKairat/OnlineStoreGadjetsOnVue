<template>
  <GadjetApp
    :icons="icon"
    :subtitle="subtitles"
    :title="titles"
    :images="imgd"
    :phones="ipadsItems"
  ></GadjetApp>
</template>
<script>
import GadjetApp from "@/componentsV/GadjetApp.vue";

export default {
  name: "IpadPage",
  components: { GadjetApp },
  data() {
    return {
      imgd: "/src/assets/img/ipades.png",
      titles: "iPad Pro 2022",
      subtitles: "Получите новые впечатления",
      icon: ["fab", "apple"],
    };
  },
  computed: {
    items() {
      return this.$store.state.AllProducts.items;
    },
    ipadsItems() {
      return this.items.filter((item) => item.id > 9 && item.id < 13);
    },
  },
};
</script>
