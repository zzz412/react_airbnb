import React, { memo } from 'react'
import { ListWrapper } from './style'
import PropTypes from 'prop-types'
import RoomItem from '../RoomItem'

const SectionList = memo(({ list = [], width }) => {
  return (
    <ListWrapper>
      {list.slice(0, 8).map((item) => (
        <RoomItem key={item.id} item={item} width={width} />
      ))}
    </ListWrapper>
  )
})

SectionList.propTypes = {
  list: PropTypes.array.isRequired,
}

SectionList.displayName = 'SectionList'

export default SectionList
