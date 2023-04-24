import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <div className='w-full bg-neutral-100 h-max py-12'>
      <div className='w-full bg-white pb-16'>
        <div className='container mx-auto px-2 pt-10'>
            <div className='w-full  h-max flex flex-col items-center justify-center  '>
            <div className='flex flex-col gap-y-3  justify-center items-center mb-8 '>
              <div className='flex items-center justify-center'> 
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 fill-cyan-700" viewBox="0 0 24 24"><path d="M5 11V13H19V11H5Z"></path></svg>
              <h1 className=' text-xl'>لیست اساتید</h1>
              </div>
              <p>لیست اساتید</p>
            </div>
            </div>
            <div className='w-full h-max  flex justify-center lg:justify-between items-center flex-wrap gap-y-10 xs:text-sm'>
              <div className='w-[400px] h-[350px] border rounded-xl border-stone-300 items-center justify-between flex flex-col p-4'>
              <div className='w-1/3 h-[100px] bg flex items-center justify-center '>
              <img src="/assets/images/album-photo/1.jpg" alt="" className='w-full h-full' />
              </div>
              <p>استاد علی</p>
              <p className='opacity-70'>دکترای اقتصاد بین الملل</p>
              <p className=''>مقاطع تحصیلی یا مرحله آموزشی یا پایه ی تحصیلی به اجزای تحصیلات رسمی گفته میشود که آموزش پیش ...</p>
              <div className='w-full flex items-center justify-between'>

              <div className='flex items-center justify-center gap-x-2 '>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 fill-cyan-600' viewBox="0 0 24 24"><path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path></svg>
              <Link href="/invite-teacher" className='text-cyan-600'>
              دعوت از اساتید
              </Link>
              
              </div>

              <div className='flex items-center justify-center gap-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 fill-cyan-600' viewBox="0 0 24 24"><path d="M20.0049 2C21.1068 2 22 2.89821 22 3.9908V20.0092C22 21.1087 21.1074 22 20.0049 22H4V18H2V16H4V13H2V11H4V8H2V6H4V2H20.0049ZM8 4H6V20H8V4ZM20 4H10V20H20V4Z"></path></svg>
              <Link href="/invite-teacher/teacher-invitation-frm" className='text-cyan-600'>درخواست جلسه حضوری</Link>
              
              </div>
              </div>
              </div>

              <div className='w-[400px] h-[350px] border  rounded-xl border-stone-300 items-center justify-between flex flex-col p-4'>
              <div className='w-1/3 h-[100px] bg flex items-center justify-center '>
              <img src="/assets/images/album-photo/1.jpg" alt="" className='w-full h-full' />
              </div>
              <p>استاد علی</p>
              <p className='opacity-70'>دکترای اقتصاد بین الملل</p>
              <p className=''>مقاطع تحصیلی یا مرحله آموزشی یا پایه ی تحصیلی به اجزای تحصیلات رسمی گفته میشود که آموزش پیش ...</p>
              <div className='w-full flex items-center justify-between'>

              <div className='flex items-center justify-center gap-x-2 '>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 fill-cyan-600' viewBox="0 0 24 24"><path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path></svg>
              <Link href="/invite-teacher" className='text-cyan-600'>
              دعوت از اساتید
              </Link>
              
              </div>

              <div className='flex items-center justify-center gap-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 fill-cyan-600' viewBox="0 0 24 24"><path d="M20.0049 2C21.1068 2 22 2.89821 22 3.9908V20.0092C22 21.1087 21.1074 22 20.0049 22H4V18H2V16H4V13H2V11H4V8H2V6H4V2H20.0049ZM8 4H6V20H8V4ZM20 4H10V20H20V4Z"></path></svg>
              <Link href="/invite-teacher/teacher-invitation-frm" className='text-cyan-600'>درخواست جلسه حضوری</Link>
              
              </div>
              </div>
              </div>

              <div className='w-[400px] h-[350px] border  rounded-xl border-stone-300 items-center justify-between flex flex-col p-4'>
              <div className='w-1/3 h-[100px] bg flex items-center justify-center '>
              <img src="/assets/images/album-photo/1.jpg" alt="" className='w-full h-full' />
              </div>
              <p>استاد علی</p>
              <p className='opacity-70'>دکترای اقتصاد بین الملل</p>
              <p className=''>مقاطع تحصیلی یا مرحله آموزشی یا پایه ی تحصیلی به اجزای تحصیلات رسمی گفته میشود که آموزش پیش ...</p>
              <div className='w-full flex items-center justify-between'>

              <div className='flex items-center justify-center gap-x-2 '>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 fill-cyan-600' viewBox="0 0 24 24"><path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path></svg>
              <Link href="/invite-teacher" className='text-cyan-600'>
              دعوت از اساتید
              </Link>
              
              </div>

              <div className='flex items-center justify-center gap-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 fill-cyan-600' viewBox="0 0 24 24"><path d="M20.0049 2C21.1068 2 22 2.89821 22 3.9908V20.0092C22 21.1087 21.1074 22 20.0049 22H4V18H2V16H4V13H2V11H4V8H2V6H4V2H20.0049ZM8 4H6V20H8V4ZM20 4H10V20H20V4Z"></path></svg>
              <Link href="/invite-teacher/teacher-invitation-frm" className='text-cyan-600'>درخواست جلسه حضوری</Link>
              
              </div>
              </div>
              </div>
             

            
            </div>
        </div>
        </div>
    </div>
  )
}
