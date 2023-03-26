import React, { useEffect } from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, EffectCoverflow, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import './SlideShow.css'


import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import StepsCard from './StepsCard';



export default function SlideShow({cards}) {
    
    useEffect(()=>{

    },[cards])

    const SwiperButtonNext = ({ children }) => {
        const swiper = useSwiper();
        return <button className='this-next' onClick={() => swiper.slideNext()}>{children}</button>;
      };

      const SwiperButtonPrev = ({ children }) => {
        const swiper = useSwiper();
        return <button className='this-prev'  onClick={() => swiper.slidePrev()}>{children}</button>;
      };

  return (
    <div className='slide-show-main'>
        <div className='slide-show-sec'>
    <Swiper
      // install Swiper modules
      modules={[Autoplay,EffectCoverflow,Navigation, Pagination,Scrollbar, A11y]}
      effect={'coverflow'}
      grabCursor={true}
      speed={1600}
    spaceBetween={0}
      slidesPerView={3}
      pagination={{ el:'.swiper-pagination',clickable: true }}
      navigation= {{
        nextEl:'.this-next',
        prevEl:'.this-prev',
        clickable:true
      }}
        autoplay= {true}
            loop= {false}
      centeredSlides={true}
      coverflowEffect={
        {
            rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1.7,
        slideShadows: false,
        }
      }
      className="swiper_container"
    >

        {cards? cards.map((card) => 
            <SwiperSlide><div>{card}</div></SwiperSlide>
        ):     console.log(cards)}
      
      <div className='swipers-buttons'>
        <div className='slider-arrow'>
      <SwiperButtonPrev>&#8826;</SwiperButtonPrev>
      </div>
      <div className='slider-controler'><div className='swiper-pagination'></div></div>

<div className='slider-arrow'>
        <SwiperButtonNext>&#8827;</SwiperButtonNext>
        </div>
        </div>
      
    </Swiper>
    </div>
    </div>
  )
}
