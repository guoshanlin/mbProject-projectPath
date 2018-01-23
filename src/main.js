// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import store from './store'
import './js/common'
import util from './js/util'

FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(util) // 公用js
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
