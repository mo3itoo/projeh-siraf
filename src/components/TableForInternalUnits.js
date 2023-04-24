import React from 'react'

export default function TableForInternalUnits() {
  return (
    <table className='table-auto mb-3 '>
                  <thead className='h-12 text-white'>
                    <tr className='xs:text-[12px] bg-cyan-600'>
                      <th className='rounded-tr-xl  border-l border-stone-300'>دسته اول</th>
                      <th className=' border-l border-stone-300'>دسته دوم</th>
                      <th className='rounded-tl-xl   border-stone-300'>دسته سوم</th>
                    </tr>
                  </thead>
                  <tbody className=' text-center leading-9 '>
                    <tr className='xs:text-[12px] odd:bg-stone-100 '>
                  <td className=' border-l border-stone-300'>دسته اول</td>
                  <td className=' border-l border-stone-300'>دسته دوم</td>
                  <td className=' '>دسته سوم</td>
                  </tr>
                  <tr className='xs:text-[12px] odd:bg-stone-100 '>
                  <td className=' border-l border-stone-300'>دسته اول</td>
                  <td className=' border-l border-stone-300'>دسته دوم</td>
                  <td className=' '>دسته سوم</td>
                  </tr>
                  <tr className='xs:text-[12px] odd:bg-stone-100 '>
                  <td className=' border-l border-stone-300'>دسته اول</td>
                  <td className=' border-l border-stone-300'>دسته دوم</td>
                  <td className=' '>دسته سوم</td>
                  </tr>
                  </tbody>
                </table>
  )
}
