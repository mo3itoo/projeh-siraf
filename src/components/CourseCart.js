import React from 'react'
import Link from 'next/link'
import Loading from './loading'
export default function CourseCart({data}) {
  
    if(!data){
        return <Loading/>
    }
  return (

    <div className=" w-9/12 h-full  flex flex-col  items-center  md:translate-x-0 gap-y-4 ">
       
        <div className='  w-full 2xl:w-10/12 text-sm md:text-base justify-center lg:w-11/12 lg:justify-start lg:px-2 xl:w-full xl:px-0 xl:justify-start h-max border-b pb-3 flex  items-end  gap-x-1 md:gap-x-4 lg:gap-x-8  '>
         <div className=' w-26 flex items-center justify-center gap-x-1 border-l pl-3 sm:pl-5'>
         <svg xmlns="http://www.w3.org/2000/svg" className='w-4 md:w-6' viewBox="0 0 24 24" ><path d="M20 4V16H23L19 21L15 16H18V4H20ZM12 18V20H3V18H12ZM14 11V13H3V11H14ZM14 4V6H3V4H14Z" fill="#000"></path></svg>
         <button className=''>مرتب سازی </button>
        </div>  
        <button className='text-cyan-600  w-16 md:w-20'>مرتبط ترین</button> 
        <button className='w-20 '>پربازدیدترین</button>
        <button className='w-16 '>جدیدترین</button>
        
        </div>
        
          <div  className="w-full h-11/12  flex  flex-wrap justify-end items-center md:justify-center ">
            {data.map((item) => (
              <Link href={`units/${item.id}`}
                key={item.id}
                className="w-[315px] h-80 hover:bg-white border border-stone-300  p-3 cursor-pointer"
                
              >
                <div className="w-full h-36 bg-gray-200">
                  <img
                    src={item.coverImage}
                    alt={item.alt}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col h-44 justify-around pr-4">
                  <div>
                    <p>{item.title}</p>
                  </div>

                  <p className="opacity-70">مطالب این وبگاه با هدف ...</p>
                  <div className="flex gap-x-8 opacity-70">
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
                      <p>{item.publishAt}</p>
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
              </Link>
            ))}
          </div>
          <button className="w-32 h-8 bg-neutral-200 rounded">بیشتر</button>
        </div>
  )
}
