import React from 'react'


export default function MorSpeech({nextButtonHandler , prevButtonHandler , icons , underline , content , colorIcon , colorText , classMore , moreHandler,addHandler}) {
  
  return (
    <div  className='flex flex-col justify-center   w-full h-max '>
      <div className='flex justify-between items-center gap-x-0   md:px-0 xs:gap-x-6 '>
        <p className={`${colorText} font-bold xs:text-ssm`}>{content}</p>

        {icons && <div  className='flex items-center justify-center w-max gap-x-1 h-8 bg-gray-900 ml-96 text-xsm text-white  px-1 rounded-sm'>
         
        <button className='flex items-center justify-center gap-x-1 opacity-70'> 
        <p>youtube</p>
        <svg xmlns="http://www.w3.org/2000/svg" className='fill-white' viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M19.606 6.995c-.076-.298-.292-.523-.539-.592C18.63 6.28 16.5 6 12 6s-6.628.28-7.069.403c-.244.068-.46.293-.537.592C4.285 7.419 4 9.196 4 12s.285 4.58.394 5.006c.076.297.292.522.538.59C5.372 17.72 7.5 18 12 18s6.629-.28 7.069-.403c.244-.068.46-.293.537-.592C19.715 16.581 20 14.8 20 12s-.285-4.58-.394-5.005zm1.937-.497C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
            </button>
        <button className='flex items-center justify-center gap-x-1 bg-slate-700 p-1 rounded-md'> 
        <p>twitter</p>
          <svg xmlns="http://www.w3.org/2000/svg" className='fill-cyan-500' viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/></svg>
          
          </button>
        </div>}
        <div className='flex gap-x-2 '>
            <button onClick={()=>moreHandler} className={`text-${classMore} border border-${classMore} xs:w-12 font-bold text-sm rounded-md w-16 h-8`}>بیشتر</button>
            <button className='border rounded-md px-1' onClick={prevButtonHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" className={colorIcon} viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
            </button>
            <button className='border rounded-md px-1 ' onClick={nextButtonHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" className={colorIcon} viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/></svg>
            </button>
        </div>
      </div>
      {underline && <div className='bg-blue-200 h-0.5 w-full mt-3 bg-gradient-to-l from-blue-300 to-white'></div>}
    </div>
  )
}
