import React from 'react'

export default function SurveyForm() {
  return (
    <div className='w-full bg-neutral-100'>
      <div className='container mx-auto px-2 pt-14 pb-20'>
        <div className='w-full bg-white h-96 flex flex-col p-4  justify-between border border-stone-300 rounded-xl'>
        
          <p className='text-sm'>سوال <span className='text-cyan-600'>5</span> از ۲۵ </p>
          <p className='xs:text-base text-lg font-bold'>۱. نظرسنجی به این صورت میباشد؟</p>
          <div className='w-full flex items-center gap-x-2'>
            <input className='w-4 h-4' id='radio-1' name='survey' type="radio" value="گزینه اول"/>
            <label htmlFor='radio-1'>گزینه اول</label>
          </div>

          <div className='w-full flex items-center gap-x-2'>
            <input className='w-4 h-4' id='radio-2' name='survey' type="radio" value="گزینه دوم"/>
            <label htmlFor='radio-1'>گزینه دوم</label>
          </div>

          <div className='w-full flex items-center gap-x-2'>
            <input className='w-4 h-4' id='radio-3' name='survey' type="radio" value="گزینه سوم"/>
            <label htmlFor='radio-3'>گزینه سوم</label>
          </div>

          <div className='w-full flex items-center gap-x-2'>
            <input className='w-4 h-4' id='radio-4' name='survey' type="radio" value="گزینه چهارم"/>
            <label htmlFor='radio-4'>گزینه چهارم</label>
          </div>

          <div className='w-full h-max text-left'>
          <div className='flex items-center justify-end gap-x-4'>
          <button className='xs:w-20 xs:rounded-lg xs:h-10 xs:text-sm w-36 h-14 text-cyan-600 hover:text-white hover:bg-cyan-600 rounded-xl '>سوال قبلی</button>
          <button className='xs:w-20 xs:rounded-lg xs:h-10 xs:text-sm w-36 h-14 text-cyan-600 hover:text-white hover:bg-cyan-600 rounded-xl '>سوال بعدی</button>
          </div>
          </div>
        
        </div>

      </div>
      
    </div>
  )
}
