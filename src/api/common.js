import request from '@/utils/request'

export function uploadPics (data) {
  return request({
    url: '/api',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export function getPics () {
  return request({
    url: '/api',
    method: 'post',
    params: {
      serviceId: '200007'
    }
  })
}

export function delPics () {
  return request({
    url: '/api',
    method: 'post',
    params: {
      serviceId: '200008'
    }
  })
}
