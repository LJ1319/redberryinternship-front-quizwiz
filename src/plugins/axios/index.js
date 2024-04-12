import axios from 'axios'
import router from '@/router/index.js'

import { InitializeCSRFProtection } from '@/services/api/auth.js'
import { setCookie } from '@/utils/helpers.js'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: 'application/json'
  }
})

instance.interceptors.request.use(
  async function (config) {
    if (config.method === 'post') {
      await InitializeCSRFProtection()
    }

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (config) {
    return config
  },
  async function (error) {
    if (error.response.status === 401) {
      setCookie('user', JSON.stringify({ isAuth: false }), 30)

      setTimeout(() => {
        router.replace({ name: 'login' })
      }, 2000)
    }

    return Promise.reject(error)
  }
)

export default instance
