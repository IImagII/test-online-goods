import {
  Box,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdRemove } from 'react-icons/md'
import { Link } from 'react-router-dom'

import { useActions } from '../../hooks/useActions'
import { useCarts } from '../../hooks/useSelectorState'
import { getCartItem } from '../../utils/getCartItem'
import { ROUTES } from '../../utils/routes'

import styles from './Card.module.scss'

const CardItem = ({ item }) => {
  const { title, price, imageUrl, _id } = item
  const { addItems, minusItems } = useActions()
  const { items = [] } = useCarts()

  const handleAddCarts = () => {
    addItems(item)
  }

  const handleRemoveCarts = () => {
    minusItems(item)
  }

  return (
    <Link to={`${ROUTES.GOOD_ID}/${_id}`}>
      <Card maxW="270px" margin={3} bg="gray.200">
        <CardBody>
          <Image src={imageUrl} alt={title} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md" mb="5">
              {title.slice(0, 20)}
            </Heading>

            <Text color="blue.600" fontSize="2xl">
              {price} ₴
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <ButtonGroup spacing="2">
                <AiOutlinePlus
                  onClick={handleAddCarts}
                  size={30}
                  className={styles.icon}
                />
                <MdRemove
                  onClick={handleRemoveCarts}
                  size={30}
                  className={styles.icon}
                />
              </ButtonGroup>
            </Box>
            <Box ml="30px">
              <Text>
                В корзине:<Text as="b"> {getCartItem(items, _id)}</Text> шт.
              </Text>
            </Box>
          </Box>
        </CardFooter>
      </Card>
    </Link>
  )
}
export default CardItem
