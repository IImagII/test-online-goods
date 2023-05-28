import { axiosClassic } from '../api/axios'

export const GoodService = {
  async getAll() {
    const { data } = await axiosClassic.get('/goods')

    return data
  }
}
