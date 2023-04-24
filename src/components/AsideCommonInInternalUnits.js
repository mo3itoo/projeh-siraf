import React from 'react'

export default function AsideCommonInInternalUnits({title}) {
  return (
    <div className='w-full bg-white border h-max border-stone-300 rounded-xl flex flex-col p-4 gap-y-4'>
   <div className='flex items-center pb-4 '>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-10 fill-cyan-700' viewBox="0 0 24 24" ><path d="M5 11V13H19V11H5Z"></path></svg>
          <h3 className='xs:text-base text-xl font-bold '>{title}</h3>
          </div>
          <button className='w-full h-20  flex justify-start items-center mb-4 xs:text-[12px]'>
            <div className='w-3/12  h-full'>
              <img src="/assets/images/album-photo/1.jpg" alt="image" className='w-full h-full'/>
            </div>
            <div className='w-9/12 flex  flex-col items-start gap-y-3 pr-3'>
            <p className='font-bold'>درباره بصیرت مهدوی بیشتر بدانیم</p>
            <div className="flex items-center justify-center gap-x-1 opacity-70">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-5 ' ><path fill="none" d="M0 0h24v24H0z"/><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z"/></svg>
                     <p className='xs:text-ssm'>29/04/1401</p>
                     </div>
            </div>
          </button>

          <button className='w-full h-20  flex justify-start items-center mb-4 xs:text-[12px]'>
            <div className='w-3/12  h-full'>
              <img src="/assets/images/album-photo/1.jpg" alt="image" className='w-full h-full'/>
            </div>
            <div className='w-9/12 flex  flex-col items-start gap-y-3 pr-3'>
            <p className='font-bold'>درباره بصیرت مهدوی بیشتر بدانیم</p>
            <div className="flex items-center justify-center gap-x-1 opacity-70">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-5 ' ><path fill="none" d="M0 0h24v24H0z"/><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z"/></svg>
                     <p className='xs:text-ssm'>29/04/1401</p>
                     </div>
            </div>
          </button>
   </div>
  )
}
