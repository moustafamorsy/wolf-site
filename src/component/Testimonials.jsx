import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

function Testimonials({lang}) {
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
      {lang ?  <div className="flex items-center  md:flex-row sm:flex-col">
          <div className=" md:w-128 sm:w-full h-72 flex flex-col justify-center ">
         <img className="w-fit " src="./share.webp" alt="shr-connect" />
         </div>
        <div className="p-5"> 
          <p className="mb-8">“They provided us with the best service and efficient communication and helped us to secure and maintain our IT structure. They have good customer service. Their team is always there whenever we need them.”</p>
         <a href="https://www.facebook.com/shrconnect" target='_blank'><h3 className="text-darkblue">Shr connect</h3></a>
          </div>
        </div>
      :
      <div className="flex items-center  md:flex-row sm:flex-col">
      <div className=" md:w-128 sm:w-full h-72 flex flex-col justify-center ">
     <img className="w-fit " src="./share.webp" alt="shr-connect" />
     </div>
    <div className="p-5"> 
      <p className="mb-8 text-right">“لقد قدموا لنا أفضل خدمة واتصالات فعالة وساعدونا في تأمين وصيانة هيكل تكنولوجيا المعلومات لدينا. لديهم خدمة عملاء جيدة. فريقهم موجود دائمًا كلما احتجنا إليهم.”</p>
     <a href="https://www.facebook.com/shrconnect" target='_blank'><h3 className="text-darkblue text-right">Shr connect</h3></a>
      </div>
    </div>

      }
      </SwiperSlide>

      </Swiper>

      </div>
    
    </>
  )
}

export default Testimonials