import request from '@/utils/request'

// 注册
export function register (userForm) {
  const formData = new FormData()
  formData.append('serviceId', '100001')
  formData.append('account', userForm.account)
  formData.append('passwd', userForm.passwd)
  formData.append('tel', userForm.tel)
  formData.append('pay_way', userForm.pay_way)
  return request({
    url: '/api',
    method: 'post',
    data: formData
  })
}

// 登录
export function login (userForm) {
  const formData = new FormData()
  if (userForm.role === 'user') {
    formData.append('serviceId', '100002')
  } else {
    formData.append('serviceId', '200002')
  }
  formData.append('serviceId', '100002')
  formData.append('tel', userForm.tel)
  formData.append('passwd', userForm.passwd)
  return request({
    url: '/api',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: formData
  })
}

// 100003 添加收货地址
export function addAddr (item) {
  var urlencoded = new URLSearchParams()
  urlencoded.append('serviceId', '100003')
  urlencoded.append('receiver', item.receiver)
  urlencoded.append('area', item.area)
  urlencoded.append('address', item.address)
  urlencoded.append('code', item.code)
  urlencoded.append('tel', item.tel)
  return request({
    url: '/api',
    method: 'post',
    data: urlencoded
  })
}

// 100004 删除收货地址
export function delAddr (addrID) {
  var urlencoded = new URLSearchParams()
  urlencoded.append('serviceId', '100004')
  urlencoded.append('addr_id', addrID)
  return request({
    url: '/api',
    method: 'post',
    data: urlencoded
  })
}

// 100005 修改支付方式与手机号码
export function changePayTel (form) {
  var urlencoded = new URLSearchParams()
  urlencoded.append('serviceId', '100005')
  urlencoded.append('tel', form.tel)
  urlencoded.append('pay_way', form.pay_way)
  return request({
    url: '/api',
    method: 'post',
    data: urlencoded
  })
}

// 100006 修改密码
export function changePasswd (form) {
  var urlencoded = new URLSearchParams()
  urlencoded.append('serviceId', '100006')
  urlencoded.append('old', form.oldPassword)
  urlencoded.append('new', form.newPassword)
  return request({
    url: '/api',
    method: 'post',
    data: urlencoded
  })
}

// 100007 获取用户信息
export function getInfo () {
  var urlencoded = new URLSearchParams()
  urlencoded.append('serviceId', '100007')
  return request({
    url: '/api',
    method: 'post',
    data: urlencoded
  })
}

// 1000008 登出
export function logout () {
  var urlencoded = new URLSearchParams()
  urlencoded.append('serviceId', '100008')
  return request({
    url: '/api',
    method: 'post',
    data: urlencoded
  })
}

/**
 * @param { serviceId } 100011 上传图片
 * @param { imgs[] } 文件数组
 * @param { type } 1. 头像 2. 订单照片
 * @param { orderid } 订单号
 */

/**
 * @param { serviceId } 100012 获取图片
 * @param { type } 1. 头像 2. 订单照片
 * @param { orderid } 订单号
 */

/**
 * @param { serviceId } 100013 删除图片
 * @param { pic } 图片id
 */

// TODO: 10000x 设为默认地址
export function setDefault (addrID) {
  return request({
    url: '/api',
    method: 'post',
    params: {
      serviceId: '100004',
      addr_id: addrID
    }
  })
}
