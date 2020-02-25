import request from '@/utils/request'

// 注册
export function settlein (form) {
  return request({
    url: '/api',
    method: 'post',
    params: form
  })
}
