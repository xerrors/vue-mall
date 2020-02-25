import request from '@/utils/request'

// 注册
export function register (userForm) {
  return request({
    url: '/api',
    method: 'post',
    params: {
      serviceId: '100001',
      account: userForm.account,
      passwd: userForm.passwd,
      tel: userForm.tel,
      pay_way: userForm.pay_way
    }
  })
}

// 登录
export function login (userForm) {
  return request({
    url: '/api',
    method: 'post',
    params: {
      serviceId: '100002',
      tel: userForm.tel,
      passwd: userForm.passwd
    }
  })
}

// 获取用户信息
export function getInfo () {
  return request({
    url: '/api',
    method: 'get',
    params: {
      serviceId: '100007'
    }
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

// 100003 添加收货地址
export function addAddr (item) {
  return request({
    url: '/api',
    method: 'post',
    params: {
      serviceId: '100003',
      receiver: item.receiver,
      area: item.area,
      address: item.address,
      code: item.code,
      tel: item.tel
    }
  })
}

// 100004 删除收货地址
export function delAddr (addrID) {
  return request({
    url: '/api',
    method: 'post',
    params: {
      serviceId: '100004',
      addr_id: addrID
    }
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
