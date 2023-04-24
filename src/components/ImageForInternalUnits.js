import React from 'react'

export default function ImageForInternalUnits({src}) {
  return (
    <div  className='w-full h-64 my-4'>
    <img src={src.items[0].path} alt="image" className='w-full h-full' />
  </div>
  )
}
