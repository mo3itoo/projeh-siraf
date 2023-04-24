import React, { useEffect, useState } from "react";
import Loading from "./loading";
import {speech} from "../../src/db.json"

export default function Speech({ datas }) {
  const [imageSpeech, setImageSpeech] = useState(null);
  useEffect(() => {
    setImageSpeech(speech);
  }, []);

  if (!imageSpeech) {
    return <Loading />;
  }
  return (
    <div className="w-full flex justify-center items-center relative">
      <div className="flex flex-col w-full h-max">
        <div className="flex flex-col w-full xs:h-32 h-44">
          <img
            src={imageSpeech[0].src}
            alt={imageSpeech[0].alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <p className="xs:text-xsm xs:-translate-y-6 text-center absolute top-10 bg-pink-200 p-2">پیامبر صلی علی علیه و آله فرمودند : اذا رایتم الربیع،فاکثرو ذکر النشور <br /> <span className="text-pink-800 gont-bold">هرگاه بهار را دیدید بسیار یاد رستاخیز و قیامت نمایید</span> </p>
    </div>
  );
}
