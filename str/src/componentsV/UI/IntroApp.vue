<template>
  <section class="intro">
    <div class="container">
      <div class="intro_wrapper">
        <div class="intro_info">
          <div class="intro_title">
            <h1>
              Яркие гаджеты <br />
              на любой вкус и день
            </h1>
          </div>
          <div class="intro_subtitle">
            Мы собрали лучшие гаджеты от лучших брендов, чтобы порадовать вас
            свежими <br />
            новинками digital-рынка.
          </div>
          <div class="intro_btn">
            <button>Смотреть каталог</button>
          </div>
        </div>
        <v-carousel cycle height="400" show-arrows hide-delimiter-background>
          <template v-slot:prev="{ props }">
            <div class="slider_btn2">
              <v-btn
                variant="elevated"
                color="primary"
                @click="props.onClick"
              ></v-btn>
              <font-awesome-icon icon="fa-solid fa-arrow-left" />
            </div>
          </template>
          <template v-slot:next="{ props }">
            <div class="slider_btn">
              <v-btn :max-width="wig" variant="elevated" @click="props.onClick">
              </v-btn>
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </div>
          </template>
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet height="100%">
              <div class="d-flex fill-height justify-center align-center">
                <img
                  class="intro_img"
                  src="@/assets/img/bg/slider_bg.png"
                  alt=""
                />
                <img class="intro_drones" :src="slide.drones" alt="" />
                <div class="intro_slider">
                  <h3>{{ slide.title }}</h3>
                  <div class="intro_text">
                    {{ slide.text }}
                  </div>
                  <div class="intro_price">{{ slide.price }}</div>
                </div>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: "IntroApp",
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['slides']),
  }
};
</script>

<style lang="scss">
.v-carousel__controls {
  gap: 1rem;
  button {
    border-radius: 0;
    width: 30px;
    height: 8px;
    background-color: rgba(255, 255, 255, 0.35);
    cursor: pointer;
    &:hover {
      background-color: azure;
      color: azure;
    }
    &:active {
      background-color: azure;
      color: azure;
    }
  }

  .v-btn--active {
    background-color: azure;
    color: azure;

    &:active {
      background-color: azure;
      color: azure;
    }
  }

  .v-btn--density-default {
    width: 30px;
    height: 8px;
  }
}

.slider_btn {
  position: relative;
  left: -2rem;
  button {
    opacity: 0;
    z-index: 5;
    cursor: pointer;
  }

  svg {
    position: absolute;
    top: 10%;
    right: 1.2rem;
    font-size: 1.8rem;
    color: #fff;
    cursor: pointer;
  }
}

.slider_btn2 {
  position: relative;
  left: 0rem;
  button {
    opacity: 0;
    z-index: 5;
    cursor: pointer;
  }

  svg {
    position: absolute;
    top: 10%;
    right: 1.2rem;
    font-size: 1.8rem;
    color: #fff;
  }
}
</style>
