import React,{useState , useEffect} from 'react'
import GalleryForInternalUnits from "../../components/GalleryForInternalUnits"
import PointOfView from '@/components/PointOfView'
import AsideCommonInInternalUnits from '@/components/AsideCommonInInternalUnits'
import Loading from '@/components/loading'
import ImageForInternalUnits from '@/components/ImageForInternalUnits'
import AudioForInternalUnits from '@/components/AudioForInternalUnits'
import VideoForInternalUnits from '@/components/VideoForInternalUnits'
import TextForInternal from '@/components/TextForInternal'
import TitleForInternalUnits from '@/components/TitleForInternalUnits'
import moment from 'moment-jalaali'

export default function internal ({datas}) {
  
  const [allData , setAllData]=useState(null)
  const [items , setItems]=useState([])
  console.log(datas["data"]);
  
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
            <img src={datas["data"].creator.avatarUrl} alt="" className='w-full h-full rounded-full'/>
            </div>
            <div className='flex flex-col gap-y-1 '>
              <p className='xs:text-[14px]'>{datas["data"].creator.name}</p>
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
                    <p className='xs:text-[12px]'>{datas["data"].publishAt}</p>
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
                    <p className='xs:text-[12px]'>{datas["data"].title}</p>
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
    <>
    {items.length && items.map((item, index) => {
  if (item.type === "image") {
    if (item.items.length === 1) {

      return <ImageForInternalUnits key={`${item.type}-${index}`} src={item} />

    } else if (item.items.length > 1) {

      return <GalleryForInternalUnits key={`${item.type}-${index}`} slides={item} />
    }
  } else if (item.type === "audio") {

    return <AudioForInternalUnits key={`${item.type}-${index}`} dataForAudio={item} />

  } else if (item.type === "video") {

    return <VideoForInternalUnits key={`${item.type}-${index}`} dataForVideo={item} />

  } else if (item.type === "text") {

    return <TextForInternal key={`${item.type}-${index}`} text={item} />

  } else if (item.type === "title") {

    return <TitleForInternalUnits key={`${item.type}-${index}`} title={item} />
  }
})}

        <PointOfView/>
        </>
        </div>
        <div className='w-full lg:w-4/12 flex flex-col gap-y-8 bg-neutral-100'>
          
         <AsideCommonInInternalUnits title="مناسب شما"/>
         <AsideCommonInInternalUnits title="مطالب مناسب شما"/>
         
         </div>
          
        
        </div>
      </div>
      
    </div>
  )
}



export async function getStaticPaths() {
 
  const res = await fetch("https://nativecontent.sirafgroup.com/api/v1/content/content/?contentId=")
  const data = await res.json()
 
  return {
    paths :[
      {params: {internal : "224"}}
    ],
    fallback:true,
  }
 
}

export async function getStaticProps(context) {
  const { params } = context
  const dataId = params.internal

  const res = await fetch(`https://nativecontent.sirafgroup.com/api/v1/content/content/?contentId=${dataId}`)
  const allData = await res.json()
 
  return {
    props: {
      datas: allData
    }
  }
}



