import Error404 from '@/pages/404'
import Help from '@/pages/Help'
import Orders from '@/pages/Orders'
import Support from '@/pages/Support'
import List from '@/pages/List'

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
    component: List,
    meta: {
      title: 'List',
      layout: 'Home',
      middleware: []
    }
  },
  {
    path: '/support',
    name: 'support',
    component: Support,
    meta: {
      title: 'Support',
      layout: 'Home',
      middleware: []
    }
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders,
    meta: {
      title: 'Orders',
      layout: 'Home',
      middleware: []
    }
  },
  {
    path: '/help',
    name: 'help',
    component: Help,
    meta: {
      title: 'Help',
      layout: 'Home',
      middleware: []
    }
  }
]
