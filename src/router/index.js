import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '@/pages/LandingPage.vue'
import SignupPage from '@/pages/auth/SignupPage.vue'
import LoginPage from '@/pages/auth/LoginPage.vue'
import ForgotPassword from '@/pages/auth/ForgotPasswordPage.vue'
import ResetPassword from '@/pages/auth/ResetPasswordPage.vue'

import PageHeader from '@/components/shared/PageHeader.vue'
import PageFooter from '@/components/shared/PageFooter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      components: {
        default: LandingPage,
        header: PageHeader,
        footer: PageFooter
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/forgot',
      name: 'forgot-password',
      component: ForgotPassword
    },
    {
      path: '/reset',
      name: 'reset-password',
      component: ResetPassword
    }
  ]
})

export default router
