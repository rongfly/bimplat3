import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import tools from './modules/tools'
Vue.use(Vuex)
//数据附着在state
const state = {
  headShow:true,
  linkList:[],
}

const store = new Vuex.Store({
  state,
  getters,
  modules: {
    user,
    tools,
  },
})
console.log(module.hot)
if (module.hot) {
  module.hot.accept([
    './getters',
    './modules/user'
  ], () => {
    store.hotUpdate({
      getters: require('./getters').default,
      modules: {
        user: require('./modules/user').default,
        tools: require('./modules/tools').default,
      }
    })
  })
}

export default store
