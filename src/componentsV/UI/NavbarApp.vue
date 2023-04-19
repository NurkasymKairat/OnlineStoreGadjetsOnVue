<template>
  <header class="header">
    <div class="container">
      <div class="header_wrapper">
        <div class="header_loga">
          <router-link to="/">
            <img src="@/assets/icons/Лого.svg" alt="" />
          </router-link>
        </div>
        <div
          ref="headerTarget"
          :class="{ header_nav_active: burgers }"
          class="header_nav"
        >
          <nav class="nav">
            <a href="#" @click="closeBurgers">Телефоны</a>
            <a href="#" @click="closeBurgers">Планшеты</a>
            <a href="#" @click="closeBurgers">Часы</a>
            <a href="#" @click="closeBurgers">Дроны</a>
            <a  @click="dialog = true" v-show="burgers" >Заказать звонок</a>
            <router-link @click="closeBurgers" :to="{name: 'cart'}" v-show="burgers">Корзина</router-link>
          </nav>
        </div>
        <div class="header_tel">
          <a href="#">+7 7172 264 55 55</a>
        </div>
        <div class="header_btn">
          <button @click="dialog = true">Заказать звонок</button>
        </div>
        <CartApp></CartApp>
        <div
          @click="openBurgers"
          :class="{ burger_active: burgers }"
          class="burger"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <main class="modal">
        <v-dialog transition="dialog-bottom-transition" v-model="dialog" width="auto">
          <v-card>
            <div class="modal__content">
              <form action="#">
                <div @click="dialog = false" data-close class="modal__close">&times;</div>
                <div class="modal__title">
                  Мы свяжемся с вами как можно быстрее!
                </div>
                <input
                  required
                  placeholder="Ваше имя"
                  name="name"
                  type="text"
                  class="modal__input"
                />
                <input
                  required
                  placeholder="Ваш номер телефона"
                  name="phone"
                  type="phone"
                  class="modal__input"
                />
                <button class="modal_btn">Перезвоните мне</button>
                
              </form>
            </div>
    
          </v-card>
        </v-dialog>
      </main>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import CartApp from "../CartApp.vue";
export default {
  name: "NavbarApp",
  data() {
    return {
      dialog: false,
    }
  },
  components: {
    CartApp,
  },
  computed: {
    ...mapGetters(["burgers", "tellCall"]),
  },
  methods: {
    ...mapMutations(["openBurgers", "closeBurgers"]),

  },
};
</script>

<style scoped></style>
