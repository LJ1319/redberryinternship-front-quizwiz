import axios from '@/plugins/axios/index.js'

export const GetCategories = async () => {
  return axios.get(`/api/categories`)
}

export const GetLevels = async () => {
  return axios.get('/api/levels')
}

export const GetQuizzes = async (currentPage = 1) => {
  return axios.get(`/api/quizzes`, {
    params: {
      page: currentPage
    }
  })
}
