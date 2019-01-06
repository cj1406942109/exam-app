import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/plugins'

import SvgIcon from '@/components/SvgIcon'

Vue.component('svg-icon', SvgIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
