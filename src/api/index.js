import qs from 'qs'

import request from './common/request'


/**
 * 根据用户名和密码进行登录
 * @param {string} username 用户名
 * @param {string} password 密码
 */
export function login (username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: qs.stringify({
      username, password
    })
  })
}

/**
 * 退出登录
 */
export function logout () {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

/**
 * 根据创建日期获取考试学生列表
 * @param {string} date 创建日期：'2019-01-01'，为''时返回所有学生
 */
export function getExerciseStudentList (date = null, status = null) {
  const params = {
    date,
    status
  }
  // 如果查询条件为空，则不添加改查询参数
  for (const key in params) {
    if (!params[key]) {
      delete params[key]
    }
  }
  return request({
    url: '/user/agency/exercise_student/list',
    method: 'get',
    params
  })
}

/**
 * 获取学校的所有学生列表
 */
export function getStudentList () {
  return request({
    url: '/user/agency/student/list',
    method: 'get',
    params
  })
}

/**
 * 添加学生信息
 * @param {string} name 姓名
 * @param {string} phone 电话
 */
export function addStudent(name, phone) {
  return request({
    url: '/user/agency/student/create',
    method: 'post',
    data: qs.stringify({
      name, phone
    })
  })
}

/**
 * 获取考试列表
 * @param {string} student_uid 学生id
 * @param {string} name 检索关键词，考试名称
 */
export function getExerciseList(student_uid = '', name = '',) {
  const params = {
    student_uid,
    name
  }
  // 如果查询条件为空，则不添加改查询参数
  for (const key in params) {
    if (!params[key]) {
      delete params[key]
    }
  }
  return request({
    url: '/pool/agency/exercise/list',
    method: 'get',
    params
  })
}
