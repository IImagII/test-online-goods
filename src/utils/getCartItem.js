export const getCartItem = (items, itemId) => {
  const cartItem = items.find((elem) => elem._id === itemId)
  return cartItem ? cartItem.count : 0
}
