import React, { memo, useEffect } from 'react'
import EntireFilter from './components/EntireFilter'
import EntirePagination from './components/EntirePagination'
import EntireList from './components/EntireList'
import { EntireWrapper } from './style'
import { useDispatch } from 'react-redux'
import { setHeaderConfig } from '@/store/modules/global'
import { getRoomListAction } from '@/store/modules/entire'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setHeaderConfig({ isFixed: true }))
    dispatch(getRoomListAction())
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireList />
      <EntirePagination />
    </EntireWrapper>
  )
})

Entire.displayName = 'Entire'

export default Entire
