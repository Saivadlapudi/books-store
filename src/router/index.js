import { createRouter, createWebHistory } from 'vue-router'
import validateRouteProtection from './auth-guard'
// import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: DashboardView
    // },
    {
      path: '/',
      redirect:"/login",
      meta:{
        requiresNoAuthentication:true,
        denyAccessWhenUserIsAuthenticated:true
      },
      component: () => import('../views/LogInView.vue')
    },
    {
      path: '/login',
      name: 'log',
      meta:{
        requiresNoAuthentication:true,
        denyAccessWhenUserIsAuthenticated:true
      },
      component: () => import('../views/LogInView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta:{
        // restrictDirectAccess:true
      },
      component: () => import('../views/DashboardView.vue')
    },
  ]
})

router.beforeEach(validateRouteProtection)

export default router
