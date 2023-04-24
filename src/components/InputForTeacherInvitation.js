import React,{useState} from 'react'

export default function InputForTeacherInvitation({content , type}) {
  const [focus , setFocus]=useState(false)
  return (
    <div className="w-full sm:w-[280px] md:w-[340px] h-[65px] mb-2  lg:w-[470px] xl:w-[600px] 2xl:w-[720px] flex items-center justify-center ">
    <fieldset className={`${focus ? 'border-cyan-600' : 'border-stone-300' } w-full border-2  rounded-xl h-full pr-3`}>
      <legend className={` ${focus ? 'text-cyan-600' : 'text-black' } px-2 text-sm h-max flex items-center justify-center mt-0 `}>
       {content}
      </legend>
      <input onBlur={()=>setFocus(false)} onFocus={()=>setFocus(true)} className="w-full h-full bg-inherit rounded-xl outline-0 " type={type} />
    </fieldset>
    </div>
  )
}
