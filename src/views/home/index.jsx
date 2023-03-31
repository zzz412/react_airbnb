import { setHeaderConfig } from '@/store/modules/global'
import { getHomeDateAction } from '@/store/modules/home'
import { Skeleton } from 'antd'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './components/HomeBanner'
import HomeSection from './components/HomeSection'
import HomeSection2 from './components/HomeSection2'
import HomeSection3 from './components/HomeSection3'
import HomeSection4 from './components/HomeSection4'
import { HomeWrapper } from './style'

const Home = memo(() => {
  const { good, high, discount, hot, plus, longfor , isLoading } = useSelector(
    ({ home }) => home,
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHomeDateAction())
    dispatch(setHeaderConfig({ isFixed: false }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        <Skeleton
          className='skeleton'
          loading={isLoading}
          active
          paragraph={{ rows: 8 }}
        >
          {/* 折扣房源 */}
          <HomeSection2 infoData={discount} />
          {/* 热门房源 */}
          <HomeSection2 infoData={hot} />
          {/* 你可能想去 */}
          <HomeSection4 infoData={longfor} />
          {/* 高性价比房源 */}
          <HomeSection infoData={good} />
          {/* 高分好评房源 */}
          <HomeSection infoData={high} />
          {/* PLUS房源 */}
          <HomeSection3 infoData={plus} />
        </Skeleton>
      </div>
    </HomeWrapper>
  )
})

Home.displayName = 'Home'

export default Home
