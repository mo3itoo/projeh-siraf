import React,{useReducer} from 'react'
import InputTextAreaForm from '@/components/InputTextAreaForm'

export default function ticket() {
    const initialState ={
        isShowNameActive:false,
        isShowEmailActive:false,
        isShowTextArea:false
    }
       
    

    const isActiveInputReducer=(state , action)=>{

        switch(action.type){

            case "ACTIV_INPUTNAME": {
                const newState= initialState
                newState.isShowNameActive=true
                
                return newState
            }

            case "ACTIVE_INPUTEMAIL":{
                const newState= initialState
                newState.isShowEmailActive=true
                
                return newState
            }

            case "ACTIVE_TEXTAREA":{
                const newState= initialState
                newState.isShowTextArea=true
                
                return newState
            }

            default : return state
        }

    }
   
    const [state , dispatch]=useReducer(isActiveInputReducer , initialState)
  return (
    <div className='w-full bg-neutral-100 h-max pt-14 pb-20 '>
        <div className='w-full lg:container mx-auto h-max px-2 '>
      <div className='w-full lg:bg-white  lg:border  lg:border-stone-300 rounded-xl py-8 px-6 h-max  flex flex-col'>


        <div className='w-full flex flex-col items-center gap-y-4 border-b border-stone-300 h-28 '>
        <div className='flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-10 fill-cyan-600' viewBox="0 0 24 24" ><path d="M5 11V13H19V11H5Z"></path></svg>
                    <h2 className='xs:text-base text-xl'>مشخصات محل برگزاری</h2>
                </div>
            <p className='xs:text-[12px] text-base'>لطفا پیش از ارسال ایمیل یا تماس تلفنی، ابتدا   <span className='text-cyan-600'>قوانین</span> را مشاهده کنید</p>
        </div>
        <form className='w-full h-max   flex flex-col  '>
    <div className='w-full  h-max flex flex-col gap-y-4 lg:flex-row items-center justify-center sm:gap-x-6 py-5' >
    <fieldset  className={`${state.isShowNameActive ? 'border-cyan-600' : 'border-stone-300 '} border-2 opacity-70 flex items-center justify-center text-[12px] xs:h-12 h-16  pr-3 rounded-xl w-full lg:w-1/2`}>
        <legend className=' xs:text-[12px] text-base px-2'>نام و نام خانوادگی</legend>
        <input  onFocus={()=>dispatch({type:"ACTIV_INPUTNAME"})} className='w-full outline-0 h-full rounded-xl bg-inherit' type="text" />
    </fieldset>

    <fieldset className={`${state.isShowEmailActive ? 'border-cyan-600' : 'border-stone-300'} border-2  opacity-70 flex items-center justify-center text-[12px] xs:h-12 h-16 pr-3 rounded-xl w-full lg:w-1/2`}>
        <legend className='xs:text-[12px] text-base px-2'>موضوع تیکت</legend>
        <input onFocus={()=>dispatch({type:"ACTIVE_INPUTEMAIL"})} className='w-full outline-0 h-full rounded-xl bg-inherit' type="email" />
    </fieldset>
    </div>

    <div className='w-full h-max mt-4 flex flex-col gap-y-10  items-end justify-center'>
        <textarea onFocus={()=>dispatch({type: "ACTIVE_TEXTAREA"})} className={` ${state.isShowTextArea ? 'border-cyan-600' : 'border-stone-300'} border-2 h-52 w-full pr-4 pt-2 rounded-xl resize-none outline-none `}></textarea>
        <div className='w-full xs:h-12 h-16 bg-netral-100 border-2 hover:bg-neutral-100 border-stone-300 rounded-lg flex items-center justify-between px-4'>
        <div className=''>
            <p className='opacity-70 xs:text-[12px] text-base'>۱. فایل متنی آشنایی با اقتصاد</p>
        </div>
        <div className='h-full flex items-center justify-center gap-x-1 sm:gap-x-12 '>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-stone-500 xs:w-4 w-6 cursor-pointer'><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" ></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-stone-500 xs:w-4 w-6 cursor-pointer'><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z" ></path></svg>
        </div>
        </div>

        <div className='w-full xs:h-12 h-16 bg-netral-100 border-2 hover:bg-neutral-100 border-stone-300 rounded-lg flex items-center justify-between px-4'>
        <div className='flex justify-center items-center gap-x-3'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='xs:w-4 w-6 opacity-70'><path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z"></path></svg>
            <p className='opacity-70 xs:text-[12px] text-base'>بارگذاری فایل</p>
        </div>
        <div className='h-full  w-24 flex items-center justify-center  '>
        <button className='w-full h-3/4 xs:-translate-x-3 xs:text-[12px] text-base translate-x-0  bg-cyan-600 rounded-md text-white'>انتخاب فایل</button>
        </div>
        
        </div>
        <button className='xs:h-12 xs:text-[12px] text-base w-36 h-16 rounded-md bg-cyan-600 text-white '>ارسال تیکت</button>
       </div> 

        
        </form>
        
      </div>
      </div>
    </div>
  )
}
