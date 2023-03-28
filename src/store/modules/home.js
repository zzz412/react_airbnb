// 首页模块Reducer
import { createSlice } from '@reduxjs/toolkit'

// 创建切片【模块】
const homeSlice = createSlice({
  name: 'home',
  initialState: { count: 10 },
  reducer: {
      addCount() {}
  }
})

// 导出action
export const { addCount } = homeSlice.actions

// 导出reducer
export default homeSlice.reducer

