import { HiHome, HiShoppingCart } from 'react-icons/hi'

import { ROUTES } from '../../utils/routes'

export const menu = [
  {
    title: 'Все',
    icon: HiHome,
    link: ROUTES.HOME
  },
  {
    title: 'Корзина',
    icon: HiShoppingCart,
    link: ROUTES.CART
  }
]
