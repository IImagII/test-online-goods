import { Box, Spinner } from '@chakra-ui/react'
import { useEffect } from 'react'

import { useActions } from '../../hooks/useActions'
import { useGoods } from '../../hooks/useSelectorState'

import CardItem from './CardItem'

const CardList = () => {
  const { goodsGet } = useActions()
  const { data: goodsData = [] } = useGoods()

  useEffect(() => {
    goodsGet()
  }, [])

  return (
    <>
      {goodsData.length < 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          width="100%"
        >
          <Spinner size="xl" />
        </Box>
      ) : (
        goodsData.map((item) => <CardItem item={item} key={item._id} />)
      )}
    </>
  )
}

export default CardList
