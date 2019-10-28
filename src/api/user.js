import request from '@/utils/request'
// import { getToken } from '@/utils/auth'
// 登录
export function login (userForm) {
  return request({
    url: '/login',
    method: 'post',
    data: 'username=' + userForm.username + '&' + 'password=' + userForm.password,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}
// 获取用户信息
export function getInfo (token) {
  return request({
    url: '/getInfo',
    method: 'get',
    params: { token }
  })
}
// 登出
export function logout () {
  return request({
    url: '/logout',
    method: 'post'
  })
}
// 注册
export function register (userForm) {
  return request({
    url: '/register',
    method: 'post',
    data: userForm,
    transformRequest: [(data) => {
      let ret = ''
      let item = ''
      for (item in data) {
        ret += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&'
      }
      ret = ret.substring(0, ret.length - 1)
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 获取消息
export function getMsg (token, roles) {
  return request({
    url: '/getMsg',
    method: 'get',
    params: { token, roles }
  })
}
