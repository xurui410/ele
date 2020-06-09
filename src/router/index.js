import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'layout',
      component: () => import('../components/Layout.vue')
    },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
