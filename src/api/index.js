import qs from 'qs'

import request from './common/request'

// ************************* 用户开始 *******************************

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

// ************************* 用户结束 *******************************