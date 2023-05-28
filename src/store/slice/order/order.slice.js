import { createSlice } from '@reduxjs/toolkit'

import { createOrder } from './order.action'

const initialState = {
  data: null,
  isLoading: false
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createOrder.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.data = payload
      })
      .addCase(createOrder.rejected, (state) => {
        state.isLoading = false
        state.data = []
      })
  }
})
