import { createRouter, createWebHistory } from 'vue-router'
import validateRouteProtection from './auth-guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/home',
      name: 'home',
      meta:{
        // restrictDirectAccess:true
      },
      component: () => import('../views/BookStoreView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      meta:{
         restrictDirectAccess:true
      },
      component: () => import('../views/CartView.vue')
    },
  ]
})

router.beforeEach(validateRouteProtection)

export default router
