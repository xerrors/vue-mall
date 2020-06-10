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

export function getPics (type) {
  var urlencoded = new URLSearchParams()
  urlencoded.append('serviceId', '200007')
  urlencoded.append('type', type)
  return request({
    url: '/api',
    method: 'post',
    data: urlencoded
  })
}

export function delPics (pid) {
  var urlencoded = new URLSearchParams()
  urlencoded.append('serviceId', '200008')
  urlencoded.append('pid', pid)
  return request({
    url: '/api',
    method: 'post',
    data: urlencoded
  })
}
