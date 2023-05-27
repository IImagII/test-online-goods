import { combineReducers } from 'redux'

import { goodsSlice } from './slice/goods/goods.slice'

export const rootReducer = combineReducers({
  goods: goodsSlice.reducer
})
