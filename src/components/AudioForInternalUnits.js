import React from 'react'

export default function AudioForInternalUnits({dataForAudio}) {

    if(dataForAudio.length === 1 ){
        return (
            <div  className='w-full h-20 flex items-center justify-center px-4'>
                        <audio className='w-full' src={dataForAudio} controls></audio>
                        </div>
          )
    } else if(dataForAudio.length > 1 ){
        return(
            dataForAudio.map(item=>{
                <div  key={item.id} className='w-full h-20 flex items-center justify-center px-4'>
                        <audio className='w-full' src={item.dataForAudio} controls></audio>
                        </div>
            })
        )
    }

}
