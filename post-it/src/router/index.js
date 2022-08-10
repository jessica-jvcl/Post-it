import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewpostitView from '../views/NewpostitView.vue'
import ShowView from '../views/ShowView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/newpostit',
      name: 'new',
      component: NewpostitView
    },

    {
      path: '/Showview/:id',
      name: 'ShowView',
      component: () => import('../views/ShowView.vue')
    },

    {
    path: '/Confirmdelete/',
    name: 'confirmDeleteView',
    component: () => import('../views/ConfirmdeleteView.vue')
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
