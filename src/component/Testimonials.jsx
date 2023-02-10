import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

function Testimonials() {
  return (
    <>
    <div>
      <div id='testominal-container' className=' text-center text-white pt-6 pb-3'>
        <h3 className='font-semibold'>Testimonials</h3>
        <p className='text-sm'>See What People Are Saying</p>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper bg-bg"
      >
        <SwiperSlide>  <div className='bg-bg relative   md:h-96 sm:h-108'>
        <div id='testominal-card' className=' absolute md:w-128 sm:w-80 h-80  flex md:flex-row  sm:flex-col justify-center items-center'>
          <img className='md:w-96 md:h-80 sm:w-96 sm:h-60' src="./person.jpg" alt="buisnessman" />
          <div className='bg-white md:w-screen sm:w-80 md:h-full sm:h-content p-5' >
  
            <p className='mb-5'>“It was a no brainer for us to have i.t.NOW help us with our IT. They treat us like family. It takes a huge load off to have their support.”</p>
            <h3>maxual max, company owner</h3>
          </div>
        </div>
      </div>
      </SwiperSlide>

      </Swiper>
  
    </div>
    
    
    </>
  )
}

export default Testimonials