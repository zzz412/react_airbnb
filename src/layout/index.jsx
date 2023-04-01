import React, { memo, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import { LayoutWrapper } from './style'
import useScrollTop from '@/hooks/useScrollTop'

const Layout = memo(() => {
  useScrollTop()

  return (
    <LayoutWrapper>
      <AppHeader />
      <Suspense fallback={<h1>加载中...</h1>}>
        <Outlet></Outlet>
      </Suspense>
      <AppFooter />
    </LayoutWrapper>
  )
})

Layout.displayName = 'Layout'

export default Layout
