import axios from '@/plugins/axios/index.js'

export const GetCategories = async () => {
  return axios.get(`/api/categories`)
}

export const GetLevels = async () => {
  return axios.get('/api/levels')
}

export const GetQuizzes = async (quantity = 9, currentPage = 1) => {
  return axios.get(`/api/quizzes`, {
    params: {
      quantity: quantity,
      current_page: currentPage
    }
  })
}
