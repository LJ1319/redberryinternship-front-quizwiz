import axios from '@/plugins/axios/index.js'

export const GetQuizzes = async (quantity = 9, currentPage = 1) => {
  return axios.get(`/api/quizzes`, {
    params: {
      quantity: quantity,
      current_page: currentPage
    }
  })
}
