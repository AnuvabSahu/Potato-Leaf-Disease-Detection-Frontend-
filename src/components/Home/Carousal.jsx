import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style2.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Carousal = ({ images }) => {



    return (
        <div className={`h-72 md:h-80 lg:h-[500px] relative`}>

            <div className='h-full w-full absolute top-0 bg-linear-to-b from-primary-content via-transparent to-transparent z-20' />

            <Swiper
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className=""
            >
                {
                    images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className='bg-gray-400 w-full h-full'>
                                <img
                                    className='object-cover w-full'
                                    src={image} alt="Slider-image" />
                            </div>
                        </SwiperSlide>))
                }
            </Swiper>
        </div>
    )
}

export default Carousal