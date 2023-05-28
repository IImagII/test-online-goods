import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Image,
  Text
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdRemove } from 'react-icons/md'
import { useParams } from 'react-router-dom'

import { useActions } from '../../hooks/useActions'
import { useGoods } from '../../hooks/useSelectorState'

const OneGood = () => {
  const { id } = useParams()
  const { getIdGood, addItems, minusItems } = useActions()
  const { good } = useGoods()

  useEffect(() => {
    getIdGood(id)
  }, [id, getIdGood])

  const handleAddCarts = () => {
    addItems(good)
  }

  const handleRemoveCarts = () => {
    minusItems(good)
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="20px"
      border="1px solid #ccc"
      borderRadius="5px"
      margin="10px"
    >
      <Image
        src={good.imageUrl}
        alt=""
        boxSize="200px"
        objectFit="cover"
        marginBottom="10px"
      />
      <Heading as="h2" fontSize="18px" fontWeight="bold" marginBottom="5px">
        {good.title}
      </Heading>
      <Text fontSize="16px" marginBottom="5px">
        {good.price} ₴
      </Text>
      <Box>
        <ButtonGroup spacing="2">
          <Button colorScheme="teal" variant="outline" onClick={handleAddCarts}>
            Добавить в корзину
          </Button>
          <Button
            colorScheme="red"
            variant="outline"
            onClick={handleRemoveCarts}
          >
            Убрать из корзину
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  )
}

export default OneGood
