import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../style.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Subtitle from './Subtitle';

const heroImageList = [
    "https://images.pexels.com/photos/9798974/pexels-photo-9798974.jpeg",
    "https://images.pexels.com/photos/7415330/pexels-photo-7415330.jpeg",
    "https://images.pexels.com/photos/12008052/pexels-photo-12008052.jpeg",
    "https://images.pexels.com/photos/13061061/pexels-photo-13061061.jpeg",
    "https://images.pexels.com/photos/9912131/pexels-photo-9912131.jpeg",
    "https://images.pexels.com/photos/10854385/pexels-photo-10854385.jpeg",
    "https://images.pexels.com/photos/13061059/pexels-photo-13061059.jpeg",
    "https://images.pexels.com/photos/1098423/pexels-photo-1098423.jpeg",
    "https://images.pexels.com/photos/1733192/pexels-photo-1733192.jpeg",
]

const Hero = () => {
    return (
        <div className='flex flex-col '>
            <div className='h-80 flex flex-col justify-center items-center gap-2'>
                <div className='text-center '>
                    <h2 className='col-span-2 text-5xl font-semibold my-1'>Smart Detection, Healthy Tubers.</h2>
                    <Subtitle />
                </div>

                <div className='flex flex-col lg:flex-row gap-3'>
                    <button className='btn btn-primary w-40'>Start Scanning</button>
                    <button className='btn btn-ghost underline w-40'>View Diseases</button>
                </div>
            </div>
            <div className='h-72 md:h-96 lg:h-[500px] relative'>
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
                        heroImageList.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className='bg-gray-400 w-full h-full'>
                                    <img
                                        className='object-cover w-full'
                                        src={image} alt="Slider-image" />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Hero