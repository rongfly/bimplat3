const getters = {
  userInfo:state => state.user.userInfo,
  roles: state => state.user.roles,
  isShowMethod: state => state.tools.isShow
}
export default getters
