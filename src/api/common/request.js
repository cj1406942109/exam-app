import axios from 'axios'
import { Notification } from 'element-ui'
// import config from '@/config'

const service = axios.create({
  // baseURL: `${config.host}/api`,
  baseURL: '/api',
  timeout: 3000
})

service.interceptors.request.use(config => {
  return config
}, error => {
  // Do something with request error
  Notification({
    title: '网络错误',
    type: 'error',
    message: '请求超时，请稍后再试'
  })
})

service.interceptors.response.use(
  response => {
    console.log(response)
    if (response.status === 200) {
      if (response.data.code === 0) {
        return response.data.data ? response.data.data : 'success'
      } else {
        // 出现异常
        return null
      }
    } else {
      Notification({
        title: '请求出错',
        type: 'error',
        message: response.data.message
      })
    }
  },
  error => {
    let errorMessage = ''
    if (error.response.status === 404) {
      errorMessage = '请求的资源不存在'
    } else if (`${error.response.status}`[0] === '5') {
      errorMessage = '服务器遇到未知错误'
    } else {
      errorMessage = '其他错误'
    }
    Notification({
      title: '请求出错',
      type: 'error',
      message: errorMessage
    })
  }
)

export default service
