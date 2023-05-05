import React from 'react'
import { StyleService } from './style'
import Container from 'components/Container'

const Service = () => {
  return (
    <StyleService>
      <Container>
        <div className='service'>
          <div className='service__left'>
            <img src='images/category-img-1.jpg' alt='category-img-1' />
          </div>
          <div className='service__right'>
            <div className='title'>
              <h3>Our Service</h3>
            </div>
            <div className='content'>
              <h1 className='content__title'>Responsive & Professional</h1>
              <p className='content__description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae reiciendis iste et delectus voluptates velit repellendus dicta,
                distinctio pariatur culpa? Est voluptatibus provident accusantium perspiciatis sunt, cumque aut cum praesentium!
              </p>
              <div className='contact'>
                <p className='contact__title'>Call us today</p>
                <div className='contact__phone'>
                  <i className='fas fa-phone'></i>
                  <span>1900-111000</span>
                </div>
                <p className='contact__address'>We're available 24/7, 365 days a year</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </StyleService>
  )
}

export default Service
