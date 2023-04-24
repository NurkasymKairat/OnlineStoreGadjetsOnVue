import { createRouter, createWebHistory } from "vue-router";
import PolicyPages from "@/views/PolicyPages.vue";
import FirstPages from "@/views/FirstPages.vue";
import ProductPages from "@/views/ProductPages.vue";
import CartPages from "@/views/CartPages.vue";
import PhonePage from "@/views/PhonePage.vue";
import IpadPage from "@/views/IpadPage.vue";
import WatchPage from "@/views/WatchPage.vue";
import DronePage from "@/views/DronePage.vue";
const routes = [
  {
    name: "first",
    path: "/",
    component: FirstPages,
  },
  {
    name: "policy",
    path: "/policy",
    component: PolicyPages,
  },
  {
    path: "/product/:id",
    component: ProductPages,
  },
  {
    name: "cart",
    path: "/cart",
    component: CartPages,
  },
  {
    name: "phone",
    path: "/phones",
    component: PhonePage,
  },
  {
    name: "ipad",
    path: "/ipades",
    component: IpadPage,
  },
  {
    name: "watch",
    path: "/watches",
    component: WatchPage,
  },
  {
    name: "drone",
    path: "/drones",
    component: DronePage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
