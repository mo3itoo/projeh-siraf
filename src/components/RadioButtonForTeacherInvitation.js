import React from 'react'

export default function RadioButtonForTeacherInvitation({value , id , name , width , xsWidth}) {
  return (
    <div className={`flex xs:gap-x-2 gap-x-2  ${xsWidth}  ${width}`}>
    <label htmlFor={id}>{value}</label>
    <input id={id} type="radio" name={name} value={value} />
    </div>
  )
}
