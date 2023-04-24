import {useState} from 'react'
import Link from 'next/link'

export default function MenuForUnits() {
    

  return (
    
    <div  className='container  px-2 rounded-b-xl absolute h-max  z-50 right-[1px]  top-8 '>
        <div  className='w-full  h-max rounded-b-lg  py-4 px-4 grid grid-cols-5 bg-stone-200'>
        <div className='ml-3 border-l border-stone-300'>
            <ul className='w-full h-full flex flex-col items-start gap-y-6 '>
                <li className='flex gap-x-2 cursor-pointer hover:text-cyan-700'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M2 4.00087C2 3.44811 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44463 22 4.00087V17.9991C22 18.5519 21.5447 19 21.0082 19H2.9918C2.44405 19 2 18.5554 2 17.9991V4.00087ZM4 5V17H20V5H4ZM5 20H19V22H5V20Z" fill="#000"></path></svg>
                مهدویت
                </li>
                <li className='flex gap-x-2 cursor-pointer hover:text-cyan-700'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M2 4.00087C2 3.44811 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44463 22 4.00087V17.9991C22 18.5519 21.5447 19 21.0082 19H2.9918C2.44405 19 2 18.5554 2 17.9991V4.00087ZM4 5V17H20V5H4ZM5 20H19V22H5V20Z" fill="#000"></path></svg>
                معماری و شهرسازی
                </li>
                <li className='flex gap-x-2 cursor-pointer hover:text-cyan-700'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M2 4.00087C2 3.44811 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44463 22 4.00087V17.9991C22 18.5519 21.5447 19 21.0082 19H2.9918C2.44405 19 2 18.5554 2 17.9991V4.00087ZM4 5V17H20V5H4ZM5 20H19V22H5V20Z" fill="#000"></path></svg>
                 سیاسی و دشمن شناسی
                </li>
                <li className='flex gap-x-2 cursor-pointer hover:text-cyan-700'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M2 4.00087C2 3.44811 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44463 22 4.00087V17.9991C22 18.5519 21.5447 19 21.0082 19H2.9918C2.44405 19 2 18.5554 2 17.9991V4.00087ZM4 5V17H20V5H4ZM5 20H19V22H5V20Z" fill="#000"></path></svg>
                 امنیت غذایی
                </li>
                <li className='flex gap-x-2 cursor-pointer hover:text-cyan-700'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M2 4.00087C2 3.44811 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44463 22 4.00087V17.9991C22 18.5519 21.5447 19 21.0082 19H2.9918C2.44405 19 2 18.5554 2 17.9991V4.00087ZM4 5V17H20V5H4ZM5 20H19V22H5V20Z" fill="#000"></path></svg>
                 موسیقی
                </li>
                <li className='flex gap-x-2 cursor-pointer hover:text-cyan-700'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M2 4.00087C2 3.44811 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44463 22 4.00087V17.9991C22 18.5519 21.5447 19 21.0082 19H2.9918C2.44405 19 2 18.5554 2 17.9991V4.00087ZM4 5V17H20V5H4ZM5 20H19V22H5V20Z" fill="#000"></path></svg>
                 اقتصاد
                </li>
                <li className='flex gap-x-2 cursor-pointer hover:text-cyan-700'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M2 4.00087C2 3.44811 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44463 22 4.00087V17.9991C22 18.5519 21.5447 19 21.0082 19H2.9918C2.44405 19 2 18.5554 2 17.9991V4.00087ZM4 5V17H20V5H4ZM5 20H19V22H5V20Z" fill="#000"></path></svg>
                فرق و ادیان
                </li>
                <li className='flex gap-x-2 cursor-pointer hover:text-cyan-700'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M2 4.00087C2 3.44811 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44463 22 4.00087V17.9991C22 18.5519 21.5447 19 21.0082 19H2.9918C2.44405 19 2 18.5554 2 17.9991V4.00087ZM4 5V17H20V5H4ZM5 20H19V22H5V20Z" fill="#000"></path></svg>
                آموزش و رسانه
                </li>
                <li className='flex gap-x-2 cursor-pointer hover:text-cyan-700'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M2 4.00087C2 3.44811 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44463 22 4.00087V17.9991C22 18.5519 21.5447 19 21.0082 19H2.9918C2.44405 19 2 18.5554 2 17.9991V4.00087ZM4 5V17H20V5H4ZM5 20H19V22H5V20Z" fill="#000"></path></svg>
                آموزش و رسانه
                </li>
                <li className='flex gap-x-2 cursor-pointer hover:text-cyan-700'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M2 4.00087C2 3.44811 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44463 22 4.00087V17.9991C22 18.5519 21.5447 19 21.0082 19H2.9918C2.44405 19 2 18.5554 2 17.9991V4.00087ZM4 5V17H20V5H4ZM5 20H19V22H5V20Z" fill="#000"></path></svg>
                آموزش و رسانه
                </li>
            </ul>
        </div>
        <div className=' flex flex-col'>

                <p className='text-[13px] opacity-70 flex items-center gap-x-2 h-[20px]'>
                    تمام دوره های واحد امنیت غذایی
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-4' ><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" ></path></svg>
                    </p>
                    <div className='w-full flex flex-col justify-between h-[380px] mt-5 '>
                    <div className='w-full h-max '>
                        <p className='text-[13px] flex font-bold gap-x-2 mb-4 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 fill-cyan-700' viewBox="0 0 24 24" ><path d="M5 11V13H19V11H5Z"></path></svg>    
                        واحد امنیت غذایی
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-4' ><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" ></path></svg>
                        </p>
                        <ul className='text-[12px] flex flex-col justify-center gap-y-5 opacity-70'>
                        <li className='cursor-pointer'>یادداشت کارشناسی</li>
                        <li className='cursor-pointer'>عکس نوشت</li>
                        <li className='cursor-pointer'>اخبار مهم</li>
                        <li className='cursor-pointer'>حدیث</li>
                        </ul>

                    </div>
                    <div className='w-full h-max mt-2'>
                    <p className='text-[13px] flex font-bold gap-x-2 mb-4 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 fill-cyan-700' viewBox="0 0 24 24" ><path d="M5 11V13H19V11H5Z"></path></svg>    
                        واحد امنیت غذایی
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-4' ><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" ></path></svg>
                        </p>
                        <ul className='text-[11px] flex flex-col justify-center gap-y-4 opacity-70'>
                        <li className='cursor-pointer'>یادداشت کارشناسی</li>
                        <li className='cursor-pointer'>عکس نوشت</li>
                        <li className='cursor-pointer'>اخبار مهم</li>
                        <li className='cursor-pointer'>حدیث</li>
                        </ul>

                    </div>
                    </div>
        </div>
        <div className=' flex flex-col'>

                
                    <div className='w-full flex flex-col justify-between h-[380px] mt-10  '>
                    <div className='w-full  h-max '>
                    <p className='text-[13px] flex font-bold gap-x-2 mb-4 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 fill-cyan-700' viewBox="0 0 24 24" ><path d="M5 11V13H19V11H5Z"></path></svg>    
                        واحد امنیت غذایی
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-4' ><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" ></path></svg>
                        </p>
                        <ul className='text-[12px] flex flex-col justify-center gap-y-5 opacity-70'>
                        <li className='cursor-pointer'>یادداشت کارشناسی</li>
                        <li className='cursor-pointer'>عکس نوشت</li>
                        <li className='cursor-pointer'>اخبار مهم</li>
                        <li className='cursor-pointer'>حدیث</li>
                        </ul>

                    </div>
                    <div className='w-full h-max mt-2'>
                    <p className='text-[13px] flex font-bold gap-x-2 mb-4 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 fill-cyan-700' viewBox="0 0 24 24" ><path d="M5 11V13H19V11H5Z"></path></svg>    
                        واحد امنیت غذایی
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-4' ><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" ></path></svg>
                        </p>
                        <ul className='text-[12px] flex flex-col justify-center gap-y-4 opacity-70'>
                        <li className='cursor-pointer'>یادداشت کارشناسی</li>
                        <li className='cursor-pointer'>عکس نوشت</li>
                        <li className='cursor-pointer'>اخبار مهم</li>
                        <li className='cursor-pointer'>حدیث</li>
                        </ul>

                    </div>
                    </div>
                  
               

                
               
                
            
        </div>
        <div className=' flex flex-col'>


    <div className='w-full flex flex-col justify-between h-[380px] mt-10 '>
    <div className='w-full  h-max '>
    <p className='text-[13px] flex font-bold gap-x-2 mb-4 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 fill-cyan-700' viewBox="0 0 24 24" ><path d="M5 11V13H19V11H5Z"></path></svg>    
                        واحد امنیت غذایی
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-4' ><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" ></path></svg>
                        </p>
        <ul className='text-[12px] flex flex-col justify-center gap-y-5 opacity-70'>
        <li className='cursor-pointer'>یادداشت کارشناسی</li>
        <li className='cursor-pointer'>عکس نوشت</li>
        <li className='cursor-pointer'>اخبار مهم</li>
        <li className='cursor-pointer'>حدیث</li>
        </ul>

    </div>
    <div className='w-full  h-max mt-2'>
    <p className='text-[13px] flex font-bold gap-x-2 mb-4 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 fill-cyan-700' viewBox="0 0 24 24" ><path d="M5 11V13H19V11H5Z"></path></svg>    
                        واحد امنیت غذایی
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-4' ><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" ></path></svg>
                        </p>
        <ul className='text-[12px] flex flex-col justify-center gap-y-4 opacity-70'>
        <li className='cursor-pointer'>یادداشت کارشناسی</li>
        <li className='cursor-pointer'>عکس نوشت</li>
        <li className='cursor-pointer'>اخبار مهم</li>
        <li className='cursor-pointer'>حدیث</li>
        </ul>

    </div>
    </div>
  






</div>
<div className=' flex flex-col'>


    <div className='w-full flex flex-col justify-between h-[380px]  mt-10'>
    <div className='w-full  h-max '>
    <p className='text-[13px] flex font-bold gap-x-2 mb-4 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 fill-cyan-700' viewBox="0 0 24 24" ><path d="M5 11V13H19V11H5Z"></path></svg>    
                        واحد امنیت غذایی
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-4' ><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" ></path></svg>
                        </p>
        <ul className='text-[12px] flex flex-col justify-center gap-y-5 opacity-70'>
        <li className='cursor-pointer'>یادداشت کارشناسی</li>
        <li className='cursor-pointer'>عکس نوشت</li>
        <li className='cursor-pointer'>اخبار مهم</li>
        <li className='cursor-pointer'>حدیث</li>
        </ul>

    </div>
    <div className='w-full  h-max mt-2'>
    <p className='text-[13px] flex font-bold gap-x-2 mb-4 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 fill-cyan-700' viewBox="0 0 24 24" ><path d="M5 11V13H19V11H5Z"></path></svg>    
                        واحد امنیت غذایی
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-4' ><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" ></path></svg>
                        </p>
        <ul className='text-[12px] flex flex-col justify-center gap-y-4 opacity-70'>
        <li className='cursor-pointer'>یادداشت کارشناسی</li>
        <li className='cursor-pointer'>عکس نوشت</li>
        <li className='cursor-pointer'>اخبار مهم</li>
        <li className='cursor-pointer'>حدیث</li>
        </ul>

    </div>
    </div>
</div>
</div>
    </div>

    
  )
}
