import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '@/components/pages/main/MainPage.vue'
import ShopePage from '@/components/pages/shope/ShopePage.vue'
import ProductPage from '@/components/pages/product/ProductPage.vue'

const router = createRouter({
  history: createWebHashHistory('/Shoppe/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage,
    },
    {
      path: '/shope',
      name: 'shope',
      component: ShopePage,
    },
    {
      path: '/product',
      name: 'product',
      component: ProductPage,
    },
  ],
})

export default router
