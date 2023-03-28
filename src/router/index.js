import Layout from '@/layout'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

// 三个页面:  主页、 更多页 、 详情页
const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        Component: lazy(() => import('@v/home')),
      },
      {
        path: '/entire',
        Component: lazy(() => import('@v/entire')),
      },
      {
        path: '/detail',
        Component: lazy(() => import('@v/detail')),
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
