import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { MdRemoveShoppingCart } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

import { ROUTES } from '../../utils/routes'

export const CartEmpty = () => {
  return (
    <Box
      textAlign="center"
      mt="100px"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Heading
        as="h2"
        fontSize="18px"
        fontWeight="bold"
        mb="10px"
        color="#333"
        textTransform="uppercase"
      >
        Корзина пустая{' '}
        <span role="img" aria-label="sad">
          😕
        </span>
      </Heading>
      <Text>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейдите на главную страницу.
      </Text>
      <Box mt="50px" alignSelf="center" mb="30px">
        <MdRemoveShoppingCart size={40} />
      </Box>
      <NavLink to={ROUTES.HOME}>
        <Button>Вернуться назад</Button>
      </NavLink>
    </Box>
  )
}
