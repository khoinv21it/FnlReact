import IndexHomeComponents from 'components/homeComponents'
import { TypeViewChildrenRoute } from '../types/types'
import Blog from 'pages/Blog'
import Tech from 'pages/bogPages/Tech'
import Sport from 'pages/bogPages/Sport'
import Fashion from 'pages/Fashion'
import Product from 'pages/product'
import Login from 'pages/login'

export const ChildrenRouteHome: TypeViewChildrenRoute[] = [
  {
    collapse: false,
    component: <IndexHomeComponents />,
    icon: undefined,
    name: 'home',
    index: true,
    path: '/',
    roles: ['user'],
    views: undefined,
  },
  {
    collapse: false,
    component: <Fashion />,
    icon: undefined,
    name: 'user',
    index: true,
    path: '/fashion',
    roles: ['user'],
    views: undefined,
  },
  {
    collapse: false,
    component: <Product />,
    icon: undefined,
    name: 'user',
    index: true,
    path: '/product',
    roles: ['user'],
    views: undefined,
  },
  {
    collapse: false,
    component: <Login />,
    icon: undefined,
    name: 'user',
    index: true,
    path: '/login',
    roles: ['user'],
    views: undefined,
  },
  {
    collapse: false,
    component: <Blog />,
    icon: undefined,
    name: 'blog',
    index: false,
    path: '/blog',
    roles: ['user'],
    views: [
      {
        collapse: false,
        component: <Tech />,
        icon: undefined,
        name: 'tech',
        path: '/tech',
        roles: ['user'],
      },
      {
        collapse: false,
        component: <Sport />,
        icon: undefined,
        name: 'sport',
        path: '/sport',
        roles: ['user'],
      },
    ],
  },
]
