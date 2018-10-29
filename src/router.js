import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const design=[
  {
      path: '',
      name: 'main',
      component: () => import('./views/home/Main.vue'),
    },
    {
      path: 'design',
      name: 'design',
      component: () => import('./views/home/Design.vue')
    },
    {
      path: 'construction',
      name: 'construction',
      component: () => import('./views/home/Construction.vue')
    },
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/Index.vue'),
      children: [
        ...design
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
  ]
})
export default router