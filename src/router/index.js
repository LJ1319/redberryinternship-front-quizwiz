import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '@/pages/LandingPage.vue'
import QuizListingPage from '@/pages/QuizListingPage.vue'
import QuizDetailPage from '@/pages/QuizDetailPage.vue'
import QuizPlayPage from '@/pages/QuizPlayPage.vue'
import SignupPage from '@/pages/auth/SignupPage.vue'
import ResendVerificationPage from '@/pages/auth/ResendVerificationPage.vue'
import LoginPage from '@/pages/auth/LoginPage.vue'
import ForgotPasswordPage from '@/pages/auth/ForgotPasswordPage.vue'
import ResetPasswordPage from '@/pages/auth/ResetPasswordPage.vue'
import ErrorPage from '@/pages/ErrorPage.vue'

import PageHeader from '@/components/shared/PageHeader.vue'
import PageFooter from '@/components/shared/PageFooter.vue'

import { getCookie } from '@/utils/helpers.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
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
      name: 'quizzes',
      components: {
        default: QuizListingPage,
        header: PageHeader,
        footer: PageFooter
      },
      meta: {
        needsSearch: true
      }
    },
    {
      path: '/quizzes/:id',
      name: 'quiz-detail',
      components: {
        default: QuizDetailPage,
        header: PageHeader,
        footer: PageFooter
      }
    },
    {
      path: '/quizzes/:id/play',
      name: 'quiz-play',
      components: {
        default: QuizPlayPage
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage,
      meta: {
        forAuth: false
      }
    },
    {
      path: '/resend',
      name: 'resend-verification',
      component: ResendVerificationPage,
      meta: {
        forAuth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: {
        forAuth: false
      }
    },
    {
      path: '/forgot',
      name: 'forgot-password',
      component: ForgotPasswordPage,
      meta: {
        forAuth: false
      }
    },
    {
      path: '/reset',
      name: 'reset-password',
      component: ResetPasswordPage,
      meta: {
        forAuth: false
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      components: {
        default: ErrorPage,
        header: PageHeader,
        footer: PageFooter
      }
    }
  ]
})

router.beforeEach((to) => {
  const user = getCookie('user')
  const isAuth = user ? JSON.parse(user).isAuth : false

  const whiteList = ['quizzes', 'quiz-detail', 'quiz-play', 'error']
  const isRestricted =
    to.name !== 'landing' && !to.meta.forAuth && isAuth && !whiteList.includes(to.name)

  if (isRestricted) {
    return { name: 'landing' }
  }
})

export default router
