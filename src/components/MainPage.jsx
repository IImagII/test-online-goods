import { Container } from '@chakra-ui/react'

import CardList from './card/CardList'

const MainPage = () => {
  return (
    <Container
      maxW="container.2xl"
      display="flex"
      padding="20px"
      flexWrap="wrap"
    >
      <CardList />
    </Container>
  )
}

export default MainPage
