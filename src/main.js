// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './plugins/axios'
import Loading from './components/common/loading'

Vue.prototype.API = axios // vue添加API接口属性
Vue.config.productionTip = false
// 全局注册公共组件
Vue.component('loading-vue', Loading)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
