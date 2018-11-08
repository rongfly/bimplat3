import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const officeadmin = [
  {
    path: '',
    name: 'menu_list1',
    component: () => import('../views/home/constructionctrl/officeadmin/OA_workspace.vue'),
    meta: {
      title: '公文管理',
    }
  },
  {
    path: 'menu_list2',
    name: 'menu_list2',
    component: () => import('../views/home/constructionctrl/officeadmin/OA_menu_list2.vue'),
    meta: {
      title: '发文管理',
    }
  },
  {
    path: 'menu_list3',
    name: 'menu_list3',
    component: () => import('../views/home/constructionctrl/officeadmin/OA_menu_list3.vue'),
    meta: {
      title: '收文管理',
    }
  },
  {
    path: 'menu_list4',
    name: 'menu_list4',
    component: () => import('../views/home/constructionctrl/officeadmin/OA_menu_list4.vue'),
    meta: {
      title: '请假销假',
    }
  },
  {
    path: 'menu_list5',
    name: 'menu_list5',
    component: () => import('../views/home/constructionctrl/officeadmin/OA_menu_list5.vue'),
    meta: {
      title: '财务报销',
    }
  },
]
const constructionList = [
  {
    path: '',
    name: 'overview',
    component: () => import('../views/home/constructionctrl/OverView.vue'),
    meta: {
      title: '项目总览',
    }
  },
  {
    path: 'officeadmin',
    component: () => import('../views/home/constructionctrl/officeadmin/OfficeAdmin.vue'),
    children: [
      ...officeadmin

    ]
  },
  {
    path: 'landdemo1',
    name: 'landdemo1',
    component: () => import('../views/home/constructionctrl/landdemo/LandDemo1.vue'),
  },
  {
    path: 'landdemo2',
    name: 'landdemo2',
    component: () => import('../views/home/constructionctrl/landdemo/LandDemo1.vue'),
    meta: {
      title: '电力电缆',
    }
  },
  {
    path: 'landdemo3',
    name: 'landdemo3',
    component: () => import('../views/home/constructionctrl/landdemo/LandDemo1.vue'),
    meta: {
      title: '移动通信',
    }
  },
  {
    path: 'technology',
    name: 'technology',
    component: () => import('../views/home/constructionctrl/TechNology.vue'),
    meta: {
      title: '技术管理',
    }

  },
  {
    path: 'ratemanage',
    name: 'ratemanage',
    component: () => import('../views/home/constructionctrl/RateManage.vue'),
    meta: {
      title: '进度管理',
    }
  },
  {
    path: 'qualitymanage',
    name: 'qualitymanage',
    component: () => import('../views/home/constructionctrl/QualityManage.vue'),
    meta: {
      title: '质量管理',
    }
  },
  {
    path: 'safemanage',
    name: 'safemanage',
    component: () => import('../views/home/constructionctrl/safemanage/SafeManage.vue'),
    meta: {
      title: '问题整改',
    }
  },
  {
    path: 'safechart',
    name: 'safechart',
    component: () => import('../views/home/constructionctrl/safemanage/SafeChart.vue'),
    meta: {
      title: '安全形势走势图',
    }
  },
  {
    path: 'materialmanage',
    name: 'materialmanage',
    component: () => import('../views/home/constructionctrl/MaterialManage.vue'),
    meta: {
      title: 'mm',
    }
  },
  {
    path: 'systemset',
    name: 'systemset',
    component: () => import('../views/home/constructionctrl/systemset/SystemSet.vue'),
    meta: {
      title: '后台',
    }
  },
  {
    path: 'systemdata',
    name: 'systemdata',
    component: () => import('../views/home/constructionctrl/systemset/SystemData.vue'),
    meta: {
      title: '基础数据',
    }
  },
  {
    path: 'adminsystem',
    name: 'adminsystem',
    component: () => import('../views/home/constructionctrl/adminsystem/AdminSystem.vue'),
    meta: {
      title: '人员管理',
    }
  }
]

const designList = [
  {
    path: '',
    name: 'collaborationsystem',
    component: () => import('../views/home/design/CollaborationSystem.vue'),
  },
  {
    path: 'designmodel',
    name: 'designmodel',
    component: () => import('../views/home/design/DesignModel.vue'),
  },
  {
    path: 'aidimensional',
    name: 'aidimensional',
    component: () => import('../views/home/design/AiDimensional.vue'),
  },
  {
    path: 'safetyevaluation',
    name: 'safetyevaluation',
    component: () => import('../views/home/design/SafetyEvaluation.vue'),
  },
  {
    path: 'codingsystem',
    name: 'codingsystem',
    component: () => import('../views/home/design/CodingSystem.vue'),
  },
  {
    path: 'achimanagement',
    component: () => import('../views/home/design/AchiManagement.vue'),
    children: [{
      path: '',
      name: 'drawing',
      component: () => import('../views/home/design/datactrl/Drawing.vue'),
    },
      {
        path: 'manual',
        name: 'manual',
        component: () => import('../views/home/design/datactrl/Manual.vue'),
      }
    ]
  }
]

const mainList = [
  {
    path: '',
    name: 'main',
    component: () => import('../views/home/Main.vue'),
  },
  {
    path: 'design',
    component: () => import('../views/home/Design.vue'),
    children: [
      ...designList
    ]
  },
  {
    path: 'construction',
    component: () => import('../views/home/Construction.vue'),
    children: [
      ...constructionList
    ]
  },
  {
    path: 'userinfo',
    name: 'userinfo',
    component: () => import('../views/admin/UserInfo.vue'),
  },
  {
    path: 'roles',
    name: 'roles',
    component: () => import('../views/admin/Roles.vue'),
  },

]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('../views/Index.vue'),
      children: [
        ...mainList
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/regist',
      name: 'regist',
      component: () => import('../views/Regist.vue'),
      meta: {
        title: '注册'
      }
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../test/test.vue'),
      meta: {
        title: 'test'
      }
    },
    {
      path: '/test2',
      name: 'test2',
      component: () => import('../test/test2.vue'),
      meta: {
        title: 'test'
      }
    },
  ]
})
export default router