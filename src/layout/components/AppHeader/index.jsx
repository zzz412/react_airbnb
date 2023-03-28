import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconLogo from '@/assets/svg/icon_logo'
import IconMenu from '@/assets/svg/icon_menu'
import React, { memo } from 'react'
import { HeaderWrapper } from './style'

const AppHeader = memo(() => {
  // 将svg图片封装成组件的形式去使用
  // 优点: 动态的控制宽高与颜色
  return (
    <HeaderWrapper>
      {/* 左 */}
      <div className='header-left'>
        <div className='logo'>
          <IconLogo />
        </div>
      </div>
      {/* 中 */}
      <div className='header-center'></div>
      {/* 右 */}
      <div className='header-right'>
        <div className='btns'>
          <span className='btn'>登录</span>
          <span className='btn'>注册</span>
          <span className='btn'>
            <IconGlobal />
          </span>
        </div>
        <div className='profile'>
          <IconMenu />
          <IconAvatar />
        </div>
      </div>
    </HeaderWrapper>
  )
})

AppHeader.displayName = 'AppHeader'

export default AppHeader
