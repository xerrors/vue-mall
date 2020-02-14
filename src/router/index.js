import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'
import { Message } from 'element-ui'

Vue.use(VueRouter)

// 不用登陆也能够访问的页面
var whiteList = ['/', '/about', '/404', '/403', '/register', '/settlein', '/forgotpwd', '/main']

const routes = [
  {
    path: '/403',
    component: () => import('@/views/errors/403'),
    meta: {
      isSpecialPage: true
    }
  }, {
    path: '/404',
    component: () => import('@/views/errors/404'),
    meta: {
      isSpecialPage: true
    }
  }, {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home'),
    meta: {
      isSpecialPage: true
    }
  },

  { path: '/main', component: () => import('@/views/Publish.vue') },
  { path: '/about', component: () => import('@/views/About.vue') },
  { path: '/forgotpwd', component: () => import('@/views/account/ForgotPwd.vue') },
  { path: '/register', component: () => import('@/views/account/Register.vue') },
  { path: '/settlein', component: () => import('@/views/account/SettleIn.vue') },

  // 用户页面
  {
    path: '/user/center',
    component: () => import('@/views/user/Profile.vue'),
    meta: {
      roles: ['user']
    }
  }, {
    path: '/pre-order',
    component: () => import('@/views/user/PreOrder.vue'),
    meta: {
      roles: ['user']
    }
  }, {
    path: '/result',
    component: () => import('@/views/user/Result.vue'),
    meta: {
      roles: ['user']
    }
  }, {
    path: '/merchants/:id',
    component: () => import('@/views/user/Merchant.vue'),
    meta: {
      roles: ['user']
    }
  }, {
    path: '/order/:id',
    component: () => import('@/views/user/Order.vue'),
    meta: {
      roles: ['user']
    }
  },

  // 仅商户可见
  {
    path: '/merchant/main',
    component: () => import('@/views/merchant/Main.vue'),
    meta: {
      roles: ['merchant']
    }
  }, {
    path: '/merchant/orders',
    component: () => import('@/views/merchant/Orders.vue'),
    meta: {
      roles: ['merchant']
    }
  }, {
    path: '/merchant/center',
    component: () => import('@/views/merchant/Profile.vue'),
    meta: {
      roles: ['merchant']
    }
  },

  // 双方皆可见
  { path: '/messages', component: () => import('@/views/common/Messages.vue') },
  { path: '/product/:id', component: () => import('@/views/common/Product.vue') },

  { path: '*', redirect: '/404' }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

// https://www.jianshu.com/p/986776a20352
router.beforeEach((to, from, next) => {
  if (store.state.token) { // 判断是否有token(即是否登录)
    if (!store.state.role) { // 判断当前用户是否已拉取完user_info信息
      store.dispatch('GetInfo')
    }
    // 判断当前用户的身份是否有权限访问这个页面，否则就跳转到 403
    if (to.meta.roles) {
      if (to.meta.roles.includes(store.state.role)) {
        next()
      } else {
        Message('router.js: ' + to.path)
        next('/404')
      }
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) { // 在免登录白名单，直接进入
      next()
    } else {
      // next('/') // 否则全部重定向到主页并提示登录
      Message('请登录账户')
      store.state.showLogin = true
    }
  }
})

export default router
