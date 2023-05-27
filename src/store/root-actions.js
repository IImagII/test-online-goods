import * as cartsActions from './slice/cart/carts.slice'
import * as goodsActions from './slice/goods/goods.actions'

export const rootAction = {
  ...goodsActions,
  ...cartsActions
}
