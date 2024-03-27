import axios from '@/plugins/axios/index.js'

export const InitializeCSRFProtection = async () => {
  return await axios.get('/sanctum/csrf-cookie')
}

export const Signup = async (credentials) => {
  return await axios.post('/api/signup', credentials)
}

export const Login = async (credentials) => {
  return await axios.post('/api/login', credentials)
}

export const RetrieveAuthUser = async () => {
  return await axios.get('/api/user')
}
