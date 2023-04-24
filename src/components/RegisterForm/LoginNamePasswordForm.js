import {useRef , useEffect} from 'react'
import InputForm from '../InputForm'

export default function LoginNamePasswordForm({goToRegistration , goToLoginMobileEmail}) {
    const userNameRef = useRef()
    useEffect(()=>{
        userNameRef.current.focus()
        
      },[])
  return (
    <div className="w-full md:w-7/12 h-96 mx-auto  flex flex-col items-center my-8">
    <div className="w-full  flex flex-col justify-center items-center h-max mb-6 gap-y-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-14"
        viewBox="0 0 24 24"
      >
        <path
          d="M15.3499 5.5498C13.7681 5.5498 12.4786 6.81785 12.4504 8.39633L12.4223 9.97138C12.4164 10.3027 12.143 10.5665 11.8117 10.5606C11.7881 10.5602 11.7646 10.5584 11.7413 10.5552L10.1805 10.3423C8.12699 10.0623 6.15883 9.11711 4.27072 7.54387C3.67275 10.8535 4.84 13.147 7.65342 14.9157L9.40041 16.014C9.68095 16.1904 9.7654 16.5608 9.58903 16.8413C9.54861 16.9056 9.49636 16.9616 9.43504 17.0064L7.84338 18.1693C8.78973 18.2288 9.68938 18.1873 10.435 18.0385C15.1526 17.097 18.2897 13.5468 18.2897 7.69084C18.2897 7.21275 17.2774 5.5498 15.3499 5.5498ZM10.4507 8.36066C10.4983 5.69559 12.6735 3.5498 15.3499 3.5498C16.7132 3.5498 17.9465 4.10658 18.8348 5.00515C19.5462 4.9998 20.1514 5.17966 21.5035 4.35943C21.1693 5.9998 21.0034 6.71177 20.2897 7.69084C20.2897 15.3324 15.5926 19.0487 10.8264 19.9998C7.5587 20.6519 2.80646 19.5812 1.44531 18.1584C2.13874 18.1051 4.95928 17.8018 6.58895 16.6089C5.20994 15.6984 -0.278631 12.4679 3.32772 3.78617C5.02119 5.76283 6.73797 7.10831 8.47807 7.82262C9.63548 8.29774 9.91978 8.28825 10.4507 8.36066Z"
          fill="#000"
        ></path>
      </svg>
      <p>به سایت ما خوش آمدید</p>
      <small>جهت ورود به سایت نام کاربری خود را وارد کنید</small>
    </div>

    
      <form className="w-full h-64   flex flex-col items-center">
        <div className='w-full  flex flex-col items-center justify-center gap-y-5 text-sm '>
       <InputForm type="text" content="نام کاربری" refrence={userNameRef}/>
        <div className=' flex items-end  flex-col w-full'>
        <InputForm type="password" content="رمز عبور"/>
        <button className='mt-2 ml-6 text-[14px] text-cyan-700' >رمز عبور خود را فراموش کرده اید؟</button>
        </div>
        <div className='w-full h-[90px] flex flex-col justify-between items-center mt-4'>
        <button className='w-[300px] h-[50px] bg-cyan-700 rounded-lg text-white'>ورود</button>
        <button onClick={goToLoginMobileEmail} className='text-cyan-700'>ورود با شماره موبایل/ایمیل</button>
        </div>
        <div className='w-full flex items-center justify-center mt-2 gap-x-2'>
        <p className='text-base'>آیا حساب کاربری ندارید؟</p>
        <button className='text-cyan-700 text-base' onClick={goToRegistration}>ثبت نام </button>
        </div>
        </div>
      </form>
     
   
    
  </div>
  )
}
