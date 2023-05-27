import {
  Box,
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

import { useActions } from '../../hooks/useActions'
import { useCarts } from '../../hooks/useSelectorState'
import { ROUTES } from '../../utils/routes'

import { CartEmpty } from './CartEmpty'
import CartListItem from './CartListItem'

const CartList = () => {
  const { items = [], addCount, totalPrice } = useCarts()
  const { clearItems } = useActions()

  return (
    <>
      <Box mt="50px">
        {items.length === 0 ? (
          <CartEmpty />
        ) : (
          <Box>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Вид</Th>
                    <Th>Товар</Th>
                    <Th>Количество(шт.)</Th>
                    <Th isNumeric>Стоимость</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {items.map((item) => (
                    <CartListItem item={item} key={item._id} />
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            <Flex justifyContent="space-between">
              <Text as="b">TOTAL: {addCount} шт.</Text>

              <Text as="b">Сумма заказа: {totalPrice}</Text>
            </Flex>
            <Box mt="30px" display="flex" justifyContent="space-between">
              <NavLink to={ROUTES.HOME}>
                <Button>Вернуться назад</Button>
              </NavLink>

              <Button onClick={() => clearItems()}>Очистить корзину</Button>
            </Box>
          </Box>
        )}
      </Box>
    </>
  )
}

export default CartList
