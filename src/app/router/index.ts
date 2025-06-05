import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/pages/MainPage.vue'
import ShopePage from '@/components/pages/ShopePage.vue'
import ProductPage from '@/components/pages/ProductPage.vue'
import BlogPage from '@/components/pages/BlogPage.vue'
import StoryPage from '@/components/pages/StoryPage.vue'
import ErrorPage from '@/components/pages/ErrorPage.vue'
import ContactsPage from '@/components/pages/ContactsPage.vue'
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
import LoginPage from '@/components/pages/LoginPage.vue'
import TestPage from '@/components/pages/TestPage.vue'
import ResetPage from '@/components/pages/ResetPage.vue'
import PasswordPage from '@/components/pages/PasswordPage.vue'
import AccountPage from '@/components/pages/AccountPage.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: MainPage,
      },
      {
        path: 'shope',
        name: 'shope',
        component: ShopePage,
      },
      {
        path: 'product/:id?',
        name: 'product',
        component: ProductPage,
      },
      {
        path: 'blog',
        name: 'blog',
        component: BlogPage,
      },
      {
        path: 'story',
        name: 'story',
        component: StoryPage,
      },
      {
        path: 'contact',
        name: 'contact',
        component: ContactsPage,
      },
      {
        path: 'login',
        name: 'login',
        component: LoginPage,
      },
      {
        path: '404',
        name: '404',
        component: ErrorPage,
      },
      {
        path: 'reset',
        name: 'reset',
        component: ResetPage,
      },
      {
        path: 'password',
        name: 'password',
        component: PasswordPage,
      },
      {
        path: 'account',
        name: 'account',
        component: AccountPage,
      },
      {
        path: 'test',
        name: 'test',
        component: TestPage,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  if (to.name === 'product') {
    window.scrollTo({
      top: 0,
    })
  }
})

export default router
