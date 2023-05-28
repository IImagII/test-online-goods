import { axiosClassic } from '../api/axios'

export const OrderService = {
  async createOrder(orderData) {
    const { data } = await axiosClassic.post('/order', orderData)

    return data
  }
}
