import React, { memo } from 'react'
import { HomeWrapper } from './style'

const Home = memo(() => {
  return (
    <HomeWrapper>
      home页
    </HomeWrapper>
  )
})

Home.displayName = 'Home'

export default Home
