import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
// 显示方式:  1. 显示全部   2. 显示更多xxx
const SectionFooter = memo(({ name }) => {
  const moreText = name ? `显示更多${name}` : '显示全部'
  return (
    <FooterWrapper name={name}>
      <div className='more'>
        {moreText}
        <div className='icon'>
          <IconMoreArrow />
        </div>
      </div>
    </FooterWrapper>
  )
})

SectionFooter.displayName = 'SectionFooter'

export default SectionFooter
