import request from '@/utils/request'

/**
 * @param { serviceId } // 100014 生成订单号
 */
export function generateOrder () {
  var urlencoded = new URLSearchParams()
  urlencoded.append('serviceId', '100014')
  return request({
    url: '/api',
    method: 'post',
    data: urlencoded
  })
}

/**
 * @param { serviceId } 300001 获取手机各品牌信息
 */
export function getSelections () {
  var urlencoded = new URLSearchParams()
  urlencoded.append('serviceId', '300001')
  return request({
    url: '/api',
    method: 'post',
    data: urlencoded
  })
}

/**
 * @param { serviceId } 300003 获取手机各品牌信息
 */
export function getBrands () {
  var urlencoded = new URLSearchParams()
  urlencoded.append('serviceId', '300003')
  return request({
    url: '/api',
    method: 'post',
    data: urlencoded
  })
}
