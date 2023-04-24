import React,{useState} from 'react'
import AccordionMultiMediResponsive from './AccordionMultiMediResponsive';

export default function AsideResponsive() {

    const [showOrdering, setShowOrdering] = useState(false);
  const [showFiltering, setShowFiltering] = useState(false);

  const showOrderingHandler = () => {
    setShowOrdering((prev) => !prev);
  };

  const showFilterHandler = () => {
    setShowFiltering((prev) => !prev);
  };
  return (
    <div className="w-11/12 mx-auto h-14  flex flex-col items-center justify-start  sm:hidden  border-b border-stone-300">
        <div className="w-full h-max flex items-center justify-start gap-x-6 ">
          <button
            onClick={showFilterHandler}
            className="flex items-center gap-x-2 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                d="M6.17071 18C6.58254 16.8348 7.69378 16 9 16C10.3062 16 11.4175 16.8348 11.8293 18H22V20H11.8293C11.4175 21.1652 10.3062 22 9 22C7.69378 22 6.58254 21.1652 6.17071 20H2V18H6.17071ZM12.1707 11C12.5825 9.83481 13.6938 9 15 9C16.3062 9 17.4175 9.83481 17.8293 11H22V13H17.8293C17.4175 14.1652 16.3062 15 15 15C13.6938 15 12.5825 14.1652 12.1707 13H2V11H12.1707ZM6.17071 4C6.58254 2.83481 7.69378 2 9 2C10.3062 2 11.4175 2.83481 11.8293 4H22V6H11.8293C11.4175 7.16519 10.3062 8 9 8C7.69378 8 6.58254 7.16519 6.17071 6H2V4H6.17071ZM9 6C9.55228 6 10 5.55228 10 5C10 4.44772 9.55228 4 9 4C8.44772 4 8 4.44772 8 5C8 5.55228 8.44772 6 9 6ZM15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13ZM9 20C9.55228 20 10 19.5523 10 19C10 18.4477 9.55228 18 9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20Z"
                fill="#000"
              ></path>
            </svg>
            فیلتر
          </button>
          <button
            onClick={showOrderingHandler}
            className="flex items-center gap-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                d="M20 4V16H23L19 21L15 16H18V4H20ZM12 18V20H3V18H12ZM14 11V13H3V11H14ZM14 4V6H3V4H14Z"
                fill="#000"
              ></path>
            </svg>
            مرتب سازی
          </button>
        </div>
        <div
          className={`w-full  flex-col items-center justify-start flex h-100 bg-stone-100 rounded-t-xl transition-all  fixed ${
            showOrdering ? "bottom-0" : "-bottom-110"
          }  z-50 `}
        >
          <div className=" h-24 mb-4 flex items-center  w-11/12 ">
            <div className="flex items-center justify-center gap-x-2 ">
              <svg
                onClick={() => setShowOrdering(false)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                  fill="#000"
                ></path>
              </svg>
              <p>مرتب سازی بر اساس</p>
            </div>
          </div>

          <div className="w-11/12 flex flex-col overflow-auto">
            <label
              id="filter1"
              className="flex justify-between w-full py-3 border-b border-stone-300"
            >
              <p>مرتبط ترین</p>
              <input id="filter1" type="checkbox" className="w-6 h-6" />
            </label>

            <label
              id="filter2"
              className="flex justify-between w-full py-3 border-b border-stone-300"
            >
              <p>پربازدید ترین</p>
              <input id="filter-2" type="checkbox" className="w-6 h-6" />
            </label>

            <label
              id="filter3"
              className="flex justify-between w-full py-3 border-b border-stone-300"
            >
              <p>جدید ترین</p>
              <input id="filter3" type="checkbox" className="w-6 h-6" />
            </label>

            <label
              id="filter4"
              className="flex justify-between w-full py-3 border-b border-stone-300"
            >
              <p>پربازدید ترین</p>
              <input id="filter4" type="checkbox" className="w-6 h-6 " />
            </label>

            <label
              id="filter5"
              className="flex justify-between w-full py-3 border-b border-stone-300"
            >
              <p>پربازدید ترین</p>
              <input id="filter5" type="checkbox" className="w-6 h-6" />
            </label>

            <label
              id="filter6"
              className="flex justify-between w-full py-3 border-b border-stone-300"
            >
              <p>پربازدید ترین</p>
              <input id="filter6" type="checkbox" className="w-6 h-6" />
            </label>

            <label
              id="filter7"
              className="flex justify-between w-full py-3 border-b border-stone-300"
            >
              <p>پربازدید ترین</p>
              <input id="filter7" type="checkbox" className="w-6 h-6" />
            </label>

            <label
              id="filter8"
              className="flex justify-between w-full py-3 border-b border-stone-300"
            >
              <p>پربازدید ترین</p>
              <input id="filter8" type="checkbox" className="w-6 h-6" />
            </label>

            <label
              id="filter9"
              className="flex justify-between w-full py-3 border-b border-stone-300"
            >
              <p>پربازدید ترین</p>
              <input id="filter9" type="checkbox" className="w-6 h-6" />
            </label>

            <label
              id="filter10"
              className="flex justify-between w-full py-3 border-b border-stone-300"
            >
              <p>پربازدید ترین</p>
              <input id="filter10" type="checkbox" className="w-6 h-6" />
            </label>

            <label
              id="filter11"
              className="flex justify-between w-full py-3 border-b border-stone-300"
            >
              <p>پربازدید ترین</p>
              <input id="filter11" type="checkbox" className="w-6 h-6" />
            </label>
            <label
              id="filter12"
              className="flex justify-between w-full py-3 border-b border-stone-300"
            >
              <p>پربازدید ترین</p>
              <input id="filter12" type="checkbox" className="w-6 h-6" />
            </label>
          </div>
        </div>

        <div
          className={`w-full  flex-col items-center justify-start flex h-100 bg-stone-100 rounded-t-xl transition-all  fixed ${
            showFiltering ? "bottom-0" : "-bottom-110"
          }  z-50 `}
        >
          <div className=" h-36  mb-4 flex items-center  w-11/12">
            <div className="flex  items-center justify-center  gap-x-2 ">
              <svg
                onClick={() => setShowFiltering(false)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                  fill="#000"
                ></path>
              </svg>
              <p>فیلتر</p>
            </div>
          </div>
          <div className=" pb-4  w-full h-38 flex flex-col gap-y-4  overflow-auto ">
            <div className="w-11/12 mx-auto h-370px pb-4 border rounded-xl bg-white">
              <div className="w-full h-20  border-b border-stone-300 flex items-center justify-start pr-4 gap-x-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    d="M20 4V16H23L19 21L15 16H18V4H20ZM12 18V20H3V18H12ZM14 11V13H3V11H14ZM14 4V6H3V4H14Z"
                    fill="#000"
                  ></path>
                </svg>
                <p>فیلتر</p>
              </div>

              <div className="w-full h-64  translate-y-4 flex flex-col  justify-around pr-4 font-bold">
                <div className="flex  items-center justify-satrt  gap-x-2">
                  <input type="checkbox" className="w-6 h-6 " />
                  <p>همه رسانه ها</p>
                </div>
                <div className="flex items-center justify-satrt  gap-x-2">
                  <input type="checkbox" className="w-6 h-6 " />
                  <p>صداها</p>
                </div>
                <div className="flex items-center justify-satrt gap-x-2">
                  <input type="checkbox" className="w-6 h-6 " />
                  <p>ویدیوها</p>
                </div>
                <div className="flex items-center justify-satrt gap-x-2">
                  <input type="checkbox" className="w-6 h-6 " />
                  <p>علاقه مندی ها</p>
                </div>
              </div>
            </div>

             
            <div className="w-11/12 bg-white h-max  mx-auto px-4 rounded-xl border py-4">
              <p className="font-bold pb-4 ">جستجو بر اساس کلمه</p>
              <div className="h-12 rounded-lg w-[536px] border border-stone-300  flex items-center justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 opacity-70" viewBox="0 0 24 24" width="24" height="24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="#000"></path></svg>
              <input className="w-11/12 h-full outline-0 bg-inherit" type="text" />
              </div>
            </div>
              

            <div className="w-11/12 border h-48 bg-white pb-4 rounded-xl gap-y-2 mx-auto flex flex-col items-center justify-center  ">
              <p className="text-right mt-6 w-full pr-4 font-bold flex items-center mb-4 ">
                آرشیو بر اساس بازه زمانی
              </p>

              <div className="flex flex-col items-center justify-center  w-full h-full gap-y-2  ">
                <div className="flex w-full items-cenetr h-12 justify-center ">
                  <p className="pl-10 xs:pl-2 flex xs:text-sm  sm:text-base items-center justify-center opacity-60">
                    از تاریخ
                  </p>
                  <input
                    type="text"
                    className="border border-stone-300 h-full w-9/12 rounded-lg outline-0 pr-2"
                  />
                </div>
                <div className="flex w-full items-cenetr justify-center h-12 ">
                  <p className="pl-10 xs:pl-2 flex xs:text-sm  sm:text-base  items-center justify-center opacity-60">
                    تا تاریخ
                  </p>
                  <input
                    type="text"
                    className="border border-stone-300 h-full w-9/12 rounded-lg outline-0 pr-2"
                  />
                </div>
              </div>

              
            </div>
            <div className="w-11/12 mx-auto  h-max border rounded-xl bg-white ">
            <div className="w-full h-20  border-b border-stone-300  flex items-center justify-start pr-4 gap-x-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M20 4V16H23L19 21L15 16H18V4H20ZM12 18V20H3V18H12ZM14 11V13H3V11H14ZM14 4V6H3V4H14Z"
                  fill="#000"
                ></path>
              </svg>
              <p className="font-bold">آرشیو بر اساس موضوع</p>
            </div>
            
            <AccordionMultiMediResponsive/>
            <AccordionMultiMediResponsive/>
            <AccordionMultiMediResponsive/>
          </div>
          </div>
        </div>
      </div>
  )
}
