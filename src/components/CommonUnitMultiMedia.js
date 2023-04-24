import React from 'react'
import CourseCart from './CourseCart'
import AccordionForMultiMedia from './AccordionForMultiMedia'

export default function CommonUnitMultiMedia({datasForCourseCart}) {
  return (
    <div className="hidden  mt-16  sm:flex  md:flex justify-evenly container sm:px-2 mx-auto sm:justify-between sm:gap-x-0 gap-x-2 ">
    <aside className="w-80 h-full   md:mr-0 md:translate-x-0 flex flex-col  items-start justify-start gap-y-6 ">
      <div className="w-282px  border border-stone-300 h-36 bg-white rounded-xl flex flex-col items-center justify-center gap-y-3">
        <p className="text-right pl-6 font-bold">
          اشتراک گذاری در فضای مجازی
        </p>
        <div className="xs:-translate-y-4  flex  w-11/12 xs:h-8 xs:w-32  justify-around h-12 items-center rounded-md  translate-y-4 fill-white opacity-60">
          <svg
            className="cursor-pointer fill-black xs:w-6 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l-2.498-.779c-.54-.165-.543-.537.121-.804l9.733-3.76c.565-.23.885.061.702.79l-1.657 7.82c-.116.557-.451.69-.916.433l-2.551-1.888-1.189 1.148c-.122.118-.221.219-.409.244-.187.026-.341-.03-.454-.34l-.87-2.871-.012.008z" />
          </svg>
          <svg
            className="cursor-pointer fill-black xs:w-6 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm2.5 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-1 1h2v7.5h-2V10zm5.5.43c.584-.565 1.266-.93 2-.93 2.071 0 3.5 1.679 3.5 3.75v4.25h-2v-4.25a1.75 1.75 0 0 0-3.5 0v4.25h-2V10h2v.43z" />
          </svg>
          <svg
            className="cursor-pointer fill-black xs:w-6 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z" />
          </svg>
          <svg
            className="cursor-pointer fill-black xs:w-6 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" />
          </svg>
        </div>
      </div>
      <div className="w-282px h-370px  border border-stone-300 rounded-xl bg-white">
        <div className="w-full h-20  border-b border-stone-300 flex items-center justify-start pr-6 gap-x-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              d="M20 4V16H23L19 21L15 16H18V4H20ZM12 18V20H3V18H12ZM14 11V13H3V11H14ZM14 4V6H3V4H14Z"
              fill="#000"
            ></path>
          </svg>
          <p>فیلتر</p>
        </div>
        <div className="w-full h-64 translate-y-4 flex flex-col justify-around pr-4 font-bold">
          <div className="flex  items-center justify-satrt  gap-x-2">
            <input type="checkbox" className="w-6 h-6 " />
            <p>همه رسانه ها</p>
          </div>
          <div className="flex items-center justify-satrt  gap-x-2">
            <input type="checkbox" className="w-6 h-6 " />
            <p>صداها</p>
          </div>
          <div className="flex items-center justify-satrt gap-x-2">
            <input type="checkbox" className="w-6 h-6 " />
            <p>ویدیوها</p>
          </div>
          <div className="flex items-center justify-satrt gap-x-2">
            <input type="checkbox" className="w-6 h-6 " />
            <p>علاقه مندی ها</p>
          </div>
        </div>
      </div>
      <div className="w-282px border border-stone-300 h-36 bg-white rounded-xl flex flex-col items-center justify-center gap-y-4">
        <p className="text-right  w-10/12 font-bold">
          جستجو بر اساس کلید واژه
        </p>
        <div className="w-10/12 h-12  flex items-center border border-stone-300 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 opacity-60"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
              fill="#000"
            ></path>
          </svg>
          <input
            placeholder="جستجو کلمه"
            type="text"
            className="w-11/12 h-full outline-0 pr-2 rounded-lg "
          />
        </div>
      </div>

      <div className="w-282px border border-stone-300 h-48 bg-white rounded-xl flex flex-col items-center justify-center  ">
        <p className="text-right mt-6 w-full pr-7 font-bold flex items-center  ">
          آرشیو بر اساس بازه زمانی
        </p>

        <div className="flex flex-col items-center justify-center  w-full h-full gap-y-2  ">
          <div className="flex items-cenetr h-12 justify-center">
            <p className="pl-4 flex items-center justify-center opacity-60">
              از تاریخ
            </p>
            <input
              type="text"
              className="border border-stone-300 h-full w-8/12 rounded-lg outline-0 pr-2"
            />
          </div>
          <div className="flex items-cenetr justify-center h-12 ">
            <p className="pl-4 flex items-center justify-center opacity-60">
              تا تاریخ
            </p>
            <input
              type="text"
              className="border border-stone-300 h-full w-8/12 rounded-lg outline-0 pr-2"
            />
          </div>
        </div>
      </div>
      <div className="w-282px  h-max border border-stone-300 rounded-xl bg-white ">
        <div className="w-full h-20  border-b border-stone-300 flex items-center justify-start pr-6 gap-x-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              d="M20 4V16H23L19 21L15 16H18V4H20ZM12 18V20H3V18H12ZM14 11V13H3V11H14ZM14 4V6H3V4H14Z"
              fill="#000"
            ></path>
          </svg>
          <p className="font-bold">آرشیو بر اساس موضوع</p>
        </div>
    <AccordionForMultiMedia/>
    <AccordionForMultiMedia/>
    <AccordionForMultiMedia/>

      </div>
    </aside>

    <CourseCart data={datasForCourseCart}/>
  </div>
  )
}
