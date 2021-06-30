import Error404 from '@/pages/404'

export default [
  {
    path: '/404',
    name: '404',
    component: Error404,
    meta: {
      title: '404',
      layout: 'Home',
      middleware: []
    }
  },
  {
    path: '/',
    name: 'home',
    component: Redirect,
    meta: {
      title: '',
      layout: 'Home',
      middleware: []
    }
  }
]
