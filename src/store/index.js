import Vue from 'vue'
import Vuex from 'vuex'

import { getToken, setToken, removeToken } from '@/utils/cookies'
import { register, logout, getInfo } from '@/api/user'
// import { Message } from 'element-ui'
// import { register, logout, login, getInfo } from '@/api/user'

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken(),
    name: '',
    id: '',
    avatar: 'http://src.xerrors.fun/blog/20191021/CcFV3DJYgi0B.jpg?imageslim',
    role: '',
    showLogin: false,
    tel: '',
    currentOrder: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_BASE_INFO: (state, data) => {
      state.name = data.account
      state.id = data.accountid
      state.tel = data.tel
      state.pay_way = data.pay_way
      // state.role = data.role
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLE: (state, role) => {
      state.role = role
    },
    SET_DATA: (state, data) => {
      state.data = data
    },
    SET_TEL: (state, tel) => {
      state.tel = tel
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
      //     setToken(res.info.PHPSESSID)
      //     commit('SET_BASE_INFO', res.info)
      //     commit('SET_TOKEN', res.info.PHPSESSID)
      //     resolve()
      //   }).catch(error => {
      //     reject(error)
      //   })
      // })
      // cosole.log(userForm)

      // 因为测试的时候没有办法实时向服务器获取新的数据，要想做到刷新数据保存

      const res = { code: 1, info: { account: 'nick', accountid: '10000', addr: [{ receiver: '小兰', area: '500102', address: '阿里巴巴', code: '030200', tel: '15516161414', default: true, addr_id: '24' }, { receiver: '小白', area: '500102', address: '北京三里屯', code: '030201', tel: '15516161414', default: false, addr_id: '25' }], tel: '13712345612', pay_way: 'alipay', PHPSESSID: 'fvdpqnmm2ngllhvnvgl8ppibr7' } }
      // 地址这种东西还是保存在LocalStorage里面吧
      localStorage.addresses = JSON.stringify(res.info.addr)
      // setToken(res.info.PHPSESSID)
      setToken(userForm.role)
      commit('SET_BASE_INFO', res.info)
      // commit('SET_TOKEN', res.info.PHPSESSID)
      commit('SET_TOKEN', userForm.role)
      commit('SET_ROLE', userForm.role)
    },

    // 获取用户信息
    GetInfo ({ commit }) {
      // ================
      // 前端测试区域
      commit('SET_ROLE', getToken())
      // ================

      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          commit('SET_BASE_INFO', res.info)
          localStorage.addresses = JSON.stringify(res.info.addr)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
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
        removeToken()
        resolve()
      })
    }
  },
  modules: {
  },
  getters
})
