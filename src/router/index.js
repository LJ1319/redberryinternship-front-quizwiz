import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '@/pages/LandingPage.vue'
import AboutPage from '@/pages/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    }
  ]
})

export default router
