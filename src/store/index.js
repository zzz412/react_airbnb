import { configureStore } from '@reduxjs/toolkit'
import home from './modules/home'

// 配置store仓库
const store = configureStore({
  reducer: { home },
})

export default store
