import { axiosClassic } from '../api/axios'

export const GoodService = {
  async getAll() {
    const { data } = await axiosClassic.get('/goods')

    return data
  },

  async getIdGood(id) {
    const { data } = await axiosClassic.get(`/good/${id}`)

    return data
  }
}
