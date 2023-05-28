import { combineReducers } from 'redux'

import { cartSlice } from './slice/cart/carts.slice'
import { goodsSlice } from './slice/goods/goods.slice'
import { orderSlice } from './slice/order/order.slice'

export const rootReducer = combineReducers({
  goods: goodsSlice.reducer,
  carts: cartSlice.reducer,
  order: orderSlice.reducer
})
