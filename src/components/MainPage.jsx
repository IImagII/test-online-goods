import { Container } from '@chakra-ui/react'

import CardList from './card/CardList'

const MainPage = () => {
  return (
    <Container maxW="container.xl" display="flex" padding="20px">
      <CardList />
    </Container>
  )
}

export default MainPage
