import React from 'react'


export default function QuestionRadioButton({children}) {
  return (
    <div className="w-full h-max mt-12 flex items-center flex-wrap ">
          <div className="flex flex-col  gap-y-4 xs:text-[10px]  ">
          <p className="font-bold xs:text-[12px] pt-8">آیا قبلا استاد در مجموعه شما سخنرانی داشته؟</p>
          <div className="flex items-center justify-start gap-x-8 sm:gap-x-12 flex-wrap gap-y-5">
         {children}
          </div>
          </div>
          </div>
  )
}
