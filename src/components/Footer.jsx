import { Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Text textAlign="center">
      © {new Date().getFullYear()} Online-shop. All rights reserved.
    </Text>
  )
}

export default Footer
