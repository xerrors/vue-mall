import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'

Vue.use(VueRouter)

var whiteList = ['/', '/about', '/404', '/403', '/register', '/settlein', '/forgotpwd']

const routes = [{
  path: '/403',
  component: () => import('@/views/errors/403'),
  meta: {
    hiddenNavbar: true,
    hiddenFooter: true
  }
}, {
  path: '/404',
  component: () => import('@/views/errors/404'),
  meta: {
    hiddenNavbar: true,
    hiddenFooter: true
  }
}, {
  path: '/',
  name: 'home',
  component: () => import('@/views/Home'),
  meta: {
    isSpecialPage: true,
    hiddenNavbar: true,
    hiddenFooter: true
  }
},

{ path: '/about', component: () => import('@/views/About.vue') },
{ path: '/forgotpwd', component: () => import('@/views/account/ForgotPwd.vue') },

{ path: '/user/main', component: () => import('@/views/user/Publish.vue') },
{ path: '/user/center', component: () => import('@/views/user/Profile.vue') },
{ path: '/messages', component: () => import('@/views/Messages.vue') },
{ path: '/register', component: () => import('@/views/account/Register.vue') },
{ path: '/settlein', component: () => import('@/views/account/SettleIn.vue') },
// { path: '/product/:id', component: () => import('@/views/Product.vue') },
{ path: '/result', component: () => import('@/views/user/Result.vue') },
{ path: '/order/:id', component: () => import('@/views/Order.vue') },
{ path: '/merchant/:id', component: () => import('@/views/Merchant.vue') },

{ path: '/usertest', name: 'usertest', component: () => import('@/views/Test') },
{ path: '/bosstest', name: 'bosstest', component: () => import('@/views/Test') },

{ path: '*', redirect: '/404' }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

// https://www.jianshu.com/p/986776a20352
router.beforeEach((to, from, next) => {
  if (store.state.token) { // 判断是否有token(即是否登录)
    if (!store.state.roles) { // 判断当前用户是否已拉取完user_info信息
      store.dispatch('GetInfo')
    }
    // 判断当前用户的身份是否有权限访问这个页面，否则就跳转到 403
    if (to.meta.roles) {
      if (to.meta.roles.indexOf(store.state.roles) > -1) {
        next()
        // // cosole.log(to.meta.roles)
        // // cosole.log(store.state.roles)
        // // cosole.log(to.meta.roles.indexOf(store.state.roles))
      } else {
        next('/404')
      }
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/') // 否则全部重定向到主页并提示登录
      store.state.showLogin = true
    }
  }
})

export default router
