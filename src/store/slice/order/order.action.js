import { createAsyncThunk } from '@reduxjs/toolkit'

import { OrderService } from '../../../services/order.service'

export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (orderData, thunkAPI) => {
    try {
      const response = await OrderService.createOrder(orderData)

      return response
    } catch (err) {
      return thunkAPI.rejectWithValue(err)
    }
  }
)
