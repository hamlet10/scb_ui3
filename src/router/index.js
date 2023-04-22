import {  createRouter, createWebHistory } from 'vue-router'
import Recover from '../modules/auth/RecoverPass.vue'
import LogIn from '../modules/auth/LogIn.vue'





const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/appointments',
    component: ()=> import(/* webpackChunkName: 'appointments' */'../views/Appointments.vue'),
    children:[
      {
        path: 'regulations',
        name: 'regulations',
        component: () => import(/* webpackChunkName: 'regulations' */'@/modules/libraryRegulation/Regulations.vue')
      },
      {
        path: 'create',
        name:'create',
        component: () => import(/* webpackChunkName: 'appointmentsCreate' */'@/modules/appointments/components/AppointmentCreate')
      },
      {
        path: 'list',
        name: 'list',
        component: () => import(/* webpackChunkName: 'appointmentsList' */'@/modules/appointments/components/AppointmentList')
      },
      {
        path: 'reports',
        name: 'reports'
      },
    ],
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: 'home' */'@/views/HomeView.vue'),
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/login',
    name:'Login',
    component: LogIn
  },
  {
    path: '/recover',
    name:'recover-pass',
    component: Recover
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.isAuthenticated) {
      next({
        name: 'Login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
