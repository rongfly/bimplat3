import request from '@/api/request'
import { getToken, setToken, removeToken } from '@/utils/cookies'

const tagview = {
  state: {
    linkList:[]
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
  },

  actions: {
      
  }
}

export default tagview