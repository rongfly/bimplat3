const getters = {
  token: state => state.user.token,

  //用户信息
  avatar: state => state.user.userInfo.avatar,
  name: state => state.user.userInfo.name,
  department: state => state.user.userInfo.department,
  job: state => state.user.userInfo.job,
  telephone: state => state.user.userInfo.telephone,
  userno: state => state.user.userInfo.userno,
  roles: state => state.user.userInfo.roles,
  isShowMethod: state => state.tools.isShow
}
export default getters
