import React, { useState , useEffect } from 'react'
import Loading from './loading';

export default function TextForInternal({text}) {


    const [texts , setTexts]=useState("")

    useEffect(()=>{
        setTexts(text.items[0].description)
    },[])

    const createMarkup =(texts)=> { return {__html: texts} };

   if(!texts){
    return <Loading/>
   }
  
    return (
        <div  className='my-4' dangerouslySetInnerHTML={createMarkup(texts)} />
     );
  
}
