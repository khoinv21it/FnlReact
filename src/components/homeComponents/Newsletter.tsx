import React from 'react'
import { StyleNewsletter } from './style'
import Container from 'components/Container'

const Newsletter = () => {
  return (
    <StyleNewsletter>
      <Container>
        <h1 className='title__header'>Subscribe to Our Newsletter</h1>
        <p className='description'>
          Do not want to miss news, updates, note and any offer pn our product, then please subscriber to our mailing list
        </p>
        <div className='form'>
          <div className='input input__name'>
            <input required type='text' placeholder='Your name(*)' />
          </div>
          <div className='input input__phone'>
            <input required type='text' placeholder='Your Mobile phone' />
          </div>
          <div className='input input__email'>
            <input required type='email' placeholder='Your email address' />
          </div>
          <button>
            <i className='fa-regular fa-envelope'></i>
            <span>Subscribe email list</span>
          </button>
        </div>
      </Container>
    </StyleNewsletter>
  )
}

export default Newsletter
