import { createRouter, createWebHistory } from 'vue-router'
import PolicyPages from '@/views/PolicyPages.vue'
import FirstPages from '@/views/FirstPages.vue'
import ProductPages from '@/views/ProductPages.vue'
import CartPages from '@/views/CartPages.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'first',
      path: '/',
      component: FirstPages,
    },
    {
      name: 'policy',
      path: '/policy',
      component: PolicyPages,
    },
    {
      path: "/product/:id",
      component: ProductPages,
    },
    {
      name: 'cart',
      path: "/cart",
      component: CartPages,
    },
  ]
})

export default router
