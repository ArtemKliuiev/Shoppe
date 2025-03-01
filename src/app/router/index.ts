import { createRouter,  createWebHistory } from 'vue-router'
import MainPage from '@/components/pages/MainPage.vue'
import ShopePage from '@/components/pages/ShopePage.vue'
import ProductPage from '@/components/pages/ProductPage.vue'
import BlogPage from '@/components/pages/BlogPage.vue'
import StoryPage from '@/components/pages/StoryPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
    {
      path: '/blog',
      name: 'blog',
      component: BlogPage,
    },
    {
      path: '/story',
      name: 'story',
      component: StoryPage,
    },
  ],
})

export default router
