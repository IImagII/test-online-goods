import { createSlice } from '@reduxjs/toolkit'

import { goodsGet } from './goods.actions'

const initialState = {
  data: [],
  isLoading: false
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(goodsGet.pending, (state) => {
        state.isLoading = true
      })
      .addCase(goodsGet.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.data = payload
      })
      .addCase(goodsGet.rejected, (state) => {
        state.isLoading = false
        state.data = []
      })
  }
})
