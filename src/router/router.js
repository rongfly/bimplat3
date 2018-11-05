import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const officeadmin = [
  {
    path: '',
    name: 'menu_list1',
    component: () => import('../views/home/constructionctrl/officeadmin/OA_workspace.vue'),
  },
  {
    path: 'menu_list2',
    name: 'menu_list2',
    component: () => import('../views/home/constructionctrl/officeadmin/OA_menu_list2.vue'),
  },
  {
    path: 'menu_list3',
    name: 'menu_list3',
    component: () => import('../views/home/constructionctrl/officeadmin/OA_menu_list3.vue'),
  },
  {
    path: 'menu_list4',
    name: 'menu_list4',
    component: () => import('../views/home/constructionctrl/officeadmin/OA_menu_list4.vue'),
  },
  {
    path: 'menu_list5',
    name: 'menu_list5',
    component: () => import('../views/home/constructionctrl/officeadmin/OA_menu_list5.vue'),
  },
]
const constructionList = [
  {
    path: '',
    name: 'overview',
    component: () => import('../views/home/constructionctrl/OverView.vue'),
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
  },
  {
    path: 'landdemo3',
    name: 'landdemo3',
    component: () => import('../views/home/constructionctrl/landdemo/LandDemo1.vue'),
  },
  {
    path: 'technology',
    name: 'technology',
    component: () => import('../views/home/constructionctrl/TechNology.vue'),
  },
  {
    path: 'ratemanage',
    name: 'ratemanage',
    component: () => import('../views/home/constructionctrl/RateManage.vue'),
  },
  {
    path: 'qualitymanage',
    name: 'qualitymanage',
    component: () => import('../views/home/constructionctrl/QualityManage.vue'),
  },
  {
    path: 'safemanage',
    name: 'safemanage',
    component: () => import('../views/home/constructionctrl/safemanage/SafeManage.vue'),
  },
  {
    path: 'safechart',
    name: 'safechart',
    component: () => import('../views/home/constructionctrl/safemanage/SafeChart.vue'),
  },
  {
    path: 'materialmanage',
    name: 'materialmanage',
    component: () => import('../views/home/constructionctrl/MaterialManage.vue'),
  },
  {
    path: 'systemset',
    name: 'systemset',
    component: () => import('../views/home/constructionctrl/systemset/SystemSet.vue'),
  },
  {
    path: 'systemdata',
    name: 'systemdata',
    component: () => import('../views/home/constructionctrl/systemset/SystemData.vue'),
  },
  {
    path: 'adminsystem',
    name: 'adminsystem',
    component: () => import('../views/home/constructionctrl/adminsystem/AdminSystem.vue'),
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
    component: () => import('../views/admin/UserInfo.vue')
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
  ]
})
export default router