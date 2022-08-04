import request from '@/utils/request'
// 左侧分类最后一个品牌的数据
export const findBrand = (limit) => {
  return request('/home/brand', 'get', {
    limit
  })
}

/**
 * 获取广告图
 * @returns Promise
 */
export const findBanner = () => {
  return request('/home/banner', 'get')
}

// 新鲜好物数据
export const findNew = () => {
  return request('home/new', 'get')
}

// 人气推荐数据 
export const findHot = () => {
  return request('home/hot', 'get')
}

// 商品数据
export const findGoods = () => {
  return request('home/goods', 'get')
}

// 最新专题
export const findSpecial = () => {
  return request('home/special', 'get')
}