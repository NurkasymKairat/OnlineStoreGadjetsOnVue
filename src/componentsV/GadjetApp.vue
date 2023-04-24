<template>
  <section class="gadjet">
    <div class="container">
      <div class="gadjet_wrapper">
        <div class="gadjet_items">
          <div class="gadjet_info">
            <div class="gadjet_title">
              <font-awesome-icon :icon="icons" /> {{ title }}
            </div>
            <div class="gadjet_subtitle">{{ subtitle }}</div>
          </div>
          <div class="gadjet_img">
            <img :src="images" alt="" />
          </div>
        </div>
      </div>
      <CatalogApp :product="phones"></CatalogApp>
    </div>
  </section>
</template>
<script>
import CatalogApp from "./CatalogApp.vue";
export default {
  name: "GadjetApp",
  components: {
    CatalogApp,
  },
  props: {
    icons: {
      type: Array,
      required: false,
    },
    phones: Array,
    images: String,
    title: String,
    subtitle: String,
  },
  data() {},
};
</script>
<style lang="scss">
.gadjet {
  //   background: linear-gradient(109.71deg, #0b090a 0%, #242423 98.84%);
  padding: 3rem 0;
  &_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &_info {
    text-align: center;
    margin-bottom: 2rem;
  }

  &_title {
    font-weight: 600;
    font-size: calc(9vw + 1vh);

    background: linear-gradient(90.42deg, #ffb6ff 1.74%, #b74bff 120.19%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: #b74bff;
  }

  &_subtitle {
    font-weight: 600;
    font-size: calc(3vw + 1vh);

    background: linear-gradient(90.42deg, #ffb6ff 1.74%, #b74bff 120.19%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &_img {
    text-align: center;
    img {
      width: 80%;
    }
  }
}
</style>
