<<<<<<< HEAD
import React,{useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , EffectFade , Pagination, Scrollbar, A11y  } from 'swiper';
import { useRef } from 'react'
import Loading from './loading';
import { useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {sliderPhoto} from "../../src/db.json"


export default function Slider() {
  
    const [imagesSlider , setImagesSlider]=useState(null)

    useEffect(()=>{
        setImagesSlider(sliderPhoto)
    },[])

    const swiperNavPrevRef = useRef(null)
    const swiperNavNextRef = useRef(null)
    const swiperPaginationRef = useRef(null)

    if(!imagesSlider){
        return <Loading/>
    }

  return (
    <div className='w-full h-max bg-neutral-100 flex flex-col items-center justify-center py-12 my-6'>
    <div className='w-full  h-120 '>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y , EffectFade]}
    spaceBetween={100}
    slidesPerView={1}
    navigation={{
        nextEl : swiperNavNextRef.current,
        prevEl : swiperNavPrevRef.current,
    }
    }
    onInit={(swiper)=>{
        swiper.params.navigation.prevEl = swiperNavPrevRef.current;
        swiper.params.navigation.nextEl = swiperNavNextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();

    }}
    
    effect='fade'
    pagination={{
        el: '.swiper-pagination',
        clickable: true,
    }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    className="w-10/12 h-full"
  >
    {imagesSlider.map(item=>
       <SwiperSlide key={item.id} className='w-full h-full'>
       <img className='w-full h-full object-cover' src={item.src} alt={item.alt} />
    </SwiperSlide>
      )}
    
    <div ref={swiperPaginationRef} className='swiper-pagination '>
      
    </div>
    <div ref={swiperNavPrevRef} className="swiper-button-prev !text-white"></div>
    <div ref={swiperNavNextRef} className="swiper-button-next !text-white"></div>
    
    ...
  </Swiper>
  </div>
  <div className='flex items-center justify-center gap-x-4 w-10/12 h-max  my-6   gap-y-4'> 
    <div dir='rtl' className='sm:w-1/3 sm:h-28 bg-red-100 border border-red-500 rounded-md  flex items-center  cursor-pointer grow-0 p-2'>
    <svg xmlns="http://www.w3.org/2000/svg" className='fill-red-700  ml-2 mb-6 ' viewBox="0 0 24 24" width="40" height="40"><path fill="none" d="M0 0L24 0 24 24 0 24z"/><path d="M17 2v2h3.007c.548 0 .993.445.993.993v16.014c0 .548-.445.993-.993.993H3.993C3.445 22 3 21.555 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7V2h10zM7 6H5v14h14V6h-2v2H7V6zm2 10v2H7v-2h2zm0-3v2H7v-2h2zm0-3v2H7v-2h2zm6-6H9v2h6V4z"/></svg>
    <div className='flex flex-col gap-y-4 justify-center items-start '>
    <p className='text-lg font-bold text-red-600'>شرکت در نظرسنجی خانواده</p>
    <p className='text-sm'>مطالب این وبلاگ با هدف روشنگری در ...</p>
    </div>
    </div>
    <div className='sm:w-1/3 sm:h-28 bg-fuchsia-700 border  rounded-md  flex items-center cursor-pointer grow-0 p-2'>
    <svg xmlns="http://www.w3.org/2000/svg" className='fill-white mb-6 ml-2' viewBox="0 0 24 24" width="40" height="40"><path fill="none" d="M0 0L24 0 24 24 0 24z"/><path d="M17 2v2h3.007c.548 0 .993.445.993.993v16.014c0 .548-.445.993-.993.993H3.993C3.445 22 3 21.555 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7V2h10zM7 6H5v14h14V6h-2v2H7V6zm2 10v2H7v-2h2zm0-3v2H7v-2h2zm0-3v2H7v-2h2zm6-6H9v2h6V4z"/></svg>
    <div className='flex flex-col justify-center items-start gap-y-4'>
    <p className='text-lg font-bold text-white'>ثبت نام دوره مهدویت</p>
    <p className='text-white text-sm'>مطالب این وبلاگ با هدف روشنگری در ...</p>
    </div>
    </div>
    <div dir='rtl' className='sm:w-1/3 sm:h-28 bg-green-200 border-green-500 rounded-md border flex items-center cursor-pointer grow-0 p-2'>

    <svg xmlns="http://www.w3.org/2000/svg" className='fill-green-800 mb-6 ml-2' viewBox="0 0 24 24" width="40" height="40"><path fill="none" d="M0 0L24 0 24 24 0 24z"/><path d="M17 2v2h3.007c.548 0 .993.445.993.993v16.014c0 .548-.445.993-.993.993H3.993C3.445 22 3 21.555 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7V2h10zM7 6H5v14h14V6h-2v2H7V6zm2 10v2H7v-2h2zm0-3v2H7v-2h2zm0-3v2H7v-2h2zm6-6H9v2h6V4z"/></svg>
    <div className='flex flex-col justify-center items-start gap-y-4 '>
    <p className='text-lg font-bold text-green-700'>شرکت در نظرسنجی خانواده</p>
    <small className='text-black'>مطالب این وبلاگ با هدف روشنگری در ...</small>
    </div>
    </div>
  </div>
  </div>
  
  )
=======
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination, Scrollbar, A11y } from "swiper";
import { useRef } from "react";
import Loading from "./loading";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { sliderPhoto } from "../../src/db.json";
import Survey from "./Survey";

export default function Slider() {
  const [imagesSlider, setImagesSlider] = useState(null);

  useEffect(() => {
    setImagesSlider(sliderPhoto);
  }, []);

  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  // const swiperPaginationRef = useRef(null);

  if (!imagesSlider) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto h-max py-7 px-2">
      

     
      <Swiper
        wrapperClass="w-full"
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        spaceBetween={100}
        slidesPerView={1}
        navigation={{
          nextEl: swiperNavNextRef.current,
          prevEl: swiperNavPrevRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = swiperNavPrevRef.current;
          swiper.params.navigation.nextEl = swiperNavNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        effect="fade"
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="w-full max-h-[32rem] min-h-full bg-red-200"
      >
        {imagesSlider.map((item) => (
          <SwiperSlide key={item.id} className="w-full max-h-96  h-full">
            <img
              className="w-full h-full object-cover"
              src={item.src}
              alt={item.alt}
            />
          </SwiperSlide>
        ))}
        <div
          ref={swiperNavPrevRef}
          className="swiper-button-prev !text-white"
        ></div>
        <div
          ref={swiperNavNextRef}
          className="swiper-button-next !text-white"
        ></div>
        ...
      </Swiper>
      <div className="tw-pagination">
        <div className="swiper-pagination"></div>
      </div>
      <Survey/>

       </div>
    
  );
>>>>>>> mo3ito
}
