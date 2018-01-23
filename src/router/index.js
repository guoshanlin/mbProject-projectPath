import Vue from 'vue'
import Router from 'vue-router'
 // import config from '../../config'

Vue.use(Router)

export default new Router({
  // base: process.env.NODE_ENV === 'production'
  //   ? config.build.assetsPublicPath
  //   : config.dev.assetsPublicPath,
  // mode: 'history',
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: (resolve) => require(['../view/HelloWorld'], resolve)
    },
    {
      path: '/',
      redirect: '/HelloWorld'
    },
    {
      path: '/HelloFromVux',
      name: 'HelloFromVux',
      component: (resolve) => require(['../view/HelloFromVux'], resolve)
    },
    {
      path: '/newTestVux',
      name: 'newTestVux',
      component: (resolve) => require(['../view/newTestVux'], resolve)
    },
    {
      path: '/selectTestVux',
      name: 'selectTestVux',
      component: (resolve) => require(['../view/selectTestVux'], resolve)
    }
  ]
})
