import Vue from 'vue'
// import '@/plugins/axios'
import App from './App.vue'
import router from './router/router'
import store from '@/store/store'
import '@/plugins/element.js'
import '@/assets/css/main.css'
import VuePreview from 'vue2-preview'

Vue.use(VuePreview)


import VueCesium from 'vue-cesium'

Vue.use(VueCesium, {
  // cesiumPath 是指引用的Cesium的文件夹路径， 如
  // cesiumPath: '/statics/Cesium'
  // 或者在线引用(http)
  // cesiumPath: 'http://support.supermap.com.cn:8090/webgl/Build'
  // 在线引用(https)
  cesiumPath: 'http://10.25.51.138:8080/Cesium-1.50/Build/Cesium'
})
// 全局注册筛选器
import * as filters from './filters' // global filters
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

import * as directive from '@/directive/formValidation'

Vue.use(directive)

import request from '@/api/request'

Vue.prototype.request = request

import hasPermission from '@/utils/hasPermission'

Vue.prototype.hasPerm = hasPermission
console.log(hasPermission)

import './permission' // permission.js control

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
