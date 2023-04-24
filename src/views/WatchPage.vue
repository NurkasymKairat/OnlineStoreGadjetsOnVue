<template>
  <GadjetApp
    :icons="icon"
    :subtitle="subtitles"
    :title="titles"
    :images="imgd"
    :phones="watchesItems"
  ></GadjetApp>
</template>
<script>
import GadjetApp from "@/componentsV/GadjetApp.vue";

export default {
  name: "WatchPage",
  components: { GadjetApp },
  data() {
    return {
      imgd: "/src/assets/img/watches.png",
      titles: "Watch Ultra",
      subtitles: "Попробуйте новые суперсовременные часы ",
      icon: ["fab", "apple"],
    };
  },
  computed: {
    items() {
      return this.$store.state.AllProducts.items;
    },
    watchesItems() {
      return this.items.filter((item) => item.id > 12);
    },
  },
};
</script>
