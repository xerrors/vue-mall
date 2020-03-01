import Vue from 'vue'
import Vuex from 'vuex'

import { getToken, setToken, removeToken } from '@/utils/cookies'
import { logout, login, getInfo } from '@/api/user'

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken(), // 因为并没有使用token验证，所以直接用来保存role，仅作用于前端部分
    avatar: 'http://src.xerrors.fun/blog/20200301/6x6wwvaHbnGY.png',
    role: '', // 临时
    showLogin: false
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLE: (state, role) => {
      state.role = role
    }
  },
  actions: {
    // 登录
    Login ({ commit }, userForm) {
      return new Promise((resolve, reject) => {
        login(userForm).then(res => {
          commit('SET_TOKEN', userForm.role)
          commit('SET_ROLE', userForm.role)
          setToken(userForm.role)
          localStorage.addresses = JSON.stringify(res.info.addr)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo ({ commit }) {
      commit('SET_ROLE', getToken()) // 使用Cookie保存的身份信息
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          localStorage.clear()
          localStorage.addresses = JSON.stringify(res.info.addr)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut ({ commit }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLE', '')
          localStorage.clear()
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut ({ commit }) {
      commit('SET_TOKEN', '')
      commit('SET_ROLE', '')
      localStorage.clear()
      removeToken()
    }
  },
  modules: {
  },
  getters
})
