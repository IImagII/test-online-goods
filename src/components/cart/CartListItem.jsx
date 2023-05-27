import { Image, Td, Tr } from '@chakra-ui/react'
import { MdDeleteForever } from 'react-icons/md'

import { useActions } from '../../hooks/useActions'

const CartListItem = ({ item }) => {
  const { title, count, price, imageUrl } = item
  const { removeItems } = useActions()

  return (
    <Tr>
      <Td>{<Image src={imageUrl} boxSize="70px" objectFit="cover" />}</Td>
      <Td>{title}</Td>
      <Td>{count}шт.</Td>
      <Td isNumeric>{count * price} грн. </Td>
      <Td>
        <MdDeleteForever
          color="red"
          size={20}
          onClick={() => removeItems(item)}
        />
      </Td>
    </Tr>
  )
}

export default CartListItem
