import React,{useState , useEffect} from 'react'
import Loading from './loading'
import {lecturePhoto} from "../../src/db.json"

export default function Suggestion() {
    

    const [suggestionPhoto , setSuggestionPhoto] = useState(null)
    useEffect(()=>{
        setSuggestionPhoto(lecturePhoto)
    },[])

    if(!suggestionPhoto){
        return <Loading/>
    }

  return (
<<<<<<< HEAD
    <div className='flex flex-col items-center justify-center w-10/12  mx-auto h-max gap-y-14 my-24'>
        <h2 className='text-xl font-bold'>مطالب مناسب شما</h2>
        <div className='w-full h-max  flex justify-between  items-center flex-wrap gap-y-6'>
           {suggestionPhoto.map(item=>
             <div key={item.id} className='w-400px  h-full '>
             <div className='w-full h-80'>
=======
    <div className='flex flex-col items-center justify-center container px-2  mx-auto h-max gap-y-14 xs:my-12 my-24 '>
        <h2 className='text-xl font-bold'>مطالب مناسب شما</h2>
        <div className='w-full h-max  flex justify-center lg:justify-between  items-center flex-wrap gap-y-6'>
           {suggestionPhoto.map(item=>
             <div key={item.id} className='w-400px  h-full  '>
             <div className='w-full xs:h-56 h-72  sm:h-80'>
>>>>>>> mo3ito
             <img src={item.src} alt={item.alt} className='w-full h-full '/>
             </div>
             <div className='w-full h-40  flex flex-col justify-between p-2 '>

<<<<<<< HEAD
             <div className="flex items-center gap-x-2 ">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
                     ویدیو استاد
                 </div>

                 <p className='text-sm text-center'>مطالب این وب گاه با هدف روشنگری برای شما تهیه و تدوین شده</p>

                   <div className="flex justify-between items-center opacity-70 text-sm">
                     
                     <div className="flex items-center justify-center gap-x-1">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z"/></svg>
                     <p>29/04/1401</p>
=======
             <div className="flex items-center gap-x-2  ">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-6 xs:w-5' ><path fill="none" d="M0 0h24v24H0z"/><path d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
                    <p className='xs:text-sm'> ویدیو استاد</p>
                 </div>

                 <p className='xs:text-xsm text-sm text-right'>مطالب این وب گاه با هدف روشنگری برای شما تهیه و تدوین شده</p>

                   <div className="flex  justify-between items-center opacity-70 xs:text-xxxsm text-sm">
                     
                     <div className="flex items-center justify-center gap-x-1">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='xs:w-3 w-5' ><path fill="none" d="M0 0h24v24H0z"/><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z"/></svg>
                     <p className='xs:text-ssm'>29/04/1401</p>
>>>>>>> mo3ito
                     </div>
                     
 
                     <div className="flex items-center justify-center gap-x-1">
<<<<<<< HEAD
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5zM19 20v-3H6.5a1.5 1.5 0 0 0 0 3H19zM5 15.337A3.486 3.486 0 0 1 6.5 15H19V4H6a1 1 0 0 0-1 1v10.337z"/></svg>
=======
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='xs:w-3 w-5'><path fill="none" d="M0 0h24v24H0z"/><path d="M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5zM19 20v-3H6.5a1.5 1.5 0 0 0 0 3H19zM5 15.337A3.486 3.486 0 0 1 6.5 15H19V4H6a1 1 0 0 0-1 1v10.337z"/></svg>
>>>>>>> mo3ito
                     <p>مهدویت</p>
                     </div>
 
                     <div className="flex items-center justify-center gap-x-1">
<<<<<<< HEAD
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"/></svg>
=======
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='xs:w-3 w-5'><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"/></svg>
>>>>>>> mo3ito
                     <p>۱ ساعت و ۱۰ دقیقه</p>
                     </div>
 
                     
 
 
 
                     </div>

             </div>
             
            
         </div>

            )} 
           
        </div>
      
    </div>
  )
}
