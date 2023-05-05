import React from 'react'
import { StyleListProduct } from './style'
import Cards from 'components/Cards'
import axios from 'axios'
import { TypeProduct } from 'types/types'
import Container from 'components/Container'

const ListProduct = () => {
  const [products, setProducts] = React.useState<TypeProduct[]>([])

  const selectProduct = async () => {
    const items = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=4')
    setProducts(items?.data)
  }
  React.useEffect(() => {
    selectProduct()
  }, [])
  return (
    <StyleListProduct>
      <h1 className='title__header'>Danh sách sản phẩm</h1>
      <Container>
        <Cards products={products} />
      </Container>
    </StyleListProduct>
  )
}

export default ListProduct
