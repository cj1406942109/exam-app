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

export default {
  goBack,
  pageJump
}
