import router from '@/router'

/**
 * 返回上一级路由
 */
function goBack() {
  router.go(-1)
}

/**
 * 编程控制页面跳转
 * @param {*} name 目的路由名称
 * @param {*} params 携带参数
 */
function pageJump(name, params) {
  router.push({
    name,
    params
  })
}

function setItem(name, value) {
  sessionStorage.setItem(name, value)
}
function getItem(name) {
  return sessionStorage.getItem(name)
}
function removeItem(name) {
  sessionStorage.removeItem(name)
}

export default {
  goBack,
  pageJump,
  setItem,
  getItem,
  removeItem
}
