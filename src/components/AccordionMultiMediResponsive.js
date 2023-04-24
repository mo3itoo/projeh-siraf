import React, { useState } from 'react'

export default function AccordionMultiMediResponsive() {
    const[isShowAccordion , setIsShowAccordion] = useState(false)
    const accordionHandler = ()=>{
        setIsShowAccordion(prev=>!prev)
    }
  return (
    <>
     <button
              onClick={accordionHandler}
              className=" w-11/12 mx-auto h-10 flex items-center  my-2 justify-between"
            >
              <p>دشمن شناسی</p>
              <div>
                {!isShowAccordion && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"
                      fill="#000"
                    ></path>
                  </svg>
                )}
                {isShowAccordion && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
                      fill="#000"
                    ></path>
                  </svg>
                )}
              </div>
            </button>
            {isShowAccordion && (
              <div className="w-10/12 mx-auto pb-4 flex mt-4 flex-col gap-y-8 font-bold border-stone-300 border-b">
                <div className="flex items-center justify-satrt  gap-x-2 ">
                  <input type="checkbox" className="w-6 h-6 " />
                  <p>اقتصاد ایران</p>
                </div>
                <div className="flex items-center justify-satrt  gap-x-2">
                  <input type="checkbox" className="w-6 h-6 " />
                  <p>اقتصاد جهان</p>
                </div>
              </div>
            )}
    </>
  )
}
    
       
