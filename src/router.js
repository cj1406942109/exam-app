import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/web/Home'
import Login from '@/views/web/Login'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: Login
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
    component: () => import('@/views/web/Student')
  },
  {
    path: '/home/:id/upload',
    name: 'upload',
    component: () => import('@/views/web/Upload')
  },
  {
    path: '/home/:id/upload/:examId',
    name: 'upload-scan',
    component: () => import('@/views/web/UploadScan')
  },
  {
    path: '/home/:id/state/:examId',
    name: 'state',
    component: () => import('@/views/web/State')
  },
  {
    path: '/exam',
    name: 'exam',
    meta: { title: '考试', showTab: true },
    component: () => import('@/views/web/Exam')
  },
  {
    path: '/exam/:id',
    name: 'exam-detail',
    component: () => import('@/views/web/ExamDetail')
  },
  {
    path: '/exam/:id/report/:studentId',
    name: 'report',
    component: () => import('@/views/web/Report')
  },
  {
    path: '/mobile',
    name: 'mobile-home',
    component: () => import('@/views/mobile/Home')
  },
  {
    path: '/mobile/select',
    name: 'select-page',
    component: () => import('@/views/mobile/Select')
  },
  {
    path: '/mobile/requirement',
    name: 'photograph-requirement',
    component: () => import('@/views/mobile/Requirement')
  },
  {
    path: '/mobile/preview',
    name: 'preview',
    component: () => import('@/views/mobile/Preview')
  },
  {
    path: '/mobile/photograph',
    name: 'photograph',
    component: () => import('@/views/mobile/Photograph')
  },
  {
    path: '/mobile/finish',
    name: 'finish-page',
    component: () => import('@/views/mobile/Finish')
  }
]

export {
  routes
}

export default new Router({
  routes
})
