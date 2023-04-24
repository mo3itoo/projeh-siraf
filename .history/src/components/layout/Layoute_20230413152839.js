import React from "react";
import Header from "./Header";
import Fotter from "./Fotter";
import Speech from "../Speech";

export default function Layoute({ children , datas }) {
  return (
    <>
      <Header  />
      <div>{children}</div>
      <Speech />  
      <Fotter datas={datas} />
    </>
  );
}
