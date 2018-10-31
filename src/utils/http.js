import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '@/store/store'
import { getToken } from '@/utils/cookies'

// create an axios instance
console.log(process.env)
const http = axios.create({
  baseURL: 'http://123.56.7.142', // api的base_url
  timeout: 10000 // request timeout
})

// request interceptor
http.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (getToken()) {
      console.log(getToken())
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['Authorization'] = getToken()
      console.log(getToken())
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone interceptor
http.interceptors.response.use(
  // response => response,
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过xmlhttprequest来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    const res = response.data
    console.log(res)
    if (res.code !== 100 && res.code !== undefined) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   // 请自行在引入 MessageBox
      //   // import { Message, MessageBox } from 'element-ui'
      //   MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
      //     confirmButtonText: '重新登录',
      //     cancelButtonText: '取消',
      //     type: 'warning'
      //   }).then(() => {
      //     console.log(1)
      //     store.dispatch('FedLogOut').then(() => {
      //       location.reload() // 为了重新实例化vue-router对象 避免bug
      //     })
      //   })
      // }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log(error.response)
    if (error.response.status === 401) {
      // 请自行在引入 MessageBox
      // import { Message, MessageBox } from 'element-ui'

      MessageBox.confirm(error.response.data.content, error.response.data.message, {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(1)
        store.dispatch('FedLogOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      })
    } else if (error.response.status === 404) {
      if (error.response.data.code === -1001) {
        Message({
          message: error.response.data.message,
          type: 'error',
          duration: 5 * 1000
        })
      } else {
        Message({
          message: '错误的网络请求',
          type: 'error',
          duration: 5 * 1000
        })
      }
    } else if (error.response.status === 500) {
      Message({
        message: '错误的网络请求',
        type: 'error',
        duration: 5 * 1000
      })
    }
    else {
      console.log('err' + error) // for debug
      Message({
        message: error.response.data.content,
        type: 'error',
        duration: 5 * 1000
      })
    }
    return Promise.resolve(error.response)
  }
)

export default http
