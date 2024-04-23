import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '@/pages/LandingPage.vue'
import QuizListingPage from '@/pages/QuizListingPage.vue'
import QuizDetail from '@/pages/QuizDetail.vue'
import SignupPage from '@/pages/auth/SignupPage.vue'
import ResendVerificationPage from '@/pages/auth/ResendVerificationPage.vue'
import LoginPage from '@/pages/auth/LoginPage.vue'
import ForgotPasswordPage from '@/pages/auth/ForgotPasswordPage.vue'
import ResetPasswordPage from '@/pages/auth/ResetPasswordPage.vue'

import PageHeader from '@/components/shared/PageHeader.vue'
import PageFooter from '@/components/shared/PageFooter.vue'

import { getCookie } from '@/utils/helpers.js'

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
        default: QuizDetail,
        header: PageHeader,
        footer: PageFooter
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
    }
  ]
})

router.beforeEach((to) => {
  const user = getCookie('user')
  const isAuth = user ? JSON.parse(user).isAuth : false

  const whiteList = ['quizzes', 'quiz-detail']

  if (isAuth && !to.meta.forAuth && to.name !== 'landing' && !whiteList.includes(to.name)) {
    return { name: 'landing' }
  }
})

export default router
