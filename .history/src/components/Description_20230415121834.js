import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { albumPhoto } from "../../src/db.json";
import Loading from "./loading";
import Link from "next/link";

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
            <div className="h-60  mx-auto flex justify-center items-center px-2">
              <Swiper
                effect="coverFlow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                  rotate: 0,
                  stretch: 100,
                  depth: 400,
                  modifier: 1,
                  slideShadows: false,
                }}
                loop={true}
              >
                <SwiperSlide>
                  <div className="w-[300px] bg-blue-200 h-[200px]">
                    mohandes motalebi
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-[300px] bg-blue-200 h-[200px]">
                    mohandes motalebi
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-[300px] bg-blue-200 h-[200px]">
                    mohandes motalebi
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
