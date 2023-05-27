import { Icon, IconButton, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <IconButton
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      variant="ghost"
      colorScheme="blue"
      size="100px"
      fontSize="20px"
      onClick={toggleColorMode}
      icon={<Icon as={isDark ? FaSun : FaMoon} />}
    />
  )
}
export default ColorModeSwitcher
