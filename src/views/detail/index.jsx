import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import DetailPictures from './components/DetailPictures'
import DetailContent from './components/DetailContent'
import { useDispatch } from 'react-redux'
import { setHeaderConfig } from '@/store/modules/global'

const Detail = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setHeaderConfig({ isFixed: false }))
  }, [])
  
  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailContent />
    </DetailWrapper>
  )
})

Detail.displayName = 'Detail'

export default Detail
