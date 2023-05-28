import * as cartsActions from './slice/cart/carts.slice'
import * as goodsActions from './slice/goods/goods.actions'
import * as ordersActions from './slice/order/order.action'

export const rootAction = {
  ...goodsActions,
  ...cartsActions,
  ...ordersActions
}
