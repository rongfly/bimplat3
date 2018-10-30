import axios from '../utils/http'
import api from './api'
import qs from 'qs'

export default {
  // user
  // 登录
  loginByUsername (data) {
    return axios({
      url: api.login,
      method: 'post',
      data: qs.stringify(data)
    })
  },
  // 获取个人信息
  getUserInfo (data) {
    return axios({
      url: api.get_userinfo,
      method: 'post',
      data: qs.stringify(data)
    })
  },
  updateUserInfo (data) {
    return axios({
      url: api.update_user_info,
      method: 'post',
      data: qs.stringify(data)
    })
  },
  // test
  sendMsg (data) {
    return axios({
      url: api.sendMsg,
      method: 'post',
      data: data
    })
  },
  findTest (data) {
    return axios({
      url: api.findTest,
      method: 'get',
      data: qs.stringify(data)
    })
  },
  editTest (data) {
    return axios({
      url: api.editTest,
      method: 'post',
      data: qs.stringify(data)
    })
  },
  addTest (data) {
    return axios({
      url: api.addTest,
      method: 'post',
      data: qs.stringify(data)
    })
  },
  // 协作相关
  // 所有协作列表
  list (data) {
    return axios({
      url: api.list,
      method: 'post',
      data: qs.stringify(data)
    })
  },
  // 获取协作详情
  getDetails (data) {
    return axios({
      url: api.get_details,
      method: 'post',
      data: qs.stringify(data)
    })
  },
  // 获取构件列表
  getsubList (data) {
    return axios({
      url: api.getsub_list,
      method: 'get',
      params: data
    })
  },
  // 获取组织机构
  getOrgList (data) {
    return axios({
      url: api.get_org_list,
      method: 'get',
      params: data
    })
  },
  // 获取所有人信息
  getphoneList (data) {
    return axios({
      url: api.getphone_list,
      method: 'post',
      data: qs.stringify(data)
    })
  },
  getOrgPhontList (data) {
    return axios({
      url: api.get_org_phont_list,
      method: 'get',
      params: data
    })
  },
  // 获取二维码图片
  getQrcode (data) {
    return axios({
      url: api.get_qrcode,
      method: 'post',
      data: qs.stringify(data)
    })
  },
  getDetailByid (data) {
    return axios({
      url: api.get_detail_byid,
      method: 'post',
      data: qs.stringify(data)
    })
  },
  // 获取走势图统计情况
  getChart (data) {
    return axios({
      url: api.get_chart,
      method: 'get',
      params: data
    })
  },
}
