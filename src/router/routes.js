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
    path: '/list',
    name: 'list',
    component: Error404,
    meta: {
      title: '',
      layout: 'Home',
      middleware: []
    }
  },
  {
    path: '/support',
    name: 'support',
    component: Error404,
    meta: {
      title: '',
      layout: 'Home',
      middleware: []
    }
  },
  {
    path: '/orders',
    name: 'orders',
    component: Error404,
    meta: {
      title: '',
      layout: 'Home',
      middleware: []
    }
  },
  {
    path: '/help',
    name: 'help',
    component: Error404,
    meta: {
      title: '',
      layout: 'Home',
      middleware: []
    }
  }
]
