import React,{useState} from 'react'

export default function VideoForInternalUnits({dataForVideo}) {
    const [isShowDownloadButtons , setIsShowDownloadButtons]=useState(false)

    const downloadFileVideo = (dataLink)=>{
        window.location.href = dataLink
    }
  return (
    <div  className='w-full h-max   flex flex-col xs:gap-y-1 gap-y-2 sm:gap-y-4 mt-6 lg:mt-0 rounded-xl '>
    <div  className='w-full xs:h-[200px] h-[300px] sm:h-[420px]'> 
      <video className='w-full h-full' src={dataForVideo.items[0].path} controls></video>
    </div>
    <div className='w-full h-max  border border-stone-300 flex flex-col mt-2 mb-8 gap-y-4 xs:text-[10px] xs:p-2  p-4 rounded-xl'>
    <div className='w-full h-max   flex flex-col '>
    <button onClick={()=>setIsShowDownloadButtons(prev=> !prev)}  className='w-full h-max  flex justify-between px-4  '>
      <div className='w-1/2  h-10 flex items-center gap-x-2'>
      <svg xmlns="http://www.w3.org/2000/svg" className='xs:w-3 w-6 fill-black' viewBox="0 0 24 24"><path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path></svg>
      <p className='xs:text-[10px] text-base'>دانلود این ویدیو</p>
      </div>
      
      <div className='w-1/2  h-10 flex justify-end'>
     { !isShowDownloadButtons && <svg xmlns="http://www.w3.org/2000/svg" className='xs:w-3 w-6 fill-black' viewBox="0 0 24 24"><path d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"></path></svg>}
     { isShowDownloadButtons && <svg xmlns="http://www.w3.org/2000/svg" className='xs:w-3 w-6 fill-black' viewBox="0 0 24 24"><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path></svg> }
      </div>
    
    </button>
    { isShowDownloadButtons &&   <div className='w-full flex flex-col h-max gap-y-4 pt-5'>
      <div className='flex justify-between items-center px-4 h-12 border border-stone-300 rounded-xl'>
        <p>کیفیت بالا</p>
        <p>حجم:۲۰ مگابایت</p>
        <button value="download" onClick={()=>downloadFileVideo(dataForVideo.items[0].path)} className='w-max px-2 text-white bg-cyan-600 h-8 rounded-md'>دانلود</button>
      </div>
      <div className='flex justify-between items-center px-4 h-12 border border-stone-300 rounded-xl'>
        <p>کیفیت متوسط</p>
        <p>حجم:۲۰ مگابایت</p>
        <button className='w-max px-2 text-white bg-cyan-600 h-8 rounded-md'>دانلود</button>
      </div>

    </div>}
    </div>
    </div>
  </div>

  )
}
