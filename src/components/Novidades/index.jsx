import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import './style.scss'
import 'swiper/css'
import 'swiper/css/navigation'

import CardBlackFriday from '../CardBlackFriday'

const Novidades = () => {
  return (
    <Container className="wrapper_Novidades">
      <div className="box_title">
        <h1 className="title">Novidades</h1>
      </div>
      <div className="box_swiper">
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{ 1400: { slidesPerView: 3, spaceBetween: 30}, 600: {slidesPerView: 2, spaceBetween: 30}}}
          className='swiper_slider'
        >
          <SwiperSlide>
            <CardBlackFriday />
          </SwiperSlide>
          <SwiperSlide>
            <CardBlackFriday />
          </SwiperSlide>
          <SwiperSlide>
            <CardBlackFriday />
          </SwiperSlide>
          <SwiperSlide>
            <CardBlackFriday />
          </SwiperSlide>
          <SwiperSlide>
            <CardBlackFriday />
          </SwiperSlide>
          <SwiperSlide>
            <CardBlackFriday />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  )
}

export default Novidades
