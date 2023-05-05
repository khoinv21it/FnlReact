import React from 'react'
import { StyleOffer } from './style'
import { DataOffer } from 'modules/data-fake'
import Container from 'components/Container'

const Offer = () => {
  return (
    <StyleOffer>
      <Container>
        <h1 className='title__header'>What We Offer</h1>
        <div className='cards'>
          {DataOffer.map((item: { image: string; title: string; description: string }, index: number) => (
            <div className='cards__item'>
              <div className='image'>
                <img src={item.image} alt={item.title} />
              </div>
              <div className='content'>
                <h3 className='title'>{item.title}</h3>
                <p className='description'>{item.description}</p>
                <div className='see__more'>
                  <span>Read more</span>
                  <i className='fas fa-caret-right'></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </StyleOffer>
  )
}

export default Offer
