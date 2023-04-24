import React from 'react'

export default function SelectOptionForTeacherInvite({content , handleChanging , initialValue , items}) {
  return (
    <div className="w-full sm:w-[280px] md:w-[340px] lg:w-[470px] xl:w-[600px] 2xl:w-[720px] h-max  flex flex-col ">
    <div className="w-full  h-14 border-2 border-stone-300 rounded-xl flex items-center justify-between cursor-pointer px-2">
            <select value={initialValue} onChange={handleChanging} className="w-full outline-none bg-inherit cursor-pointer h-full" name="" id="">
                <option value="">{content}</option>
                {items.map(item =>
                    <option key={item.id} value={item.name}>{item.name}</option>
                    )}
            </select>
            </div>
            </div>
  )
}
