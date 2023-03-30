import { getHomeDateAction } from '@/store/modules/home'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './components/HomeBanner'
import HomeSection from './components/HomeSection'
import HomeSection2 from './components/HomeSection2'
import { HomeWrapper } from './style'

const Home = memo(() => {
  const { good, high, discount, hot } = useSelector(({ home }) => home, shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHomeDateAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        {/* 折扣房源 */}
        {discount.title && <HomeSection2 infoData={discount} />}
        {/* 热门房源 */}
        {/* {hot.title && <HomeSection2 infoData={hot} />} */}
        {/* 高性价比房源 */}
        {good.title && <HomeSection infoData={good} />}
        {/* 高分好评房源 */}
        {high.title && <HomeSection infoData={high} />}
      </div>
    </HomeWrapper>
  )
})

Home.displayName = 'Home'

export default Home
