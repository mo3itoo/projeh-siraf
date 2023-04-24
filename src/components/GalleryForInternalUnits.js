import React, { useRef, useState , useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { albumPhoto2 } from "../../src/db.json";
import Loading from "./loading";


import { Pagination } from "swiper";

export default function GalleryForInternalUnits({slides}) {
    
    

   
  
    if(!slides){
      return <Loading/>
    }
    
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
                slidesPerView: 2,
              },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        modules={[Pagination]}
        className="w-full h-40 my-10"
      >
        
        {slides.items.map(image=>
           <SwiperSlide key={image.id}>
           <div className="w-full h-full bg-blue-200 ">
               <img className="w-full h-full" src={image.path} alt="image"/>
           </div>
       </SwiperSlide>

          )}
       
  
      </Swiper>
    </>
  );
}
