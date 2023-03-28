import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconLogo from '@/assets/svg/icon_logo'
import IconMenu from '@/assets/svg/icon_menu'
import React, { memo } from 'react'
import HeaderCenter from './components/HeaderCenter'
import HeaderLeft from './components/HeaderLeft'
import HeaderRight from './components/HeaderRight'
import { HeaderWrapper } from './style'

const AppHeader = memo(() => {
  // 将svg图片封装成组件的形式去使用
  // 优点: 动态的控制宽高与颜色
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

AppHeader.displayName = 'AppHeader'

export default AppHeader
