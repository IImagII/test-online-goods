import { Box } from '@chakra-ui/react'

import Menu from './menu/Menu'
import { menu } from './menu/menu.data'

const SideBar = () => {
  return (
    <Box>
      <Menu title="Меню" items={menu} />
    </Box>
  )
}

export default SideBar
