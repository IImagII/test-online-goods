import { createAsyncThunk } from '@reduxjs/toolkit'

import { GoodService } from '../../../services/good/good.service'

export const goodsGet = createAsyncThunk(
  'goods/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await GoodService.getAll()

      return response
    } catch (err) {
      return thunkAPI.rejectWithValue(err)
    }
  }
)
