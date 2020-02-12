import Cookies from 'js-cookie'

export function getToken () {
  const token = Cookies.get('token')
  // cosole.log('Get Token:' + token)
  return token
}

export function setToken (token) {
  // cosole.log('Set Token:' + token)
  return Cookies.set('token', token)
}

export function removeToken () {
  const token = Cookies.remove('token')
  // cosole.log('Remove Token:' + token)
  return token
}
