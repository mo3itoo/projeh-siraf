import React, { useState, useEffect } from "react";
import { albumPhoto } from "../../../src/db.json";
import Loading from "@/components/loading";
import CourseCart from "@/components/CourseCart";
import Aside from "@/components/Aside";
import AsideResponsive from "@/components/AsideResponsive";
import Boxgradiant from "@/components/Boxgradiant";


export default function Multimedia(datas) {
 
  const [allcorses, setAllCorses] = useState(null);
 
  useEffect(() => {
    setAllCorses(albumPhoto);
  }, []);
  

  if (!datas) {
    return <Loading />;
  }

  // console.log(datas.datas["data"]);
  return (
    <div className=" bg-neutral-100 flex flex-col h-max py-10 w-full mt-4 gap-x-1 ">
      <Boxgradiant/>
      <div className="hidden  sm:flex  md:flex justify-evenly container sm:px-2 mx-auto sm:justify-between sm:gap-x-0 gap-x-2 ">
        <Aside/>
        <CourseCart data={datas.datas["data"]}/>
      </div>
      <AsideResponsive/>
    </div>
  );
}

export async function getStaticProps(context){

  const res = await fetch("https://nativecontent.sirafgroup.com/api/v1/portal/contentByPortal/?portalId=1&count=5")

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