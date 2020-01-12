import request from '@/utils/request'
// import { getToken } from '@/utils/cookies'
// 注册
export function register (userForm) {
  return request({
    url: '/Account.php',
    method: 'post',
    params: { way: 1, content: userForm }
  })
}

// 登录
export function login (userForm) {
  return request({
    url: '/Account.php',
    method: 'post',
    params: {
      way: 2,
      tel: userForm.tel,
      passwd: userForm.passwd
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

// 获取消息
export function getMsg (token, roles) {
  return request({
    url: '/getMsg',
    method: 'get',
    params: { token, roles }
  })
}
