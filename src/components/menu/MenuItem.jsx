import { Box } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'

import styles from './Menu.module.scss'

const MenuItem = ({ item }) => {
  const location = useLocation()
  const { pathname } = location

  const isActive = pathname === item.link

  return (
    <li>
      <Link to={item.link} className={`${isActive ? styles.active : ''}`}>
        <Box display="flex" gap={5}>
          {<item.icon />}

          {item.title}
        </Box>
      </Link>
    </li>
  )
}

export default MenuItem
