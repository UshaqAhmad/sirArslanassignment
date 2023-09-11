import React from 'react'
import "./Navbar.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y,  Autoplay } from 'swiper';
// import { EffectFlip } from 'swiper';



function Slider() {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y,  Autoplay]}
    spaceBetween={50}
    effect="flip"
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
  >
    
    
    <SwiperSlide><img className='img' src="https://minerals-stones.com/modules/angarslider/views/img/images/211d55a51e9d438cba65cba995b615b7aa166c32_investment-gems.webp" alt=""  /></SwiperSlide>
    <SwiperSlide><img className='img' src="https://minerals-stones.com/modules/angarslider/views/img/images/9dbb545046b176854b5c4f2eed760ed1364b3186_1-en-min.webp" alt="" /></SwiperSlide>
    <SwiperSlide><img className='img' src="https://minerals-stones.com/modules/angarslider/views/img/images/9285a272a32137fbf1571cc9b87421f652258761_aj.webp" alt="" /></SwiperSlide>
    
    



  </Swiper>
  )
}

export default Slider
