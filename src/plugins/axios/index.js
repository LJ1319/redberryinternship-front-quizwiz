import axios from 'axios'
import { InitializeCSRFProtection } from '@/services/api/auth.js'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  withXSRFToken: true
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

export default instance
