import Vue from 'vue'
import Vuex from 'vuex'

import { getToken, setToken, removeToken } from '@/utils/cookies'
import { register, logout } from '@/api/user'
// import { login, register, getInfo, logout } from '@/api/user'

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: '',
    showLogin: false
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
    // },
    // SET_DATA: (state, data) => {
    //   state.data = data
    }
  },
  actions: {
    // 注册
    Register ({ commit }, userForm) {
      return new Promise((resolve, reject) => {
        register(userForm).then(() => {
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
      //     const data = res.data
      //     setToken(data.token)
      //     commit('SET_TOKEN', data.token)
      //     resolve()
      //   }).catch(error => {
      //     reject(error)
      //   })
      // })
      setToken(userForm.role)
      commit('SET_TOKEN', userForm.role)
    },

    // 获取用户信息
    GetInfo ({ commit, state }) {
      // return new Promise((resolve, reject) => {
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
      if (state.token === 'user') {
        commit('SET_ROLES', 'user')
        commit('SET_NAME', 'Avatar')
        commit('SET_AVATAR', 'http://src.xerrors.fun/blog/20191021/CcFV3DJYgi0B.jpg?imageslim')
      } else {
        commit('SET_ROLES', 'boss')
        commit('SET_NAME', 'Iron')
        commit('SET_AVATAR', 'http://src.xerrors.fun/blog/20191021/wFNCwcPTBkwa.jpg?imageslim')
      }
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
    }
  },
  modules: {
  },
  getters
})
