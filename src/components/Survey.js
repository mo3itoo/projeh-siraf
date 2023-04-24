import React from 'react'

export default function Survey() {
  return (
    <>
    <div className="flex xs:flex-col mt-16  flex-col container  md:flex-row  gap-x-4  h-max  mx-auto  gap-y-4">
<div className="xs:w-full w-full md:w-1/3 py-4 sm:h-28 bg-red-100  border border-red-500 rounded-md  flex items-center  cursor-pointer p-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="fill-red-700  ml-2 mb-6 "
    viewBox="0 0 24 24"
    width="40"
    height="40"
  >
    <path fill="none" d="M0 0L24 0 24 24 0 24z" />
    <path d="M17 2v2h3.007c.548 0 .993.445.993.993v16.014c0 .548-.445.993-.993.993H3.993C3.445 22 3 21.555 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7V2h10zM7 6H5v14h14V6h-2v2H7V6zm2 10v2H7v-2h2zm0-3v2H7v-2h2zm0-3v2H7v-2h2zm6-6H9v2h6V4z" />
  </svg>
  <div className="flex flex-col gap-y-4 justify-center items-start ">
    <p className=" xs:text-ssm md:text-sm lg:text-lg font-bold text-red-600">
      شرکت در نظرسنجی خانواده
    </p>
    <p className="xs:text-xxsm md:text-ssm">
      مطالب این وبلاگ با هدف روشنگری در ...
    </p>
  </div>
</div>
<div className="xs:w-full w-full md:w-1/3 py-4 sm:h-28 bg-fuchsia-700 border  rounded-md  flex items-center cursor-pointer  p-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="fill-white mb-6 ml-2"
    viewBox="0 0 24 24"
    width="40"
    height="40"
  >
    <path fill="none" d="M0 0L24 0 24 24 0 24z" />
    <path d="M17 2v2h3.007c.548 0 .993.445.993.993v16.014c0 .548-.445.993-.993.993H3.993C3.445 22 3 21.555 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7V2h10zM7 6H5v14h14V6h-2v2H7V6zm2 10v2H7v-2h2zm0-3v2H7v-2h2zm0-3v2H7v-2h2zm6-6H9v2h6V4z" />
  </svg>
  <div className="flex flex-col justify-center items-start gap-y-4 ">
    <p className="text-lg xs:text-ssm md:text-sm font-bold text-white lg:text-lg ">
      ثبت نام دوره مهدویت
    </p>
    <p className="xs:text-xxsm text-white md:text-ssm text-sm">
      مطالب این وبلاگ با هدف روشنگری در ...
    </p>
  </div>
</div>
<div
  dir="rtl"
  className="xs:w-full  w-full md:w-1/3 py-4 sm:h-28 bg-green-200 border-green-500 rounded-md border flex items-center cursor-pointer  p-2"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="fill-green-800 mb-6 ml-2"
    viewBox="0 0 24 24"
    width="40"
    height="40"
  >
    <path fill="none" d="M0 0L24 0 24 24 0 24z" />
    <path d="M17 2v2h3.007c.548 0 .993.445.993.993v16.014c0 .548-.445.993-.993.993H3.993C3.445 22 3 21.555 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7V2h10zM7 6H5v14h14V6h-2v2H7V6zm2 10v2H7v-2h2zm0-3v2H7v-2h2zm0-3v2H7v-2h2zm6-6H9v2h6V4z" />
  </svg>
  <div className="flex flex-col justify-center items-start gap-y-4 ">
    <p className="xs:text-tsm text-lg md:text-sm font-bold text-green-700 lg:text-lg ">
      شرکت در نظرسنجی خانواده
    </p>
    <p className="xs:text-xxsm text-black md:text-ssm">
      مطالب این وبلاگ با هدف روشنگری در ...
    </p>
  </div>
</div>
</div>
</>
  )
}
