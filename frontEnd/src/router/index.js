import { createRouter, createWebHistory } from 'vue-router'
import { useProfileStore } from '../stores/profile'
import { notify } from 'notiwind'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/recover',
      name: 'recover',
      component: () => import('../views/RecoverPasswordView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      beforeEnter: (_, __, next) => {
        const store = useProfileStore()
        if (store.token.length == 0) {
          notify({
            group: 'bottom',
            title: 'Error',
            text: 'Necesitas Iniciar sesion'
          })
          next('/')
        }
        next()
      }
    },
    {
      path: '/add-project',
      name: 'add-project',
      component: () => import('../views/AddProjectView.vue')
    },
    {
      path: '/projects/:id',
      name: 'detail-project',
      component: () => import('../views/DetailProjectView.vue'),
      beforeEnter() {}
    }
  ]
})

export default router
