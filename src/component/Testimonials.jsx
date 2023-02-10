import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

function Testimonials() {
  return (
    <>
    <div className="Testimonial text-white text-center p-6 ">
      <h2 className="font-semibold text-xl">Testimonials</h2>
      <p className="text-sm">See What People Are Saying</p>
    </div>
<div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="bg-white md:w-128 sm:w-80 mb-10"
      >
      
        <SwiperSlide> 
        <div className="flex items-center  md:flex-row sm:flex-col">
         <img className=" md:w-128 sm:w-full h-72" src="./person.jpg" alt="" />
      
        <div className="p-5"> 
          <p className="mb-10">“It was a no brainer for us to have i.t.NOW help us with our IT. They treat us like family. It takes a huge load off to have their support.”</p>
          <h3>maxiual max , companyowner</h3>
          </div>
        </div>
      </SwiperSlide>
 
      </Swiper>

      </div>
    
    </>
  )
}

export default Testimonials