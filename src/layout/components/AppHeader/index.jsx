import classNames from 'classnames'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import HeaderCenter from './components/HeaderCenter'
import HeaderLeft from './components/HeaderLeft'
import HeaderRight from './components/HeaderRight'
import { HeaderWrapper } from './style'

const AppHeader = memo(() => {
  // 将svg图片封装成组件的形式去使用
  // 优点: 动态的控制宽高与颜色
  const { isFixed } = useSelector(
    ({ global }) => global.headerConfig,
    shallowEqual
  )

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

AppHeader.displayName = 'AppHeader'

export default AppHeader
