import request from '@/api/request'
import { getToken, setToken, removeToken } from '@/utils/cookies'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    userInfo:{
      name: '',
      avatar: '',
      department: '',
      job: '',
      telephone: '',
      userno:'',
      roles:[]
    }
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.userInfo.name = name

    },
    SET_AVATAR: (state, avatar) => {
      state.userInfo.avatar = avatar
    },
    SET_ORGNAME: (state, orgname) => {
      state.userInfo.department = orgname
    },
    SET_JOB: (state, job) => {
      state.userInfo.job = job
    },
    SET_TELEPHONE: (state, telephone) => {
      state.userInfo.telephone = telephone
    },
    SET_USERNO: (state, userno) => {
      state.userInfo.userno = userno
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_ROLES: (state, roles) => {
      state.userInfo.roles = roles
    },
  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        request.loginByUsername(userInfo).then(response => {
          console.log(response)
          const data = response.content
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    UpdateUserInfo({ commit }, userInfo) {
      console.log(userInfo)
      return new Promise((resolve, reject) => {
        request.updateUserInfo(userInfo).then(response => {
          console.log(response)
          const data = response.content
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    GetUserInfo({ commit, state }) {
      console.log(state.token)
      return new Promise((resolve, reject) => {
        request.getUserInfo(state.token).then(response => {
          console.log(response)
          const data = response

          // if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
          //   commit('SET_ROLES', data.roles)
          // } else {
          //   reject('getInfo: roles must be a non-null array !')
          // }

          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.headImage)
          commit('SET_ORGNAME', data.orgname)
          commit('SET_JOB', data.job)
          commit('SET_TELEPHONE', data.telephone)
          commit('SET_USERNO', data.userno)
          commit('SET_ROLES', ['admin'])
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    updateUserInfo:()=>{
      console.log(1)
    },
    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        request.logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    // 动态修改权限
    ChangeRoles({ commit }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        getUserInfo(role).then(response => {
          const data = response.data
          commit('SET_ROLES', data.roles)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          resolve()
        })
      })
    }
  }
}

export default user
