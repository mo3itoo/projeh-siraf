import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination , Navigation } from "swiper";
import Loading from "./loading";
import MorSpeech from "./MorSpeech";
import {albumPhoto3} from "../../src/db.json"

export default function Album3() {
  const [albumPhotos3, setAlbumPhotos3] = useState(null);

  const swiperRef = useRef();
  useEffect(() => {
    setAlbumPhotos3(albumPhoto3);
  }, []);


  const nextSlideHandler =()=>{
    swiperRef.current?.slideNext()
  }

  const prevSlideHandler =()=>{
    swiperRef.current?.slidePrev()
  }

  if (!albumPhotos3) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-800 pt-16 md:pt-12 pb-8 mb-16  px-2 ">
        <div className="-translate-y-8 container mx-auto ">
          
        <div  className='flex -translate-y-3 sm:translate-y-8 lg:translate-x-40 w-full items-center justify-center  gap-x-1 h-8   text-xsm text-white  px-1 rounded-sm'>
         <div className="bg-gray-900 gap-x-1 p-1 rounded-md flex ">
         <button className='flex items-center justify-center gap-x-1 opacity-70 bg-gray-900'> 
         <p>youtube</p>
         <svg xmlns="http://www.w3.org/2000/svg" className='fill-white' viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M19.606 6.995c-.076-.298-.292-.523-.539-.592C18.63 6.28 16.5 6 12 6s-6.628.28-7.069.403c-.244.068-.46.293-.537.592C4.285 7.419 4 9.196 4 12s.285 4.58.394 5.006c.076.297.292.522.538.59C5.372 17.72 7.5 18 12 18s6.629-.28 7.069-.403c.244-.068.46-.293.537-.592C19.715 16.581 20 14.8 20 12s-.285-4.58-.394-5.005zm1.937-.497C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
             </button>
         <button className='flex items-center justify-center gap-x-1 bg-slate-700 p-1 rounded-md'> 
         <p>twitter</p>
           <svg xmlns="http://www.w3.org/2000/svg" className='fill-cyan-500' viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/></svg>
           
           </button>
         
         </div>
         </div>
        <MorSpeech classMore="white" colorIcon="fill-white" colorText="text-white" nextButtonHandler={nextSlideHandler} prevButtonHandler={prevSlideHandler} content="پربازدیدترین سخنرانی ها" />
        </div>
       

      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        modules={[Pagination , Navigation]}
        onBeforeInit={(swiper)=>{
          swiperRef.current = swiper;
        }}  
       
        breakpoints={{
          // when window width is >= 640px
          0:{
            slidesPerView: 1,
          },
          400: {
            
            slidesPerView: 2,
          },
          640: {
            
            slidesPerView: 3,
          },
          1024: {
            
            slidesPerView: 4,
          },
         
        }}
      
        className="container h-80  "
      >
        {albumPhotos3.map((item) => (
          <SwiperSlide
          key={item.id}
            dir="rtl"
            className=" bg-gray-900  p-4  text-white border border-cyan-500 rounded-lg "
        
          >
            <div className="w-full h-full  flex flex-col justify-between ">

            
            <div className="flex  items-center w-full  ">
              <div className="w-24 h-20">
                <img src={item.src} alt={item.alt} className="w-full h-full" />
              </div>
              <div dir="ltr" className="flex flex-col items-center pr-2 text-lg">
                <p>استاد</p>
                <p>@leui</p>
              </div>
            </div>

            <div className=" w-full h-10 text-sm -translate-y-6">
              <p>
                مطالب این وب گاه با هدف روشنگری برای شما عزیزان تهیه و تدوین شده
                است
              </p>
            </div>

            <div className=" w-full h-10 ">
              <a className="text-cyan-500 " href="#">
                <u>
                بیشتر
                </u>
                
              </a>
            </div>

            <div className=" text-center text-sm">
              <p>pm 5:25 . sep1 2023 </p>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
