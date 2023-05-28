import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
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
import { useState } from 'react'
import { useCallback } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { useActions } from '../../hooks/useActions'
import { useCarts } from '../../hooks/useSelectorState'
import { ROUTES } from '../../utils/routes'
import InputForOrder from '../input-order/InputForOrder'

import { CartEmpty } from './CartEmpty'
import CartListItem from './CartListItem'

const CartList = () => {
  const { items = [], addCount, totalPrice } = useCarts()
  const { clearItems, createOrder } = useActions()
  const navigate = useNavigate()
  const [inputDataAll, setInputDataAll] = useState({
    name: '',
    email: '',
    number: '',
    address: ''
  })

  const [isError, setIsError] = useState(true)

  const handleSubmitOrder = useCallback(() => {
    const formData = new FormData()

    for (const [key, value] of Object.entries(inputDataAll)) {
      formData.append(key, value)
    }

    formData.append('addCount', addCount)
    formData.append('totalPrice', totalPrice)

    if (
      inputDataAll.name &&
      inputDataAll.email &&
      inputDataAll.number &&
      inputDataAll.address !== ''
    ) {
      setIsError(!isError)

      createOrder(formData)

      clearItems()

      navigate('/')

      setInputDataAll({
        name: '',
        email: '',
        number: '',
        address: ''
      })
    } else {
      setIsError(false)
    }
  }, [inputDataAll, addCount, totalPrice, createOrder, clearItems, navigate])

  return (
    <>
      <Box mt="50px">
        {items.length === 0 ? (
          <CartEmpty />
        ) : (
          <Box>
            {!isError && (
              <Alert status="error">
                <AlertIcon />

                <AlertDescription>
                  Заполните все поля для отправки заказа
                </AlertDescription>
              </Alert>
            )}

            <Box mb="50px">
              <InputForOrder
                inputDataAll={inputDataAll}
                setInputDataAll={setInputDataAll}
                isError={isError}
              />
            </Box>
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

              <Button bg="rgb(253, 153, 153)" onClick={() => clearItems()}>
                Очистить корзину
              </Button>
              <Button onClick={handleSubmitOrder} colorScheme="blue">
                Отправить заказ
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </>
  )
}

export default CartList
