import axios from '@/plugins/axios/index.js'

export const GetCategories = async () => {
  return axios.get(`/api/categories`)
}

export const GetLevels = async () => {
  return axios.get('/api/levels')
}

export const GetQuizzes = async (params) => {
  return axios.get(`/api/quizzes`, {
    params: {
      page: params.page,
      ...params
    }
  })
}

export const GetQuiz = async (id) => {
  return axios.get(`/api/quizzes/${id}`)
}

export const GetSimilarQuizzes = async (id) => {
  return axios.get(`/api/quizzes/${id}/similar`)
}
