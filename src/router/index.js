import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes'

const routerHistory = createWebHistory()

const router = createRouter({
  linkActiveClass: "active",
  history: routerHistory,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if (!to.name) next({ name: '404' })
  const name = to.meta.title ? to.meta.title : ''
  document.title = `${name}`
  window.scrollTo({ top: 0, behavior: 'smooth' })
  next()
})

export default router
