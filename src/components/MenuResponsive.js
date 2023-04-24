import React from 'react'
import AccordionForUnits from './AccordionForUnits'
import Link from 'next/link'


export default function MenuResponsive() {

  return (
    <div className='xs:w-64 w-96 z-50 bg-stone-100 py-3 pb-10 h-[580px] overflow-auto absolute right-4 top-[50px] flex flex-col items-start '>
    <div className=' mx-auto w-11/12 flex items-center justify-start  '>
    <Link href="/">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className='w-[80px] '
    
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z" />
  </svg>
  </Link>
    </div>
    <ul className=' border-y   py-6 w-11/12 mx-auto mt-3 mb-8 flex items-start justify-center gap-y-10 flex-col'>
      <li className='flex gap-x-2'> 
      <svg xmlns="http://www.w3.org/2000/svg" className='ml-1' viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/></svg>
        فضای مجازی</li>
      <li className='flex gap-x-2'>
      <svg xmlns="http://www.w3.org/2000/svg" className='ml-1' viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 13c-1.678 0-3.249.46-4.593 1.259A14.984 14.984 0 0 1 18.147 19H20v-6zm-3.996 6C14.044 14.302 9.408 11 4 11v8h12.004zM4 9c3.83 0 7.323 1.435 9.974 3.796A10.949 10.949 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v4zm14-8v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
        گالری تصاویر</li>
      <li className='flex gap-x-2'>
      <svg xmlns="http://www.w3.org/2000/svg" className='ml-1' viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10.622 8.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332z"/></svg>
        آرشیو کلیپ ها</li>
      <Link href="/multimedia"  className='flex gap-x-2'>
      <svg xmlns="http://www.w3.org/2000/svg" className='ml-1' viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11z"/></svg>
        پنل چند رسانه ای</Link>
        <Link  href="/contactUs" className='flex gap-x-2'>
      <svg xmlns="http://www.w3.org/2000/svg" className='ml-1' viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11z"/></svg>
           تماس با ما</Link>
    </ul>
    <div className=' w-11/12 h-max mx-auto flex flex-col '>
      <div className='flex gap-x-2 items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M21 4H7C5.89543 4 5 4.89543 5 6C5 7.10457 5.89543 8 7 8H21V21C21 21.5523 20.5523 22 20 22H7C4.79086 22 3 20.2091 3 18V6C3 3.79086 4.79086 2 7 2H20C20.5523 2 21 2.44772 21 3V4ZM5 18C5 19.1046 5.89543 20 7 20H19V10H7C6.27143 10 5.58835 9.80521 5 9.46487V18ZM20 7H7C6.44772 7 6 6.55228 6 6C6 5.44772 6.44772 5 7 5H20V7Z" fill="#000"></path></svg>
      <p className='text-lg font-bold'>واحدها</p>
      </div>
      <AccordionForUnits/>
      <AccordionForUnits/>
      <AccordionForUnits/>
    
    </div>
 

  </div>
  )
}
