import axios from '@/plugins/axios/index.js'

export const InitializeCSRFProtection = async () => {
  return await axios.get('/sanctum/csrf-cookie')
}

export const Signup = async (credentials) => {
  await InitializeCSRFProtection()

  return await axios.post('/api/signup', credentials)
}

export const ResendVerification = async (credentials) => {
  await InitializeCSRFProtection()

  return await axios.post('api/email/verification-notification', credentials)
}

export const VerifyEmail = async (url) => {
  return await axios.get(url)
}

export const Login = async (credentials) => {
  await InitializeCSRFProtection()

  return await axios.post('/api/login', credentials)
}

export const RetrieveAuthUser = async () => {
  return await axios.get('/api/user')
}
