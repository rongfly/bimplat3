const getters = {
  userInfo:state => state.user.userInfo,
  roles: state => state.user.roles,
  isShowMethod: state => state.tools.isShow,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  permissions: state => state.user.permissions,
  menus: state => state.user.menus,
}
export default getters
