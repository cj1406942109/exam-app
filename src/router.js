import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/home',
    name: 'home',
    meta: { title: '首页', showTab: true },
    component: Home
  },
  {
    path: '/home/:id',
    name: 'student',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Student')
  },
  {
    path: '/home/:id/upload',
    name: 'upload',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Upload')
  },
  {
    path: '/home/:id/upload/scan',
    name: 'upload-scan',
    component: () => import(/* webpackChunkName: "about" */ '@/views/UploadScan')
  },
  {
    path: '/home/:id/state',
    name: 'state',
    component: () => import(/* webpackChunkName: "about" */ '@/views/State')
  },
  {
    path: '/exam',
    name: 'exam',
    meta: { title: '考试', showTab: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Exam')
  }
]

export {
  routes
}

export default new Router({
  routes
})
