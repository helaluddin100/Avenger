import React, { useRef, useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation]);
function Artwork() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        className='mySwiper'
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
      >
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/1.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/2.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/3.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/4.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/5.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/6.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/7.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/8.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/9.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/10.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/11.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/12.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/13.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/14.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/15.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/16.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/17.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/18.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/19.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/20.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/21.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/22.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/23.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/24.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/25.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/26.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/27.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='artwork-wrapper fixe-top'>
            <div className='container'>
              <img
                src='assets/img/artwork/28.png'
                alt=''
                className='slider-item'
              />
            </div>
          </div>
        </SwiperSlide>
        <div className='slider-navigation'>
          <div ref={navigationPrevRef}>
            <img src='assets/img/prev.png' alt='' />
          </div>
          <div ref={navigationNextRef}>
            <img src='assets/img/next.png' alt='' />
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Artwork;
