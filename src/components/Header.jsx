import { Box, Container, Flex, Image, useColorMode } from '@chakra-ui/react'

import logo from '../styles/img/pizza.png'

import ShowCart from './ShowCart'
import ColorModeSwitcher from './ui/ColorModeSwitcher'

const Header = () => {
  const { colorMode } = useColorMode()

  return (
    <Box as="header" py={3} bg={colorMode === 'dark' ? 'gray.400' : 'gray.200'}>
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Image src={logo} alt="logo" boxSize="70px" objectFit="cover" />
          <ShowCart />
          <ColorModeSwitcher />
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
