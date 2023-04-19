import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import colors from "vuetify/lib/util/colors";
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          // #FFCDD2
        },
      },
    },
  },
});

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faAngleLeft,
  faAngleRight,
  faArrowLeft,
  faArrowRight,
  faCartShopping,
  faEnvelope,
  faMapLocationDot,
  faTrashCan,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { faCcMastercard, faCcPaypal, faCcVisa, faGooglePay, faInstagram, faTelegram, faTiktok } from "@fortawesome/free-brands-svg-icons";

library.add(
  faTelegram,
  faCartShopping,
  faArrowRight,
  faArrowLeft,
  faMapLocationDot,
  faInstagram,
  faTiktok,
  faEnvelope,
  faAngleRight,
  faAngleLeft,
  faTrashCan,
  faCcPaypal,
  faCcMastercard,
  faCcVisa,
  faGooglePay,
);

import "./assets/sass/style.scss";
import componentsV from "./componentsV/UI";
const app = createApp(App);

componentsV.forEach((item) => {
  app.component(item.name, item);
});

app.component("font-awesome-icon", FontAwesomeIcon);

// app.use(createPinia());
app.use(router);
app.use(store);
app.use(vuetify);

app.mount("#app");
