import {useState} from 'react'

export default function AccordionForUnits() {
    const[isShowAccordion , setIsShowAccordion]=useState(false)
  return (
    <div className='w-full h-max flex flex-col items-end gap-y-5   mt-6 '>
    <div onClick={()=>setIsShowAccordion(prev=>!prev)} className='w-full flex justify-between items-center '>
      <div className='flex items-center gap-x-2'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M2 4.00087C2 3.44811 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44463 22 4.00087V17.9991C22 18.5519 21.5447 19 21.0082 19H2.9918C2.44405 19 2 18.5554 2 17.9991V4.00087ZM4 5V17H20V5H4ZM5 20H19V22H5V20Z" fill="#000"></path></svg>
      <p className='font-bold '>مهدویت</p>
      </div>
      <div className='flex items-cenetr '>
       {!isShowAccordion && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z" fill="#000"></path></svg>}
        { isShowAccordion && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" fill="#000"></path></svg>}
      </div>
     
    </div>
   {isShowAccordion && <div className='flex flex-col gap-y-4 w-11/12 opacity-70 pb-4 border-b border-stone-300'>
    <p className=' mb-4'>تمام دوره های مهدویت</p>
    <ul className='w-10/12  h-max flex flex-col justify-center gap-y-4'>
      <li className='cursor-pointer'>یادداشت کارشناسی</li>
      <li className='cursor-pointer'>عکس نوشت</li>
      <li className='cursor-pointer'>اخبار مهم</li>
      <li className='cursor-pointer'>حدیث</li>
    </ul>
    </div>}
   
</div>
  )
}
