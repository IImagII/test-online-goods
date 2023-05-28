import { createSlice } from '@reduxjs/toolkit'

import { getIdGood, goodsGet } from './goods.actions'

const initialState = {
  data: [],
  isLoading: false,
  good: null
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
      .addCase(getIdGood.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getIdGood.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.good = payload
      })
      .addCase(getIdGood.rejected, (state) => {
        state.isLoading = false
        state.good = null
      })
  }
})
