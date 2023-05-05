import React from 'react'
import { StyleFooter } from './style'
import Container from './Container'
import { DataAboutUsFooter, DataContactFooter, DataPopularFooter, DataServiceFooter } from 'modules/data-fake'

const Footer = () => {
  return (
    <StyleFooter>
      <Container>
        <div className='footer'>
          <div className='item'>
            <div className='title'>
              <h4>About us</h4>
            </div>
            <div className='description'>
              <p>{DataAboutUsFooter?.[0]?.title}</p>
              <span>{DataAboutUsFooter?.[0]?.description}</span>
            </div>
          </div>
          <div className='item'>
            <div className='title'>
              <h4>Contact Info</h4>
            </div>
            <div className='content__contact'>
              {DataContactFooter?.map((item: { title: string; content: string; id: number }) => (
                <div className='content__contact-text' key={item.id}>
                  <span>{item.title}</span> <br />
                  <span>{item.content}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='item'>
            <div className='title'>
              <h4>Customer Service</h4>
            </div>
            <div className='content__service'>
              <ul>
                {DataServiceFooter?.map((item: { id: number; title: string; href: string }) => (
                  <a href={item.href} key={item.id}>
                    <li>{item.title}</li>
                  </a>
                ))}
              </ul>
            </div>
          </div>
          <div className='item'>
            <div className='title'>
              <h4>Popular tags</h4>
            </div>
            <div className='content__popular'>
              {DataPopularFooter?.map((item: { id: number; title: string }) => (
                <span key={item.id}>{item.title}</span>
              ))}
            </div>
          </div>
        </div>
        <div className='copy__right'>
          <span>&#169; Aptech eCommerce. 2022. All Rights Reserved</span>
        </div>
      </Container>
    </StyleFooter>
  )
}

export default Footer
