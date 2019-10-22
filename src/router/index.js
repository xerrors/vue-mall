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
    path: '/boss/profile',
    name: 'Bprofile',
    component: () => import('@/views/boss/profile')
  },
  {
    path: '/user/profile',
    name: 'Uprofile',
    component: () => import('@/views/user/profile')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/test', name: 'test', component: () => import('@/views/Test')
  },
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

export default router
