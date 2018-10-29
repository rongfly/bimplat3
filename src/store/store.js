import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
Vue.use(Vuex)
//数据附着在state
const state = {
  headShow:true,
  token:'',
  linkList:[]
}

const store = new Vuex.Store({
  state,
  getters,
  modules: {
    user,
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
      }
    })
  })
}

export default store
