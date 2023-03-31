import RoomItem from '@/components/RoomItem'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { ListWrapper } from './style'

const EntireList = memo(() => {
  const { list, totalCount } = useSelector(({ entire }) => entire, shallowEqual)

  return (
    <ListWrapper>
      <h2 className='title'>{totalCount}多处住所</h2>
      <div className='list'>
        {list.map((item) => (
          <RoomItem key={item.id} item={item} width='20%' />
        ))}
      </div>
    </ListWrapper>
  )
})

EntireList.displayName = 'EntireList'

export default EntireList
