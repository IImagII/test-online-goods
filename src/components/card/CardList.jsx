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
      {goodsData.map((item) => (
        <CardItem item={item} key={item._id} />
      ))}
    </>
  )
}

export default CardList
