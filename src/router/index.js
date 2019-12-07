import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'

Vue.use(VueRouter)

var whiteList = ['/', '/about', '/404', '/403']

const routes = [
  {
    path: '/403',
    component: () => import('@/views/403'),
    meta: {
      hiddenNavbar: true,
      hiddenFooter: true
    }
  }, {
    path: '/404',
    component: () => import('@/views/404'),
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
  }, {
    path: '/boss/main',
    component: () => import('@/views/boss/product_flow'),
    meta: {
      roles: ['boss']
    }
  }, {
    path: '/user/main',
    component: () => import('@/views/user/publish'),
    meta: {
      roles: ['user']
    }
  }, {
    path: '/boss/center',
    component: () => import('@/views/boss/profile'),
    meta: {
      roles: ['boss']
    }
  }, {
    path: '/user/center',
    component: () => import('@/views/user/profile'),
    meta: {
      roles: ['user']
    }
  },

  {
    path: '/about',
    component: () => import('@/views/About.vue')
  },

  {
    path: '/messages',
    component: () => import('@/views/Messages.vue')
  },

  {
    path: '/product/:id',
    component: () => import('@/views/Product.vue')
  },

  {
    path: '/price',
    component: () => import('@/views/user/Price.vue'),
    meta: {
      roles: ['user']
    }
  },

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
        // console.log(to.meta.roles)
        // console.log(store.state.roles)
        // console.log(to.meta.roles.indexOf(store.state.roles))
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
