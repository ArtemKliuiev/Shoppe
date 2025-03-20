import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/pages/MainPage.vue'
import ShopePage from '@/components/pages/ShopePage.vue'
import ProductPage from '@/components/pages/ProductPage.vue'
import BlogPage from '@/components/pages/BlogPage.vue'
import StoryPage from '@/components/pages/StoryPage.vue'
import ErrorPage from '@/components/pages/ErrorPage.vue'
import ContactsPage from '@/components/pages/ContactsPage.vue'

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
      path: '/product/:id?',
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
    {
      path: '/contact',
      name: 'contact',
      component: ContactsPage,
    },
    {
      path: '/404',
      name: '404',
      component: ErrorPage,
    },
  ],
})

router.beforeEach((to) => {
  if (to.name === 'product') {
    window.scrollTo({
      top: 0,
    })
  }
})

export default router
