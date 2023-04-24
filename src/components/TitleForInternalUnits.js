import React,{useState , useEffect} from 'react'
import Loading from './loading';
export default function TitleForInternalUnits({title}) {
    

    const [allTitle , setAllTitle]=useState("")

    useEffect(()=>{
        setAllTitle(title.items[0].title)
    },[])

    if(!title){
        return <Loading/>
    }

  return (
    <h1  className='text-xl pt-2 font-bold'>{allTitle}</h1>
    
    
  )
}
