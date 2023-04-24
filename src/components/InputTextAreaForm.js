import React,{useReducer} from 'react'

export default function InputTextAreaForm({isShowButton}) {
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
    <form className='w-full h-max   flex flex-col  '>
    <div className='w-full  h-max flex flex-col gap-y-4 sm:flex-row items-center justify-center sm:gap-x-6 py-5' >
    <fieldset  className={`${state.isShowNameActive ? 'border-cyan-600' : 'border-black '} border-2 opacity-70 flex items-center justify-center h-16  pr-3 rounded-xl w-full sm:w-1/2`}>
        <legend className='px-2'>نام و نام خانوادگی</legend>
        <input  onFocus={()=>dispatch({type:"ACTIV_INPUTNAME"})} className='w-full outline-0 h-full rounded-xl bg-inherit' type="text" />
    </fieldset>

    <fieldset className={`${state.isShowEmailActive ? 'border-cyan-600' : 'border-black'} border-2  opacity-70 flex items-center justify-center h-16  pr-3 rounded-xl w-full sm:w-1/2`}>
        <legend className='px-2'>ایمیل</legend>
        <input onFocus={()=>dispatch({type:"ACTIVE_INPUTEMAIL"})} className='w-full outline-0 h-full rounded-xl bg-inherit' type="email" />
    </fieldset>
    </div>

    <div className='w-full h-max mt-4 flex flex-col gap-y-3 items-end'>
        <textarea onFocus={()=>dispatch({type: "ACTIVE_TEXTAREA"})} className={` ${state.isShowTextArea ? 'border-cyan-600' : 'border-black'} border h-52 w-full pr-4 pt-2 rounded-xl resize-none outline-none `}></textarea>
        {isShowButton && <button className='border border-stone-300 w-40 h-10 rounded-lg'>ثبت و ارسال</button>}
    </div>

</form>
  )
}
