import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react'

const CardItem = ({ item }) => {
  const { title, price, imageUrl, category } = item

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} minChildWidth="250px">
      <Card maxW="sm" margin={3}>
        <CardBody>
          <Image src={imageUrl} alt={title} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text color="blue.600" fontSize="2xl">
              Категория: {category}
            </Text>
            <Text color="blue.600" fontSize="2xl">
              {price} ₴
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </SimpleGrid>
  )
}
export default CardItem
