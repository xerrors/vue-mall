import Cookies from 'js-cookie'

export function getToken () {
  const token = Cookies.get('token')
  console.log('Get Token:' + token)
  return token
}

export function setToken (token) {
  console.log('Set Token:' + token)
  return Cookies.set('token', token)
}

export function removeToken () {
  const token = Cookies.remove('token')
  console.log('Remove Token:' + token)
  return token
}
