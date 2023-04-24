import React, { useEffect, useState } from 'react';
import InternalDescriptionMultiMedia from '@/components/InternalDescriptionMultiMedia';
import PointOfView from '@/components/PointOfView';
import { useRouter } from 'next/router';

export default function allCourses() {
  const {
    query: { allCourses },
  } = useRouter();
  console.log(allCourses);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://nativecontent.sirafgroup.com/api/v1/portal/contentByPortal/?portalId=${allCourses}&count=5`
      );
      const data = await response.json();
      setData(data.data);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <div className="w-full h-max bg-neutral-100 py-8 lg:bg-inherit lg:py-3">
        <div className="w-full h-max bg-white lg:bg-neutral-100 ">
          <div className="container mx-auto translate-y-6 px-2 ">
            <p className="text-center lg:text-right xs:text-[12px] text-[13px]">
              <span className="text-cyan-700">خانه</span>/پنل چندرسانه
              ای/دشمن شناسی و توضیحات استاد
            </p>
          </div>

          <div className="container w-full h-full mx-auto px-2 py-8  translate-y-4  ">
            <div className="w-full h-max flex flex-col-reverse lg:grid  rounded-xl lg:grid-cols-12   ">
              <div className="order-1 lg:order-none col-span-8  h-max flex flex-col gap-y-2 justify-center  pt-5  lg:pr-3  lg:bg-white lg:rounded-r-xl pb-3">
                <p className="text-sm lg:text-base font-bold">
                  دشمن شناسی و توضیحات استاد
                </p>
                <div className=" w-full h-full flex items-start">
                  <video
                    src="/assets/1.mp4"
                    className="w-full h-full"
                    controls
                  ></video>
                </div>
              </div>

              <div className="col-span-4 bg-white h-max w-full pr-0 lg:pr-4   rounded-l-xl pb-1 pt-5 ">
                <p className=" mt-6 pb-2 lg:mt-0 lg:pb-2 font-bold">
                  تمامی جلسات
                </p>
                <div className=" flex flex-col h-[450px] lg:h-[360px] xl:h-[450px] overflow-auto gap-y-3">
                  <div className="w-full  lg:w-8/12 cursor-pointer h-20 border hover:bg-white bg-neutral-100 border-stone-300 rounded-md flex p-2 gap-x-2 ">
                    <div className="w-16 h-full flex items-center  justify-center relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-8  absolute opacity-70"
                      >
                        <path
                          d="M19.376 12.4158L8.77735 19.4816C8.54759 19.6348 8.23715 19.5727 8.08397 19.3429C8.02922 19.2608 8 19.1643 8 19.0656V4.93408C8 4.65794 8.22386 4.43408 8.5 4.43408C8.59871 4.43408 8.69522 4.4633 8.77735 4.51806L19.376 11.5838C19.6057 11.737 19.6678 12.0474 19.5146 12.2772C19.478 12.3321 19.4309 12.3792 19.376 12.4158Z"
                          fill="#000"
                        ></path>
                      </svg>
                      <img
                        src="/assets/images/album-photo/1.jpg"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col  justify-around">
                      <p className="text-[12px] font-bold">
                        دشمن شناسی-جلسه اول
                      </p>
                      <p className="text-[12px] opacity-70">
                        ۱ساعت و ۲۰ دقیقه
                      </p>
                    </div>
                  </div>

                  <div className="w-full  lg:w-8/12 cursor-pointer h-20 border hover:bg-white bg-neutral-100 border-stone-300 rounded-md flex p-2 gap-x-2 ">
                    <div className="w-16 h-full flex items-center justify-center relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-8  absolute opacity-70"
                      >
                        <path
                          d="M19.376 12.4158L8.77735 19.4816C8.54759 19.6348 8.23715 19.5727 8.08397 19.3429C8.02922 19.2608 8 19.1643 8 19.0656V4.93408C8 4.65794 8.22386 4.43408 8.5 4.43408C8.59871 4.43408 8.69522 4.4633 8.77735 4.51806L19.376 11.5838C19.6057 11.737 19.6678 12.0474 19.5146 12.2772C19.478 12.3321 19.4309 12.3792 19.376 12.4158Z"
                          fill="#000"
                        ></path>
                      </svg>
                      <img
                        src="/assets/images/album-photo/1.jpg"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col  justify-around">
                      <p className="text-[12px] font-bold">
                        دشمن شناسی-جلسه اول
                      </p>
                      <p className="text-[12px] opacity-70">
                        ۱ساعت و ۲۰ دقیقه
                      </p>
                    </div>
                  </div>

                  <div className="w-full lg:w-8/12 cursor-pointer h-20 border hover:bg-white bg-neutral-100 border-stone-300 rounded-md flex p-2 gap-x-2 ">
                    <div className="w-16 h-full flex items-center justify-center relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-8  absolute opacity-70"
                      >
                        <path
                          d="M19.376 12.4158L8.77735 19.4816C8.54759 19.6348 8.23715 19.5727 8.08397 19.3429C8.02922 19.2608 8 19.1643 8 19.0656V4.93408C8 4.65794 8.22386 4.43408 8.5 4.43408C8.59871 4.43408 8.69522 4.4633 8.77735 4.51806L19.376 11.5838C19.6057 11.737 19.6678 12.0474 19.5146 12.2772C19.478 12.3321 19.4309 12.3792 19.376 12.4158Z"
                          fill="#000"
                        ></path>
                      </svg>
                      <img
                        src="/assets/images/album-photo/1.jpg"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-around">
                      <p className="text-[12px] font-bold">
                        دشمن شناسی-جلسه اول
                      </p>
                      <p className="text-[12px] opacity-70">
                        ۱ساعت و ۲۰ دقیقه
                      </p>
                    </div>
                  </div>

                  <div className="w-full lg:w-8/12 cursor-pointer h-20 border hover:bg-white bg-neutral-100 border-stone-300 rounded-md flex p-2 gap-x-2 ">
                    <div className="w-16 h-full flex items-center justify-center relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-8  absolute opacity-70"
                      >
                        <path
                          d="M19.376 12.4158L8.77735 19.4816C8.54759 19.6348 8.23715 19.5727 8.08397 19.3429C8.02922 19.2608 8 19.1643 8 19.0656V4.93408C8 4.65794 8.22386 4.43408 8.5 4.43408C8.59871 4.43408 8.69522 4.4633 8.77735 4.51806L19.376 11.5838C19.6057 11.737 19.6678 12.0474 19.5146 12.2772C19.478 12.3321 19.4309 12.3792 19.376 12.4158Z"
                          fill="#000"
                        ></path>
                      </svg>
                      <img
                        src="/assets/images/album-photo/1.jpg"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col  justify-around">
                      <p className="text-[12px] font-bold">
                        دشمن شناسی-جلسه اول
                      </p>
                      <p className="text-[12px] opacity-70">
                        ۱ساعت و ۲۰ دقیقه
                      </p>
                    </div>
                  </div>

                  <div className="w-full  lg:w-8/12 cursor-pointer h-20 border hover:bg-white bg-neutral-100 border-stone-300 rounded-md flex p-2 gap-x-2 ">
                    <div className="w-16 h-full flex items-center justify-center relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-8  absolute opacity-70"
                      >
                        <path
                          d="M19.376 12.4158L8.77735 19.4816C8.54759 19.6348 8.23715 19.5727 8.08397 19.3429C8.02922 19.2608 8 19.1643 8 19.0656V4.93408C8 4.65794 8.22386 4.43408 8.5 4.43408C8.59871 4.43408 8.69522 4.4633 8.77735 4.51806L19.376 11.5838C19.6057 11.737 19.6678 12.0474 19.5146 12.2772C19.478 12.3321 19.4309 12.3792 19.376 12.4158Z"
                          fill="#000"
                        ></path>
                      </svg>
                      <img
                        src="/assets/images/album-photo/1.jpg"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col  justify-around">
                      <p className="text-[12px] font-bold">
                        دشمن شناسی-جلسه اول
                      </p>
                      <p className="text-[12px] opacity-70">
                        ۱ساعت و ۲۰ دقیقه
                      </p>
                    </div>
                  </div>

                  <div className="w-full lg:w-8/12 cursor-pointer h-20 border hover:bg-white bg-neutral-100 border-stone-300 rounded-md flex p-2 gap-x-2 ">
                    <div className="w-16 h-full flex items-center justify-center relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-8  absolute opacity-70"
                      >
                        <path
                          d="M19.376 12.4158L8.77735 19.4816C8.54759 19.6348 8.23715 19.5727 8.08397 19.3429C8.02922 19.2608 8 19.1643 8 19.0656V4.93408C8 4.65794 8.22386 4.43408 8.5 4.43408C8.59871 4.43408 8.69522 4.4633 8.77735 4.51806L19.376 11.5838C19.6057 11.737 19.6678 12.0474 19.5146 12.2772C19.478 12.3321 19.4309 12.3792 19.376 12.4158Z"
                          fill="#000"
                        ></path>
                      </svg>
                      <img
                        src="/assets/images/album-photo/1.jpg"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-around">
                      <p className="text-[12px] font-bold">
                        دشمن شناسی-جلسه اول
                      </p>
                      <p className="text-[12px] opacity-70">
                        ۱ساعت و ۲۰ دقیقه
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-start-2 col-span-8  h-20 flex items-center bg-white lg:bg-neutral-100 mt-3">
                <div className="w-full  flex items-center gap-x-2">
                  <div className="w-20 h-20 rounded-full">
                    <img
                      src="/assets/images/album-photo/1.jpg"
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-y-2 ">
                    <p>عادل</p>
                    <div className="flex gap-x-8">
                      <div className="flex gap-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z" />
                        </svg>
                        <p>1401/9/25</p>
                      </div>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M20.005 2C21.107 2 22 2.898 22 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H4v-4H2v-2h2v-3H2v-2h2V8H2V6h2V2h16.005zM8 4H6v16h2V4zm12 0H10v16h10V4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-4 bg-white lg:bg-neutral-100  h-20 flex justify-between items-center pr-0 lg:pr-4">
                <div className="w-full flex justify-between items-center">
                  <button className="xs:h-8 xs:text-[10px] xs:w-20 xs:gap-x-1 bg-white  w-32 lg:w-24 lg:text-[12px]  xl:w-28 xl:text-base h-12 rounded-lg border flex items-center justify-center gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xs:w-4 w-5 md:w-5 xl:w-6 lg:w-5 "
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V2.5L23.5 11L13 19.5V14ZM11 12H15V15.3078L20.3214 11L15 6.69224V10H13C10.5795 10 8.41011 11.0749 6.94312 12.7735C8.20873 12.2714 9.58041 12 11 12Z"
                        fill="#000"
                      ></path>
                    </svg>
                    اشتراک
                  </button>
                  <button className="xs:h-8 xs:text-[10px] xs:w-20 xs:gap-x-1 bg-white w-32 lg:w-24 lg:text-[12px] xl:w-28 xl:text-base  h-12 rounded-lg border flex items-center justify-center gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xs:w-4 w-5 md:w-5 xl:w-6 lg:w-5 "
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z"
                        fill="#000"
                      ></path>
                    </svg>
                    دانلود فیلم
                  </button>
                  <button className="xs:h-8 xs:text-[10px] xs:w-24 xs:gap-x-1 bg-white w-36 lg:w-28 lg:text-[12px] xl:w-[145px] h-12 rounded-lg border flex items-center justify-center gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xs:w-4 w-5 md:w-5 xl:w-6 lg:w-5 "
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"
                        fill="#000"
                      ></path>
                    </svg>
                    علاقه مندی ها
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <InternalDescriptionMultiMedia />
        <PointOfView
          backGround="bg-neutral-100"
          paddingTopButtom="py-20"
        />
      </div>
    </>
  );
}
