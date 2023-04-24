import React, { useRef, useState, useEffect } from "react";
import { albumPhoto } from "../../src/db.json";
import Loading from "./loading";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";

const Description = () => {
  const [albumPhotos1, setAlbumPhotos1] = useState(null);
  const swiperRef = useRef();
  useEffect(() => {
    setAlbumPhotos1(albumPhoto);
  }, []);
  if (!albumPhotos1) {
    return <Loading />;
  }
  return (
    <>
      <div className="w-full h-100 md:h-110  bg-neutral-100 flex items-center justify-center ">
        <div className="w-full bg-red-100 h-96  py-14  flex flex-col xs:flex xs:items-center xs:justify-center items-center justify-center   ">
          <div className="w-full ">
            <div className="  h-20  flex items-center justify-between -translate-y-4 md:-translate-y-18">
              <div className=" w-2/5 h-1  relative  bg-gradient-to-l from-white  to-cyan-600 rounded-full ">
                <span className="w-px h-px p-1 bg-cyan-600 rounded-full absolute -left-3 -top-0.5"></span>
              </div>
              <div className=" w-2/5 h-1 relative  bg-gradient-to-r from-white  to-cyan-600 rounded-full">
                <span className="w-px h-px p-1 bg-cyan-600 rounded-full absolute -right-3 -top-0.5"></span>
              </div>
            </div>
            <div className="h-60  px-2">
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 80,
                  modifier: 5,
                  slideShadows: true,
                }}
                modules={[EffectCoverflow]}
                loop={true}
              >
                <SwiperSlide>
                <div className="sm:w-full xs:text-xxsm text-sm sm:text-md md:text-base mb-4 opacity-70 flex items-center justify-center xs:gap-x-2 md:gap-x-4 gap-x-6  mx-auto  ">
                <div className="flex xs:w-14 w-20 md:w-24 items-center justify-center gap-x-0.5  opacity-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="xs:w-3 w-4  md:w-5"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                  </svg>
                  <p className="">25 استاد</p>
                </div>

                <div className="flex items-center justify-center gap-x-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="xs:w-3 w-4 md:w-5"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11z" />
                  </svg>
                  <p>25 صدا</p>
                </div>

                <div className="flex items-center justify-center gap-x-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="xs:w-3 w-4 md:w-5"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  </svg>
                  <p>25 ویدیو</p>
                </div>

                <div className="flex items-center justify-center gap-x-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="xs:w-3 w-4 md:w-5" 
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5zM19 20v-3H6.5a1.5 1.5 0 0 0 0 3H19zM5 15.337A3.486 3.486 0 0 1 6.5 15H19V4H6a1 1 0 0 0-1 1v10.337z" />
                  </svg>
                  <p>25 نوشته</p>
                </div>
              </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="sm:w-full xs:text-xxsm text-sm sm:text-md md:text-base mb-4 opacity-70 flex items-center justify-center xs:gap-x-2 md:gap-x-4 gap-x-6  mx-auto  ">
                <div className="flex xs:w-14 w-20 md:w-24 items-center justify-center gap-x-0.5  opacity-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="xs:w-3 w-4  md:w-5"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                  </svg>
                  <p className="">25 استاد</p>
                </div>

                <div className="flex items-center justify-center gap-x-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="xs:w-3 w-4 md:w-5"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11z" />
                  </svg>
                  <p>25 صدا</p>
                </div>

                <div className="flex items-center justify-center gap-x-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="xs:w-3 w-4 md:w-5"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  </svg>
                  <p>25 ویدیو</p>
                </div>

                <div className="flex items-center justify-center gap-x-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="xs:w-3 w-4 md:w-5" 
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5zM19 20v-3H6.5a1.5 1.5 0 0 0 0 3H19zM5 15.337A3.486 3.486 0 0 1 6.5 15H19V4H6a1 1 0 0 0-1 1v10.337z" />
                  </svg>
                  <p>25 نوشته</p>
                </div>
              </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="sm:w-full xs:text-xxsm text-sm sm:text-md md:text-base mb-4 opacity-70 flex items-center justify-center xs:gap-x-2 md:gap-x-4 gap-x-6  mx-auto  ">
                <div className="flex xs:w-14 w-20 md:w-24 items-center justify-center gap-x-0.5  opacity-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="xs:w-3 w-4  md:w-5"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                  </svg>
                  <p className="">25 استاد</p>
                </div>

                <div className="flex items-center justify-center gap-x-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="xs:w-3 w-4 md:w-5"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11z" />
                  </svg>
                  <p>25 صدا</p>
                </div>

                <div className="flex items-center justify-center gap-x-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="xs:w-3 w-4 md:w-5"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  </svg>
                  <p>25 ویدیو</p>
                </div>

                <div className="flex items-center justify-center gap-x-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="xs:w-3 w-4 md:w-5" 
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5zM19 20v-3H6.5a1.5 1.5 0 0 0 0 3H19zM5 15.337A3.486 3.486 0 0 1 6.5 15H19V4H6a1 1 0 0 0-1 1v10.337z" />
                  </svg>
                  <p>25 نوشته</p>
                </div>
              </div>
                </SwiperSlide>

              </Swiper>
            </div>
          </div>
          <div className=" w-10/12  h-max mx-auto flex items-center justify-center">
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
