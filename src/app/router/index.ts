import { createRouter,  createWebHistory } from 'vue-router'
import MainPage from '@/components/pages/main/MainPage.vue'
import ShopePage from '@/components/pages/shope/ShopePage.vue'
import ProductPage from '@/components/pages/product/ProductPage.vue'
import BlogPage from '@/components/pages/blog/BlogPage.vue'
import StoryPage from '@/components/pages/story/StoryPage.vue'

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
