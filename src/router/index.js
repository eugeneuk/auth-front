import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/components/auth/login/Login";
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/components/auth/register/Register')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/components/profile/Profile')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/User'),
    meta: { authRoute: true }
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/components/users/Users'),
    meta: { authRoute: true }
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('@/components/auth/login/Logout'),
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/components/errors/403'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Middleware for auth routes
router.beforeEach((to, from, next) => {
  //if(to.meta.authRoute){
  if(to.matched.some(record => record.meta.authRoute)){

    if(!localStorage.getItem('_token')){
      next({
        name: "/login"
      })
    }else{
      next();
    }

  } else {
    next();
  }
});

export default router
