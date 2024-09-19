import { createRouter, createWebHistory } from 'vue-router'
import Catalogue from '../views/Catalogue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Catalogue
    }
  ]
})

export default router
