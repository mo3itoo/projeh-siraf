import React,{useState , useEffect} from 'react'
import GalleryForInternalUnits from "../../components/GalleryForInternalUnits"
import PointOfView from '@/components/PointOfView'
import AsideCommonInInternalUnits from '@/components/AsideCommonInInternalUnits'
import Loading from '@/components/loading'
import TableForInternalUnits from '@/components/TableForInternalUnits'
import ImageForInternalUnits from '@/components/ImageForInternalUnits'
export default function internal ({datas}) {
  const [isShowDownloadButtons , setIsShowDownloadButtons]=useState(false)
  const [allData , setAllData]=useState(null)
  const [items , setItems]=useState()
  console.log(datas["data"].items);
  useEffect(()=>{
    setAllData(datas["data"])
    setItems(datas["data"].items)
  },[])
  
 
  if(!allData && items ){
    return <Loading/>
  }
 
  return (
    <div className='w-full h-max bg-neutral-100 my-2 xs:pt-6 pt-12 pb-20'>
      <div className="container  mx-auto px-2 h-max ">
        <div className='w-full bg-neutral-100  h-max  flex flex-col lg:flex-row gap-x-8'>
        <div className=' w-full lg:w-8/12 bg-white  lg:px-6 h-max px-2 lg:border lg:border-stone-300 lg:rounded-xl'>
          <div className='w-full h-36  mt-4 gap-y-6 lg:gap-y-0 grid grid-cols-2'>
            <div className=' flex items-center col-span-full lg:col-span-1 '>
            <p className='font-bold xs:text-base text-xl  '>lhih</p>
            </div>
            <div className=' flex items-center justify-end   lg:col-span-1 '>
            <button className='xs:h-8 xs:text-[10px] xs:w-24 xs:gap-x-1 text-black bg-white w-36 lg:w-28 lg:text-[12px] xl:w-[145px] h-12 rounded-lg border flex items-center justify-center gap-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className='xs:w-4 w-5 md:w-5 xl:w-6 lg:w-5 fill-black' viewBox="0 0 24 24" ><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z" fill="#000"></path></svg>
              علاقه مندی ها</button>
            </div>
            <div className='col-start-1 row-start-2 lg:col-span-1'>
            <div className='w-full  flex items-center gap-x-2'>
            <div className='w-12 h-12 rounded-full'>
            <img src="/assets/images/album-photo/1.jpg" alt="" className='w-full h-full rounded-full'/>
            </div>
            <div className='flex flex-col gap-y-1 '>
              <p className='xs:text-[14px]'>عادل</p>
              <p className='xs:text-[10px] opaciy-70'>واحد مهدویت</p>
            </div>
          </div>
            </div>
            <div className=' flex items-center col-span-full lg:col-span-1 '>
            <div className="flex gap-x-2 lg:gap-x-8  justify-between items-center w-full">
                  <div className="flex gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className='w-5 xs:w-4'
                      
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z" />
                    </svg>
                    <p className='xs:text-[12px]'>1401/9/25</p>
                  </div>
                  <div className='flex items-center gap-x-1'>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className='w-5 xs:w-4'
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z" />
                    </svg>
                    <p className='xs:text-[12px]'>مهدویت</p>
                  </div>

                  <div className="flex items-center justify-center gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-cyan-400 w-5 xs:w-4"
              viewBox="0 0 24 24"
              
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z" />
            </svg>
            <p className='xs:text-[12px]'>۴امتیاز</p>
          </div>
                </div>
            </div>

          </div>
          <div className='flex flex-col mt-6 h-max'>
           <ImageForInternalUnits src="/assets/images/album-photo/1.jpg"/>

            <p className='my-5 leading-8'>نتحقلتحقخلتقخلتحلتجحتنحلفغغغ</p>

            <div className='w-full h-max flex flex-col'>
              <h3 className='font-bold xs:text-base text-xl'>{datas["data"].items[0].items[0].title}</h3>
               <p className='my-5 leading-8'> در آدااشد بعارف اسلامی بر خلاف گفته رایج، انسان جایزالخطا نمیباشد بلکه ممکن الخطاست در آداب و معارفو معارف اسلامی بر خلاف گفته رایج، انسان جایزالخطا نمیباشد بلکه ممکن الخطاست در آداب وبر اسلخطاست </p>

                <TableForInternalUnits/>

                <p className='my-5 leading-8'> در آدااشد بعارف اسلامی بر خلاف گفته رایج، انسان جایزالخطا نمیباشد بلکه ممکن الخطاست در آداب و معارفو معارف اسلامی بر خلاف گفته رایج، انسان جایزالخطا نمیباشد بلکه ممکن الخطاست در آداب وبر اسلخطاست </p>

                <div className='bg-blue-100 h-max w-full flex items-center justify-center px-6 rounded-lg mb-8'>
                <p className='my-5 leading-8'> در آداب و معارف اسلامی بر خلاف گفته رایج، انسان جایزالخطا نمیباشد بلکه ممکن الخطاست در آداب و معارف اسلامی بر خلاف گفته رایج، انسان جایزالخطا نمیباشد بلکه ممکن الخطاست در آداب و معارف اسلامی بر خلاف گفته رایج، انسان جایزالخطا نمیباشد بلکه ممکن الخطاست در آداب و معارف اسلامی بر خلاف گفته رایج، انسان جایزالخطا نمیباشد بلکه ممکن الخطاست در آداب و معارف اسلامی بر خلاف گفته رایج، انسان جایزالخطا نمیباشد بلکه ممکن الخطاست در آداب و معارف اسلامی بر خلاف گفته رایج، انسان جایزالخطا نمیباشد بلکه ممکن الخطاست در آداب و معارف اسلامی بر خلاف گفته رایج، انسان جایزالخطا نمیباشد بلکه ممکن الخطاست </p>
                </div>

                <div className='w-full h-20 flex items-center justify-center px-4'>
                <audio className='w-full' src="" controls></audio>
                </div>

                <p className='my-5 leading-8 '> در آدااشد بعارف اسلامی بر خلاف گفته رایج، انسان جایزالخطا نمیباشد بلکه ممکن الخطاست در آداب و معارفو معارف اسلامی بر خلاف گفته رایج، انسان جایزالخطا نمیباشد بلکه ممکن الخطاست در آداب وبر اسلخطاست </p>

                <div className='w-full  flex flex-col h-max gap-y-4 '>
                  <h2 className='xs:text-base text-xl font-bold'>راه حل استاد</h2>
                <div className='w-full  h-max flex flex-col'>
                 <div className='xs:text-[12px] w-full lg:w-1/3 h-10  rounded-t-xl border border-cyan-600 flex text-cyan-600 bg-white '>
                  <button className='border-l  h-full border-cyan-600 hover:text-white  hover:bg-cyan-600 w-1/3 rounded-tr-xl flex items-center justify-center'>شماره ۱</button>
                  <button className='border-l h-full border-cyan-600 hover:text-white hover:bg-cyan-600  w-1/3 flex items-center justify-center'>شماره ۲</button>
                  <button className=' w-1/3 h-full rounded-tl-xl flex hover:text-white hover:bg-cyan-600  items-center justify-center'>شماره ۳</button>
                  
                 </div>
                 <div className='w-full bg-blue-100 h-max flex  flex-col gap-y-3 p-5 rounded-b-xl lg:rounded-l-xl lg:rounded-br-xl'>
                  <h2 className='text-lg '>راه حل شماره یک</h2>
                   <p className='leading-8'>  در آداب و معارف الهی بر خلاف جمله معروف در آداب و معارف الهی بر خلاف جمله معروف در آداب و معارف الهی بر خلاف جمله معروف در آداب و معارف الهی بر خلاف جمله معروف در آداب و معارف الهی بر خلاف جمله معروف در آداب و معارف الهی بر خلاف جمله معروف در آداب و معارف الهی بر خلاف جمله معروف در آداب و معارف الهی بر خلاف جمله معروف در آداب و معارف الهی بر خلاف جمله معروف  در آداب و معارف الهی بر خلاف جمله معروف </p>
                  </div>
                 </div>
                </div>
                
                <p className='leading-8 xs:my-3 xs:text-center  my-6'>  در آداب و معارف الهی بر خلاف جمله معروف در آداب و معارف الهی بر خلاف جمله معروف در آداب و معارف الهی بر خلاف جمله معروف در آداب و معارف الهی بر خلاف جمله معروف در آداب و معارف الهی ب معروف </p>

                <div className='w-full h-max   flex flex-col xs:gap-y-1 gap-y-2 sm:gap-y-4  rounded-xl  '>
                  <div className='w-full xs:h-[200px] h-[300px] sm:h-[420px]'> 
                    <video className='w-full h-full' src="/assets/1.mp4" controls></video>
                  </div>
                  <div className='w-full h-max  border border-stone-300 flex flex-col mt-2 mb-8 gap-y-4 xs:text-[10px] xs:p-2  p-4 rounded-xl'>
                  <div className='w-full h-max   flex flex-col '>
                  <button onClick={()=>setIsShowDownloadButtons(prev=> !prev)}  className='w-full h-max  flex justify-between px-4  '>
                    <div className='w-1/2  h-10 flex items-center gap-x-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='xs:w-3 w-6 fill-black' viewBox="0 0 24 24"><path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path></svg>
                    <p className='xs:text-[10px] text-base'>دانلود این ویدیو</p>
                    </div>
                    
                    <div className='w-1/2  h-10 flex justify-end'>
                   { !isShowDownloadButtons && <svg xmlns="http://www.w3.org/2000/svg" className='xs:w-3 w-6 fill-black' viewBox="0 0 24 24"><path d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"></path></svg>}
                   { isShowDownloadButtons && <svg xmlns="http://www.w3.org/2000/svg" className='xs:w-3 w-6 fill-black' viewBox="0 0 24 24"><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path></svg> }
                    </div>
                  
                  </button>
                  { isShowDownloadButtons &&   <div className='w-full flex flex-col h-max gap-y-4 pt-5'>
                    <div className='flex justify-between items-center px-4 h-12 border border-stone-300 rounded-xl'>
                      <p>کیفیت بالا</p>
                      <p>حجم:۲۰ مگابایت</p>
                      <button className='w-max px-2 text-white bg-cyan-600 h-8 rounded-md'>دانلود</button>
                    </div>
                    <div className='flex justify-between items-center px-4 h-12 border border-stone-300 rounded-xl'>
                      <p>کیفیت متوسط</p>
                      <p>حجم:۲۰ مگابایت</p>
                      <button className='w-max px-2 text-white bg-cyan-600 h-8 rounded-md'>دانلود</button>
                    </div>

                  </div>}
                  </div>
                  </div>
                </div>

                
                {/* <GalleryForInternalUnits slides={items}/> */}
                

              

                <div className='w-full h-12  flex items-center justify-between mb-10'>
                  <div className='w-1/6 sm:w-3/12 lg:w-1/4 bg-stone-300 h-[1px] '></div>
                  <div className='xs:px-2 sm:w-6/12 w-4/6 lg:w-2/4 flex items-center justify-center xs:gap-x-3 gap-x-8 opacity-70'>
                  <p className='xs:text-[8px] text-[12px] text-center sm:text-sm  '>آیا این مطالب را دوست داشتید؟</p>
                    <div className='flex  items-center gap-x-3 lg:gap-x-6 '>
                    <svg xmlns="http://www.w3.org/2000/svg" className='xs:w-3 w-4 cursor-pointer ' viewBox="0 0 24 24"><path d="M9.40017 16H3C1.89543 16 1 15.1046 1 14V11.8957C1 11.6344 1.05118 11.3757 1.15064 11.1342L4.24501 3.61925C4.3993 3.24455 4.76447 3 5.16969 3H22C22.5523 3 23 3.44772 23 4V14C23 14.5523 22.5523 15 22 15H18.5182C18.1932 15 17.8886 15.1579 17.7012 15.4233L12.2478 23.149C12.1053 23.3508 11.8367 23.4184 11.6157 23.3078L9.80163 22.4008C8.74998 21.875 8.20687 20.6874 8.49694 19.548L9.40017 16ZM17 13.4125V5H5.83939L3 11.8957V14H9.40017C10.7049 14 11.6602 15.229 11.3384 16.4934L10.4351 20.0414C10.3771 20.2693 10.4857 20.5068 10.6961 20.612L11.3572 20.9425L16.0673 14.27C16.3172 13.9159 16.6366 13.6257 17 13.4125ZM19 13H21V5H19V13Z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='xs:w-3 w-4 cursor-pointer ' viewBox="0 0 24 24"><path d="M14.5998 8.00033H21C22.1046 8.00033 23 8.89576 23 10.0003V12.1047C23 12.3659 22.9488 12.6246 22.8494 12.8662L19.755 20.3811C19.6007 20.7558 19.2355 21.0003 18.8303 21.0003H2C1.44772 21.0003 1 20.5526 1 20.0003V10.0003C1 9.44804 1.44772 9.00033 2 9.00033H5.48184C5.80677 9.00033 6.11143 8.84246 6.29881 8.57701L11.7522 0.851355C11.8947 0.649486 12.1633 0.581978 12.3843 0.692483L14.1984 1.59951C15.25 2.12534 15.7931 3.31292 15.5031 4.45235L14.5998 8.00033ZM7 10.5878V19.0003H18.1606L21 12.1047V10.0003H14.5998C13.2951 10.0003 12.3398 8.77128 12.6616 7.50691L13.5649 3.95894C13.6229 3.73105 13.5143 3.49353 13.3039 3.38837L12.6428 3.0578L7.93275 9.73038C7.68285 10.0844 7.36341 10.3746 7 10.5878ZM5 11.0003H3V19.0003H5V11.0003Z"></path></svg>
                    </div>
                  </div>
                  <div className='w-1/6 sm:w-3/12  lg:w-1/4 bg-stone-300 h-[1px] '></div>
                </div>
                <PointOfView backGround="bg-inherit"/>

                

            </div>
          </div>
        </div>
        <div className='w-full lg:w-4/12 flex flex-col gap-y-8 bg-neutral-100'>
          
         <AsideCommonInInternalUnits title="dd"/>
         <AsideCommonInInternalUnits title="مطالب مناسب شما"/>
         </div>
          
        
        </div>
      </div>
      
    </div>
  )
}



export async function getStaticProps(context){

  const res = await fetch("https://nativecontent.sirafgroup.com/api/v1/content/content/?contentId=160")

  const datas = await res.json()

  if(!datas){
    return{
      notFound:true
    }
  }

  return {
    props :{
      datas
    }
  }

}

// export async function getStaticPaths() {
//   const allMenWatches = await getData();

//   const ids = allMenWatches.map((watch) => watch.id);

//   const pathWidthParams = ids.map((id) => ({ params: { pid: id } }));

//   return {
//     paths: pathWidthParams,
//     fallback: false,
//   };
// }