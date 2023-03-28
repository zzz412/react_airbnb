// * 首页请求模块
import request from '..';

// 获取高性价比房源
export const getHomeGoodPriceData = () => request.get({ url: '/home/goodprice' })
