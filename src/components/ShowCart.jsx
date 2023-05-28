import { Box } from '@chakra-ui/react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { useCarts } from '../hooks/useSelectorState'

const ShowCart = () => {
  const { addCount, totalPrice } = useCarts()

  return (
    <>
      <Box
        display="flex"
        gap="10px"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <AiOutlineShoppingCart size={25} />
        </Box>
        <Box>
          <Box>Товаров: {addCount} шт.</Box>
          <Box>На сумму: {totalPrice} грн.</Box>
        </Box>
      </Box>
    </>
  )
}

export default ShowCart
