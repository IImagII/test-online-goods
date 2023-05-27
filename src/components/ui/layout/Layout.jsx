import { Box, Container } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import Footer from '../../Footer'
import Header from '../../Header'
import SideBar from '../../SideBar'

const Layout = () => {
  const headerHeight = 60
  const footerHeight = 80

  return (
    <>
      <Container maxW="container.xl">
        <Header />
        <Box width="100%" display="flex">
          <Box width="20%">
            <SideBar />
          </Box>
          <Box
            width="80%"
            height={`calc(100vh - ${headerHeight}px - ${footerHeight}px)`}
          >
            <Outlet />
          </Box>
        </Box>
        <Footer />
      </Container>
    </>
  )
}

export default Layout
