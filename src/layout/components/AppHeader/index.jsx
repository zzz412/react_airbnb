import classNames from 'classnames'
import React, { memo, useState } from 'react'
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
  const [isSearch, setIsSearch] = useState(false)

  // 分析动画
  // 1.  承载容器:  进场  ->   高度 0 - 100  时间 0.25s
  //               出场  ->  高度 100 - 0   时间 0.25s

  // 2.  search-bar:  进场:  ->   透明度 0 - 1  大小 1.5 ->  1  位置y  40  ->  0   时间 0.25s
  //                  出场:  ->   透明度 1 - 0


  // 3.  search-tabs: 进场 ->  透明度 0 - 1   大小 0.8 ->  1   位置y -40  0  时间 0.25s
  //                  出场 ->  透明度 1 - 0   大小 1  ->  0.8  位置y 0   -40 时间 0.25s

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })} isSearch={isSearch}>
      <div className='top'>
        <HeaderLeft />
        <HeaderCenter isSearch={isSearch} clickSearch={() => setIsSearch(true)}/>
        <HeaderRight />
        {/* 搜索内容承载容器 */}
        <div className='wrapper'></div>
      </div>
      {/* 搜索内容遮罩 */}
      { isSearch && <div className='mask' onClick={() => setIsSearch(false)}></div>}
    </HeaderWrapper>
  )
})

AppHeader.displayName = 'AppHeader'

export default AppHeader
