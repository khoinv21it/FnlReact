import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { DataCarousel } from 'modules/data-fake'

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {DataCarousel.map((item: { image: string }, index: number) => (
        <SwiperSlide key={index}>
          <img src={item.image} alt={`${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
