import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    meta: {
      title: 'Dashboard'
    },
    path: '/',
    name: 'home',
    component: Home
  },
  {
    meta: {
      title: 'Tables'
    },
    path: '/tables',
    name: 'tables',
    component: () => import(/* webpackChunkName: "tables" */ '@/views/Tables.vue')
  },
  {
    meta: {
      title: 'Forms'
    },
    path: '/forms',
    name: 'forms',
    component: () => import(/* webpackChunkName: "forms" */ '@/views/Forms.vue')
  },
  {
    meta: {
      title: 'Profile'
    },
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '@/views/Profile.vue')
  },
  {
    meta: {
      title: 'Ui'
    },
    path: '/ui',
    name: 'ui',
    component: () => import(/* webpackChunkName: "ui" */ '@/views/Ui.vue')
  },
  {
    meta: {
      title: 'Responsive layout'
    },
    path: '/responsive',
    name: 'responsive',
    component: () => import(/* webpackChunkName: "responsive" */ '@/views/Responsive.vue')
  },
  {
    meta: {
      title: 'Login',
      fullScreen: true
    },
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    meta: {
      title: 'Error',
      fullScreen: true
    },
    path: '/error',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '@/views/Error.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
