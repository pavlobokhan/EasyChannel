import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes'

const routerHistory = createWebHistory()

const router = createRouter({
  linkActiveClass: "active",
  history: routerHistory,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if (!to.name) next({ name: 'orders' })
  const name = to.meta.title ? 'Easy Channel - ' + to.meta.title : 'Easy Channel'
  document.title = `${name}`
  window.scrollTo({ top: 0, behavior: 'smooth' })
  next()
})

export default router
