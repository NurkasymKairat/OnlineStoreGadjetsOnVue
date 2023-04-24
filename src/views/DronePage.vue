<template>
  <GadjetApp
    :subtitle="subtitles"
    :title="titles"
    :images="imgd"
    :phones="dronesItems"
  ></GadjetApp>
</template>
<script>
import GadjetApp from "@/componentsV/GadjetApp.vue";

export default {
  name: "DronePage",
  components: { GadjetApp },
  data() {
    return {
      imgd: "/src/assets/img/drne.png",
      titles: "DJI Mavick Air 2",
      subtitles: "Пополните свой видеоблог вместе с DJI ",
    };
  },
  computed: {
    items() {
      return this.$store.state.AllProducts.items;
    },
    dronesItems() {
      return this.items.filter((item) => item.id > 5 && item.id < 10);
    },
  },
};
</script>
