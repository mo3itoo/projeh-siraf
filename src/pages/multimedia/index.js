import React, { useState, useEffect } from "react";
import { albumPhoto } from "../../../src/db.json";
import Loading from "@/components/loading";
import CourseCart from "@/components/CourseCart";
import Aside from "@/components/Aside";
import AsideResponsive from "@/components/AsideResponsive";
export default function Multimedia() {
  
  const [allcorses, setAllCorses] = useState(null);
 
  useEffect(() => {
    setAllCorses(albumPhoto);
  }, []);
  

  if (!allcorses) {
    return <Loading />;
  }

  return (
    <div className=" bg-neutral-100 flex h-max py-10 w-full mt-4 gap-x-1 ">
      <div className="hidden  sm:flex  md:flex justify-evenly container sm:px-2 mx-auto sm:justify-between sm:gap-x-0 gap-x-2 ">
        <Aside/>
        <CourseCart data={allcorses}/>
      </div>
      <AsideResponsive/>
    </div>
  );
}
