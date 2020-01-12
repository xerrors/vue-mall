import Vue from 'vue'
import Vuex from 'vuex'

import { getToken, setToken, removeToken } from '@/utils/cookies'
import { register, logout } from '@/api/user'
// import { register, logout, login } from '@/api/user'

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: 'user',
    showLogin: false,
    tel: '',
    currentOrder: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_DATA: (state, data) => {
      state.data = data
    },
    SET_TEL: (state, tel) => {
      state.tel = tel
    },
    CREATE_ORDER: (state, order) => {
      state.currentOrder = order
    }
  },
  actions: {
    // 注册
    Register ({ commit }, userForm) {
      return new Promise((resolve, reject) => {
        register(userForm).then((res) => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登录
    Login ({ commit }, userForm) {
      // return new Promise((resolve, reject) => {
      //   login(userForm).then(res => {
      //     const info = res.info
      //     setToken(info.PHPSESSID)
      //     commit('SET_NAME', info.account)
      //     commit('SET_TOKEN', info.PHPSESSID)
      //     commit('SET_TEL', info.tel)
      //     commit('SET_AVATAR', 'http://src.xerrors.fun/blog/20191021/CcFV3DJYgi0B.jpg?imageslim')
      //     resolve()
      //   }).catch(error => {
      //     reject(error)
      //   })
      // })
      setToken('info.PHPSESSID')
      commit('SET_NAME', 'info.account')
      commit('SET_ROLES', 'user')
      commit('SET_TOKEN', 'user')
      commit('SET_TEL', '12312312313123')
      commit('SET_AVATAR', 'http://src.xerrors.fun/blog/20191021/CcFV3DJYgi0B.jpg?imageslim')
    },

    // 获取用户信息
    GetInfo ({ commit, state }) {
      // return new Promise((resolve, reject) => {z
      //   getInfo(state.token).then(res => {
      //     console.log(res)
      //     const data = res.data.data
      //     if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
      //       commit('SET_ROLES', data.roles)
      //     } else {
      //       console.log(data.roles)
      //       reject(new Error('getInfo: roles must be a non-null array !'))
      //     }
      //     commit('SET_NAME', data.name)
      //     commit('SET_AVATAR', data.avatar)
      //     resolve(res)
      //   }).catch(error => {
      //     reject(error)
      //   })
      // })
      commit('SET_ROLES', 'user')
      commit('SET_NAME', 'Avatar')
      commit('SET_AVATAR', 'http://src.xerrors.fun/blog/20191021/CcFV3DJYgi0B.jpg?imageslim')
    },

    // 登出
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', '')
        removeToken()
        resolve()
      })
    },

    // 创建订单
    CreateOrder ({ commit }, order) {
      commit('CREATE_ORDER', order)
    }
  },
  modules: {
  },
  getters
})
