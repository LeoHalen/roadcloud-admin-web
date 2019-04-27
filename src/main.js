// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'
//
// Vue.config.productionTip = false

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})*/

import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/store'
import './plugins/element.js'
import './directive/premissionBtn'
import './assets/css/normalize.css'
import './assets/css/public.css'
import '@/element-variables.scss'
import {
  messages
} from './assets/js/common'
import './assets/scss/global.scss'
// 引入字体文件
import '@/assets/icon/iconfont.css'
Vue.config.productionTip = false
//全局挂载提示框
Vue.prototype.$message = messages
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
