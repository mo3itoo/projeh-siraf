import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <div className='w-full bg-neutral-100 h-max pt-8 sm:pt-16 pb-32'>
      <div className='container mx-auto sm:px-2 h-max'>
      <div className='w-full px-4 sm:border sm:border-stone-300 sm:px-6 sm:rounded-xl h-max mx-auto bg-white flex flex-col items-center pt-4 pb-16 text-sm sm:text-base'>
        <div className='w-full h-max flex flex-col items-center gap-y-12 border-b  pb-12 '>
        <h1 className='text-xl sm:text-2xl '>تماس با سایت ما</h1>
        <p>لطفا پیش از ارسال ایمیل یا تماس تلفنی ابتدا <span className='text-cyan-600 cursor-pointer'>پرسش های متداول</span> را مشاهده کنید.</p>
        </div>

        <div className='w-full h-max  flex flex-col leading-8 mt-8'>
        <p>شماره تماس دفتر : ۷۵۰۹۸۰۰ ۰۲۱ (ساعت پاسخگویی روابط عمومی: "شنبه تا چهارشنبه" ۰۹:۰۰ تا اذان ظهر، از یک ساعت بعد از اذان ظهر تا ۱۶:۳۰)</p>
        <p>سامانه پیام کوتاه: ۲۰۰۰۳۱۳۳۱۳</p>
        <p>صندوق پستی: ۱۵۸۷۵۱۱۴۹</p>
        <p>جهت ارتباط مستقیم با واحدهای موسسه ما ، ابتدا در سایت ثبت نام کنید و تیکت ایجاد نمایید و سوال خود را بپرسید.</p>
        <Link href="/ticket" className='text-cyan-600'>ارسال تیکت</Link>
        </div>

        <div className='w-full h-max flex flex-col  leading-8 my-20'>
          <p className='text-red-600'>لطفا قبل از ارسال هرگونه متن یا فایل به ایمیل استاد ، توجه فرمایید که موارد با مضمونه های زیر پاسخ داده نمیشود.</p>
        <p>* سوالات شخصی و خصوصی</p>
        <p>* درخواست شماره تماس استاد</p>
        <p>* سوالات شرعی و احکام فقهی، سندیت احادیث و روایات، تعبیر خواب، ابطال سحر و جادو</p>
        <p>* درخواست نظر درباره صوت، فیلم ، عکس، ویدیو، سایت و ...</p>
        <p>* سوالات مرتبط با اشخاص سیاسی، فرهنگی و اجتماعی</p>
        <p>* درخواست هرگونه مشاوره و راهنمایی در حوزه مسائل شخصی، خانوادگی ، تحصیلی و ...</p>
        <p>* اعلام آمادگی برای همکاری (برای همکاری فقط از طریق ایمیل های مشخص شده در صفحه تماس با ما در سایت اقدام شود) صرفا جهت موارد خاص و یا ارئه مطالب بسیار مهم ، گزارش یا فایل مورد نظر خود را به صورت شفاف ، دقیق و مختصر همراه با ارائه مستندات ، ارسال کنید.</p>
        </div>

        <div className='w-full h-max leading-8 '>
           <p className='text-red-600'>لطفا قبل از ارسال هرگونه درخواست دیدار با استاد به نکات زیر توجه فرمایید:</p>
           <p>به دلیل محدودیت زمانی امکان دیدار حضوری در موارد زیر امکان پذیر نیست</p>
           <p>* سوالات شرعی و احکام فقهی، سندیت احادیث و روایات، تعبیر خواب، ابطال سحر و جادو</p>
           <p>* درخواست نظر درباره صوت، فیلم ، عکس، ویدیو، سایت و ...</p>
           <p>* سوالات مرتبط با اشخاص سیاسی، فرهنگی و اجتماعی</p>
           <p>* درخواست هرگونه مشاوره و راهنمایی در حوزه مسائل شخصی، خانوادگی ، تحصیلی و ...</p>
          <p>* برای درخواست همکاری صرفا از طریق واحدهای مشخص شده در صفحه تماس با ما اقدام شود چانچه علت درخواست ، به جز موارد ذکر شده میباشد فرم مربوطه را تکمیل و ارسال کنید.</p>
          <p className='text-cyan-600'>دانلود فرم دیدار با استاد</p>
        </div>

        <div className='w-full mt-20'>
          <p>شما عزیزان میتوانید نذورات و هدایای خود را به شماره کارت یا شماره حساب و یا شماره شبا ، نزد بانک صادرات ایران به نام سایت ما واریز نمایید.</p>
        </div>
       

      </div>
      </div>
    </div>
  )
}
