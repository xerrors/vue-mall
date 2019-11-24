import request from '@/utils/request'

// 获取商品详细信息
export function getProductInfo (productID) {
  return request({
    url: '/product/getInfo',
    method: 'get',
    params: { productID }
  })
}