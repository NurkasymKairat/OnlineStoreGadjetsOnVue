<template>
  <GadjetApp
    :icons="icon"
    :subtitle="subtitles"
    :title="titles"
    :images="imgd"
    :phones="phoneItems"
  ></GadjetApp>
</template>
<script>
import GadjetApp from "@/componentsV/GadjetApp.vue";

export default {
  name: "PhonePage",
  components: { GadjetApp },
  data() {
    return {
      imgd: "/src/assets/img/phones.png",
      titles: "IPHONE 14 PRO",
      subtitles: "Получите новые впечатления",
      icon: ["fab", "apple"],
    };
  },
  computed: {
    items() {
      return this.$store.state.AllProducts.items;
    },
    phoneItems() {
      return this.items.filter((item) => item.id <= 5);
    },
  },
};
</script>
