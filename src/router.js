import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: { hideTab: true }
  },
  {
    path: '/home',
    name: 'home',
    meta: { title: '首页' },
    component: Home
  },
  {
    path: '/home/:id',
    name: 'student',
    meta: { hideTab: true },
    component: () => import(/* webpackChunkName: "about" */ '@/views/Student')
  },
  {
    path: '/exam',
    name: 'exam',
    meta: { title: '考试' },
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
