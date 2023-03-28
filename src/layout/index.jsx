import React, { memo, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from './components/AppHeader'
import { LayoutWrapper } from './style'

const Layout = memo(() => {
  return (
    <LayoutWrapper>
      <AppHeader />
      <Suspense fallback={<h1>加载中...</h1>}>
        <Outlet></Outlet>
      </Suspense>
      <h1>底部</h1>
    </LayoutWrapper>
  )
})

Layout.displayName = 'Layout'

export default Layout
