import React from "react";
import Header from "./Header";
import Fotter from "./Fotter";
<<<<<<< HEAD
=======
import Speech from "../Speech";
>>>>>>> mo3ito

export default function Layoute({ children , datas }) {
  return (
    <>
<<<<<<< HEAD
      <Header datas={datas} />
      <div>{children}</div>
=======
      <Header  />
      <div>{children}</div>
      <Speech />  
>>>>>>> mo3ito
      <Fotter datas={datas} />
    </>
  );
}
