import React, { useRef, useState , useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "./loading";
import MorSpeech from "./MorSpeech";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination ,Navigation} from "swiper";
import {albumPhoto2} from "../../src/db.json"

export default function Album2() {
    const [albumPhotos2 , setAlbumPhotos2]=useState(null)
    const swiperRef = useRef();

    const prevSlideHandler =()=>{
        swiperRef.current?.slidePrev();
    }

    if(!albumPhotos2){
        return <Loading/>
    }

  return (
    <div className=" container px-2z mx-auto ">
    <div className=" mb-6 ">
    <MorSpeech classMore="blue-400" underline="true" colorIcon="fill-blue-400" colorText="text-blue-400" content="جدیدترین سخنرانی ها" nextButtonHandler={nextSlideHandler} prevButtonHandler={prevSlideHandler}/>
    </div>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={20}
        modules={[Grid, Pagination , Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        
          breakpoints={{
          // when window width is >= 640px
          0:{
            slidesPerView: 1,
            
          },
          640: {
            
            slidesPerView: 2,
          },
          1370: {
            
            slidesPerView: 3,
          },
        }}
        className="w-full h-96  "
      >
        {albumPhotos2.map(item=>
            <SwiperSlide key={item.id} className="!flex max-w-[400px] !items-center !justify-center   !h-40  ">
                <div dir="rtl" className="flex  w-full  h-full">
                    <div className="w-40 h-full ">
                    <img className="w-full h-full  " src={item.src} alt={item.alt} />
                    </div>
                    <div className="flex flex-col justify-between h-full w-48 py-3 pr-3 bg-neutral-100 border rounded-l-md">
                    <div>
                        <div className="flex items-center gap-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11z"/></svg>
                        <p className="text-lg">ویس استاد</p>
                        </div>
                        
                        <p className="text-sm">سخنرانی استاد در تهران</p>
                    </div>
                    
                    <div dir="rtl" className="flex gap-x-8 opacity-70 text-sm ">
                            <div className="flex gap-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z"/></svg>
                            <p>1401/9/25</p>
                            </div>
                        
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M20.005 2C21.107 2 22 2.898 22 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H4v-4H2v-2h2v-3H2v-2h2V8H2V6h2V2h16.005zM8 4H6v16h2V4zm12 0H10v16h10V4z"/></svg>
                         </div>
                    </div>
                    </div>
                
                
            </SwiperSlide>
            )}
        
      </Swiper>
    </div>
  );
}
