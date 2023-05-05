import { TypeRoutePublic } from 'types/types'
import IndexHome from 'pages/Home'
import { ChildrenRouteHome } from './ChildrenRoute'

export const PublicRoute: TypeRoutePublic[] = [
  {
    collapse: true,
    component: <IndexHome />,
    icon: undefined,
    name: 'home',
    path: '/',
    roles: ['user'],
    views: [...ChildrenRouteHome],
  },
]
