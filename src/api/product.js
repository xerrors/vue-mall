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
 * @serviceId 100015 操作码
 * @orderid 订单号
 * @phone_model 手机型号
 * @phone_info 手机基本信息（API:300002）
 * @old2new 以旧换新
 * @cycle_way 上门取件 回收方式
 * @user_addr_id 用户地址id（API:100007）
 * @price 系统评估手机价格
 * @desc 用户对于此手机的描述
 */
export function createOrder () {
  var urlencoded = new URLSearchParams()
  urlencoded.append('serviceId', '100014')
  urlencoded.append('serviceId', '100014')
  urlencoded.append('serviceId', '100014')
  urlencoded.append('serviceId', '100014')
  urlencoded.append('serviceId', '100014')
  urlencoded.append('serviceId', '100014')
  urlencoded.append('serviceId', '100014')
  return request({
    url: '/api',
    method: 'post',
    data: urlencoded
  })
}

/**
 * @param { serviceId } 100016 获取用户所有订单号
 */
export function getOrder () {
  var urlencoded = new URLSearchParams()
  urlencoded.append('serviceId', '100016')
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
 * @param { serviceId } 300002 根据手机信息状态码获取手机基本信息
 */
export function getProductInfo (code) {
  var urlencoded = new URLSearchParams()
  urlencoded.append('serviceId', '300002')
  urlencoded.append('code', code)
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
