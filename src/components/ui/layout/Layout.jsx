import { Box, Container } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import Footer from '../../Footer'
import Header from '../../Header'
import SideBar from '../../SideBar'

const Layout = () => {
  return (
    <>
      <Container
        maxW="container.xl"
        display="flex"
        flexDirection="column"
        minHeight="100vh"
      >
        <Header />

        <Box flex="1" display="flex">
          <Box width="20%">
            <SideBar />
          </Box>
          <Box width="80%">
            <Outlet />
          </Box>
        </Box>

        <Footer />
      </Container>
    </>
  )
}

export default Layout
