import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Projects from '../views/Projects.vue'
import Reports from '../views/Reports.vue'
import Components from '../views/Components.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
  },
  {
    path: '/reports',
    name: 'reports',
    component: Reports,
  },
  {
    path: '/components',
    name: 'components',
    component: Components,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
