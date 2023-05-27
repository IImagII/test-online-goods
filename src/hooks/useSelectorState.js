import { useSelector } from 'react-redux'

export const useGoods = () => useSelector((state) => state.goods)

export const useCarts = () => useSelector((state) => state.carts)
