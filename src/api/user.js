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

// 100005 修改支付方式与手机号码
export function changePayTel (form) {
  return request({
    url: '/api',
    method: 'post',
    params: {
      serviceId: '100005',
      tel: form.tel,
      pay_way: form.pay_way
    }
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

// 登出
export function logout () {
  return request({
    url: '/api',
    method: 'post',
    params: {
      serviceId: '100008'
    }
  })
}
