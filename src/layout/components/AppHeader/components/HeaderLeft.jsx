import IconLogo from '@/assets/svg/icon_logo'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()

  return (
    <LeftWrapper className='header-left'>
      <div className='logo'>
        <div className='icon' onClick={() => navigate('/')}>
          <IconLogo />
        </div>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft
