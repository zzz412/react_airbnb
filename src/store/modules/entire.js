// 全局模块Reducer
import { getEntireRoomList } from '@/api/modules/entire'
import { createSlice } from '@reduxjs/toolkit'

// 创建切片【模块】
const EntireSlice = createSlice({
  name: 'entire',
  initialState: {
    list: [], // 房源列表
    totalCount: 0, // 总条数
  },
  reducers: {
    setList(state, { payload }) {
      state.list = payload
    },
    setTotal(state, { payload }) {
      state.totalCount = payload
    }
  },
})

// 分页获取房源列表数据
export const getRoomListAction = (page) => async (dispatch) => {
  const res = await getEntireRoomList(page * 20, 20)
  dispatch(setList(res.list))
  dispatch(setTotal(res.totalCount))
}

// 导出action
export const { setList, setTotal } = EntireSlice.actions

// 导出reducer
export default EntireSlice.reducer
