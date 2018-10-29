import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from '@/store/store'
import './plugins/element.js'
import '@/assets/css/main.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
