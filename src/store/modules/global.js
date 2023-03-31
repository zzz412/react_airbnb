// 全局模块Reducer
import { createSlice } from '@reduxjs/toolkit'

// 创建切片【模块】
const GlobalSlice = createSlice({
  name: 'global',
  initialState: {
    // 头部配置
    headerConfig: {
      isFixed: false,
    },
  },
  reducers: {
    setHeaderConfig(state, { payload }) {
      state.headerConfig = { ...state.headerConfig, ...payload }
    },
  },
})

// 导出action
export const { setHeaderConfig } = GlobalSlice.actions

// 导出reducer
export default GlobalSlice.reducer
