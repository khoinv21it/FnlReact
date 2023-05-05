import Container from 'components/Container'
import React from 'react'
import Carousel from './Carousel'
import Service from './Service'
import Offer from './Offer'
import ListProduct from './ListProduct'
import Newsletter from './Newsletter'

const IndexHomeComponents = () => {
  return (
    <>
      <Carousel />
      <Service />
      <Offer />
      <ListProduct />
      <Newsletter />
    </>
  )
}

export default IndexHomeComponents
