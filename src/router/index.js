import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home')
  },

  {
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

  { path: '/about', component: () => import('@/views/About.vue') },

  { path: '/test', name: 'test', component: () => import('@/views/Test') },

  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

// https://www.jianshu.com/p/986776a20352
router.beforeEach((to, from, next) => {
  if (store.getters.token) { // 判断是否有token
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetInfo').then(res => { // 拉取info
          const roles = res.data.role;
          store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            next(to); // hack方法 确保addRoutes已完成
          })
        }).catch(err => {
          console.log(err);
        });
      } else {
        next() //当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next();
    } else {
      next('/login'); // 否则全部重定向到登录页
    }
  }
});

export default router
