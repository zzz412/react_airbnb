import { configureStore } from '@reduxjs/toolkit'
import home from './modules/home'
import global from './modules/global'
import entire from './modules/entire'
import detail from "./modules/detail"


// 配置store仓库
const store = configureStore({
  reducer: { home, global, entire, detail },
})

export default store
