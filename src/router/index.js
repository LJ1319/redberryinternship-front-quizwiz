import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '@/pages/LandingPage.vue'
import QuizListingPage from '@/pages/QuizListingPage.vue'
import SignupPage from '@/pages/auth/SignupPage.vue'
import ResendVerificationPage from '@/pages/auth/ResendVerificationPage.vue'
import LoginPage from '@/pages/auth/LoginPage.vue'
import ForgotPasswordPage from '@/pages/auth/ForgotPasswordPage.vue'
import ResetPasswordPage from '@/pages/auth/ResetPasswordPage.vue'

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
      path: '/quizzes',
      name: 'quiz-listing',
      component: QuizListingPage
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage
    },
    {
      path: '/resend',
      name: 'resend-verification',
      component: ResendVerificationPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/forgot',
      name: 'forgot-password',
      component: ForgotPasswordPage
    },
    {
      path: '/reset',
      name: 'reset-password',
      component: ResetPasswordPage
    }
  ]
})

export default router
