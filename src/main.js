import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/plugins'
import '@/style/index.scss'

import myUtils from '@/utils'

// 全局挂载工具类
Vue.prototype.myUtils = myUtils

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
