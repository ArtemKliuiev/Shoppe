import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('@/components/pages/main/MainPage.vue'),
    },
    {
      path: '/shope',
      name: 'shope',
      component: import('@/components/pages/shope/ShopePage.vue'),
    },
    {
      path: '/product',
      name: 'product',
      component: import('@/components/pages/product/ProductPage.vue'),
    },
  ],
})

export default router
