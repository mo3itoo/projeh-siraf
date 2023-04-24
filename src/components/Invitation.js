import React from 'react'
// import {HiOutlineSpeakerphone} from "react-icons/hi"
// import {BiUserPlus} from "react-icons/bi"
// import SocialMediaIcons from './socialMediaIcons'

export default function Invitation() {
  return (
    <div className='xs:py-10 w-full h-max py-20 bg-neutral-100 mx-auto my-6 flex items-center justify-center '>
      <div className='container xs:px-4 px-2  flex items-center justify-center flex-wrap gap-y-3 gap-x-10'>
        
      <div className='xs:w-full xs:h-28  h-44 w-full pr-6 md:w-[38rem]  xs:mx-1 md:h-56 bg-gradient-to-l from-yellow-500 grow-0  to-yellow-400  rounded-2xl flex justify-center items-center'>
         
         <div className=' w-20 h-20 translate-x-6  flex items-center justify-center '>
             {/* <HiOutlineSpeakerphone style={{color:"white"}} className='text-7xl xs:text-6xl xs:pr-3'/> */}
             <svg xmlns="http://www.w3.org/2000/svg" className='xs:w-12 fill-white w-30 xs:-translate-x-2' viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19.39 3.161l1.413 1.414-2.475 2.475 2.475 2.475L18.328 12l2.475 2.476-2.475 2.475 2.475 2.475-1.414 1.414-3.889-3.89 2.475-2.474L15.5 12l2.475-2.475L15.5 7.05l3.89-3.889zm-6.503.578a.5.5 0 0 1 .113.316v15.89a.5.5 0 0 1-.817.387L6.89 15.999 3 16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .704.07zM11 7.22L7.603 9.999H4V14l3.603-.001L11 16.779V7.22z"/></svg>
         </div>
         <div className='xs:gap-y-3 gap-y-2 flex flex-col  w-80 items-start md:gap-y-4'>
             <p  className='xs:text-sm  xs:pt-5 text-lg text-center font-bold text-white md:text-2xl'>عضویت در فضای مجازی</p>
             <p className='xs:text-xsm text-lg text-white' >جدیدترین اخبار در فضای مجازی</p>
            
            <div className='xs:-translate-y-4  flex  w-9/12 xs:h-8 xs:w-32  justify-around h-12 items-center rounded-md mt-4 fill-white bg-yellow-600'>
            <svg className='cursor-pointer xs:w-6 w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="none" d="M0 0h24v24H0z"/><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l-2.498-.779c-.54-.165-.543-.537.121-.804l9.733-3.76c.565-.23.885.061.702.79l-1.657 7.82c-.116.557-.451.69-.916.433l-2.551-1.888-1.189 1.148c-.122.118-.221.219-.409.244-.187.026-.341-.03-.454-.34l-.87-2.871-.012.008z"/></svg>
            <svg className='cursor-pointer xs:w-6 w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="none" d="M0 0h24v24H0z"/><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm2.5 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-1 1h2v7.5h-2V10zm5.5.43c.584-.565 1.266-.93 2-.93 2.071 0 3.5 1.679 3.5 3.75v4.25h-2v-4.25a1.75 1.75 0 0 0-3.5 0v4.25h-2V10h2v.43z"/></svg>
            <svg className='cursor-pointer xs:w-6 w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="none" d="M0 0h24v24H0z"/><path d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z"/></svg>
            <svg className='cursor-pointer xs:w-6 w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="none" d="M0 0h24v24H0z"/><path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"/></svg>
            </div>
         </div>
     </div>

      <div className='xs:w-full xs:h-28 w-full h-44 md:w-[38rem] md:h-56 bg-gradient-to-l pr-6 from-blue-500 grow-0  to-cyan-400  rounded-2xl flex justify-center items-center'>
         
            <div className='  w-20 h-20  translate-x-6 flex items-center justify-center'>
               
                <svg xmlns="http://www.w3.org/2000/svg" className='fill-white w-30 xs:w-12 xs:-translate-x-2' viewBox="0 0 24 24" ><path fill="none" d="M0 0h24v24H0z"/><path d="M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6 6v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"/></svg>
            </div>
            <div className=' xs:gap-y-0 flex flex-col xs:h-10/12 xs:gap-y-3  w-80 gap-y-4   '>
                <p  className='xs:text-sm xs:pt-5 text-lg font-bold text-white md:text-2xl'>دعوت از بهترین اساتید</p>
                <p className='xs:text-xsm text-lg text-white' > از بهترین اساتید ما</p>
                
                   <button className='xs:text-sm xs:w-28 xs:h-8 xs:-translate-y-3 text-lg text-white bg-cyan-700 w-40 h-12 rounded-md mt-2'>دعوت از اساتید</button>
            </div>
        </div>
       
      </div>
    </div>
  )
}