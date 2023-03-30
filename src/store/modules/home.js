// 首页模块Reducer
import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotData,
} from '@/api/modules/home'
import { createSlice } from '@reduxjs/toolkit'

// 创建切片【模块】
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    good: {}, // 优质房源
    high: {}, // 高分房源
    hot: {}, // 热门房源
    discount: {}, // 折扣房源
  },
  reducers: {
    setRoom(state, { payload }) {
      state.good = payload[0]
      state.high = payload[1]
      state.hot = payload[2]
      state.discount = payload[3]
    },
  },
})

// 获取首页数据action
export const getHomeDateAction = () => async (dispatch) => {
  const requestArr = [
    getHomeGoodPriceData(),
    getHomeHighScoreData(),
    getHomeHotData(),
    getHomeDiscountData(),
  ]
  // Promise.all 效果:  执行所有Promise结果  并在所有结果full后  返回内容
  const res = await Promise.all(requestArr)
  dispatch(setRoom(res))
}

// 导出action
export const { setRoom } = homeSlice.actions

// 导出reducer
export default homeSlice.reducer
