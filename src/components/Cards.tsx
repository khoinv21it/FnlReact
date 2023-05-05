import React from 'react'
import { TypeProduct } from 'types/types'
import { StyleCards } from './style'

type Props = {
  products: TypeProduct[]
}

const Cards = ({ products }: Props) => {
  return (
    <StyleCards>
      {products?.map((item: TypeProduct) => (
        <div className='cards__item'>
          <div className='sale'>
            <span>-6%</span>
          </div>
          <div className='image'>
            <img src={item.images?.[0]} alt={item.title} />
          </div>
          <div className='content'>
            <h1 className='content__title'>{item.title}</h1>
            <div className='content__price'>
              <span>${item.price}</span>
              {/* <del>{item?.old_price}</del> */}
            </div>
          </div>
        </div>
      ))}
    </StyleCards>
  )
}

export default Cards
