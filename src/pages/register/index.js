
import {useReducer} from 'react'
import LoginNamePasswordForm from '@/components/RegisterForm/LoginNamePasswordForm'
import LoginMobileEmail from '@/components/RegisterForm/LoginMobileEmail'
import Registeration from '@/components/RegisterForm/Registeration'



export default function Register() {

  
  const showClicked={loginMobileEmail:true , loginNamePassword:false ,signup:false , }


    const reducer=(state , action)=>{
       
        switch(action.type){
            case "SIGNUP": {
            const newState = showClicked
            newState.signup = true
            newState.loginMobileEmail = false
                return newState 
            }
            case "LOGIN_MOBILE_EMAIL":{
              return showClicked
            } 
            case "LOGIN_NAME_PASSWORD":{
              const newState = showClicked
              newState.loginNamePassword = true
              newState.loginMobileEmail=false
              return newState
            } 
            default : state
        }

    }
    const[state , dispatch]=useReducer(reducer , showClicked)

    const goToLoginNamePasswordHandler=(event)=>{
      event.preventDefault()
      console.log("click")
      dispatch({type: "LOGIN_NAME_PASSWORD"})
    }

    const getCodeHandler=(event)=>{
      event.preventDefault()
      console.log("code got");
    }

    const goToRegistrationHandler=(event)=>{
      event.preventDefault()
      dispatch({type: "SIGNUP"})
    }
    const goToLoginMobileEmailHandler=(event)=>{
      event.preventDefault()
      dispatch({type:"LOGIN_MOBILE_EMAIL"})
    }
  return (
  
    <div className='w-11/12  md:container flex items-center justify-center mx-auto'>
    <div className="w-full md:w-7/12 h-[700px] mx-auto   md:border md:border-stone-300  md:rounded-2xl md:mt-16 mb-24 ">
      <div className="w-full h-14 ">
        <div className="w-full h-full xs:text-sm flex justify-around items-center font-bold">
          <button
            onClick={() => dispatch({ type: "LOGIN_MOBILE_EMAIL" })}
            className={` ${(state.loginNamePassword || state.loginMobileEmail) && "border-cyan-600"} border-b-2  w-1/2 items-center h-full flex  justify-center`}
          >
            ورود به حساب کاربری
          </button>
          <button
            onClick={() => dispatch({ type: "SIGNUP" })}
            className={` ${state.signup && "border-cyan-600"} border-b-2  w-1/2 items-center h-full flex justify-center`}>
            ثبت نام
          </button>
          
        </div>
         {state.loginMobileEmail &&<LoginMobileEmail goToLoginNamePassword={goToLoginNamePasswordHandler}/> } 
        {state.loginNamePassword && <LoginNamePasswordForm goToLoginMobileEmail={goToLoginMobileEmailHandler} goToRegistration={goToRegistrationHandler}/> } 
       { state.signup && <Registeration getCodeButton={getCodeHandler} />} 
        
      </div>
    </div>
    </div>
  );
}
