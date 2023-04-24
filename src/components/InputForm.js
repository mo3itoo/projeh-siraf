import React,{useState} from 'react'


export default function InputForm({content , placeholder , type , refrence }) {
    const[focus , setFocus]=useState(false)
  return (
    <>
    <div className='w-full  flex flex-col items-center justify-center gap-y-5 text-sm '></div>
    <fieldset  className={`${focus ? 'border-cyan-700' : 'border-black'} border-2   opacity-70 pr-3 rounded-xl h-[65px] w-full `}>
    <legend className={` ${focus && 'text-cyan-700' } px-2 -translate-y-0.5 `}>{content}</legend>
    <input onBlur={()=>setFocus(false)}  onFocus={()=>setFocus(true)}  placeholder={placeholder} ref={refrence} type={type} className="w-full h-full pr-4 outline-0 my-2" />
  </fieldset>
  </>
  
  )
}
 