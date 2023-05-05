export type TypeRole = 'user' | 'admin'
export type TypeRouteChildrenLv3 = {
  collapse: boolean
  component: React.ReactNode | undefined
  icon: React.ReactNode | string | undefined | null
  name: string
  path: string
  roles: TypeRole[]
}
export type TypeViewChildrenRoute = {
  collapse: boolean
  component: React.ReactNode
  icon: React.ReactNode | string | undefined | null
  index: boolean
  name: string
  path: string
  roles: TypeRole[]
  views: TypeRouteChildrenLv3[] | [] | null | undefined
}
export type TypeRoutePublic = {
  collapse: boolean
  component: React.ReactNode
  icon: React.ReactNode | string | undefined | null
  name: string
  path: string
  roles: TypeRole[]
  views: TypeViewChildrenRoute[] | [] | null | undefined
}

export type TypeCategoryProduct = {
  creationAt: string
  id: number
  image: string
  name: string
  updateAt: string
}

export type TypeProduct = {
  category: TypeCategoryProduct[]
  creationAt: string
  description: string
  id: number
  images: string[]
  price: number
  title: string
  updateAt: string
}
