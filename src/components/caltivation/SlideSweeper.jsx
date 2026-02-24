import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style1.css';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

const SlideSweeper = ({ videos }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className=""
      >
        {
          videos.map((video, index) => (
            <SwiperSlide key={index}>
              <iframe className='w-full h-full object-cover' key={index} src={video} title="YouTube video player"  allow="web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}


export default SlideSweeper;