import classNames from 'classnames'
import React, { memo, useRef, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { shallowEqual, useSelector } from 'react-redux'
import HeaderCenter from './components/HeaderCenter'
import HeaderLeft from './components/HeaderLeft'
import HeaderRight from './components/HeaderRight'
import useScroll from '@/hooks/useScroll'
import { HeaderWrapper } from './style'

// 将svg图片封装成组件的形式去使用
// 优点: 动态的控制宽高与颜色
const AppHeader = memo(() => {
  const {isFixed, topTM} = useSelector(
    ({global}) => global.headerConfig,
    shallowEqual
  )
  const [isSearch, setIsSearch] = useState(false)
  const {scrollY} = useScroll()
  const prevScrollY = useRef()

  // 什么时候展开搜索框?  1. 点击搜索栏【isSearch】  2. 滚动时 Y为0
  // 特殊场景:  点击搜索栏展开搜索后 再次滚动隐藏搜索框
  if (!isSearch) prevScrollY.current = scrollY
  if (isSearch && scrollY - prevScrollY.current > 30) setIsSearch(false)

  // 头部透明条件:  1. topTM为true  2. Y为0
  // 面临的问题:  如何将透明度传递给所有后代组件 ->  themeContext
  const isTM = topTM && scrollY === 0

  return (
    <ThemeProvider theme={{ isTM }}>
      <HeaderWrapper className={classNames({fixed: isFixed})} isSearch={isSearch || isTM}>
        <div className="top">
          <HeaderLeft/>
          <HeaderCenter isSearch={isSearch || isTM} clickSearch={() => setIsSearch(true)}/>
          <HeaderRight/>
          {/* 搜索内容承载容器 */}
          <div className="wrapper"></div>
        </div>
        {/* 搜索内容遮罩 */}
        {isSearch && <div className="mask" onClick={() => setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

AppHeader.displayName = 'AppHeader'

export default AppHeader
