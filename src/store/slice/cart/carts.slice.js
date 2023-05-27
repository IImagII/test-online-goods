import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPrice: 0,
  items: [],
  addCount: 0
}

export const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addItems: (state, action) => {
      const findItem = state.items.find(
        (item) => item._id === action.payload._id
      )
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1
        })
      }
      state.totalPrice = state.items.reduce((total, item) => {
        return item.price * item.count + total
      }, 0)
      state.addCount = state.items.reduce((sum, item) => sum + item.count, 0)
    },
    minusItems: (state, action) => {
      const findItem = state.items.find(
        (item) => item._id === action.payload._id
      )
      if (findItem) {
        findItem.count--
      }
      state.totalPrice = state.items.reduce((total, item) => {
        return item.price * item.count + total
      }, 0)
      state.addCount = state.items.reduce((sum, item) => sum + item.count, 0)
    },
    removeItems: (state, action) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      )

      state.items = state.items.filter((item) => item._id !== action.payload)
      state.totalPrice = state.items.reduce((total, item) => {
        return item.price * item.count + total
      }, 0)
      state.addCount = state.items.reduce((sum, item) => sum + item.count, 0)
    },
    clearItems: (state) => {
      state.items = []
      state.totalPrice = 0
      state.addCount = 0
    }
  }
})

export const selectorCarts = (state) => state.carts
export const { addItems, removeItems, clearItems, minusItems } =
  cartSlice.actions
