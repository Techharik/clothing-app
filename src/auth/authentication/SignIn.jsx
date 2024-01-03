import React, { useState } from 'react'

import { authSignIn, createUserWithAuthProvider ,createUserWithGoogleData} from '../../utilits/firebase.utilits'
import SignUp from './SignUp/SignUp'

import './SiginIn.styles.scss'

const defaultValueSigIn = {
  email:'',
  password:''
}


const SignIn = () => {
 
  const [signInValue, setsignInValue]= useState(defaultValueSigIn);
  const {email, password} = signInValue;

  const onHandleChange =(event)=>{
    const {name, value} = event.target

    setsignInValue({...signInValue, [name]:value})
  }



const logInWithGoogle = async()=>{
    const {user} = await createUserWithAuthProvider()
     createUserWithGoogleData(user) 
}

const handleSignInSubmit = async(event)=>{
  event.preventDefault();
  try{
    
    const {user}=await authSignIn(signInValue);
    console.log(user)
  }catch(e){
    switch(e.code){
      case 'auth/invalid-credential':
        alert('Password or email Incorrect')
        break;
      default:
       alert(e)
    }
  }

}

  return (
    <div className='authentication-container'>
     <div className='sign-up-container'>
     <form onSubmit={(e)=>handleSignInSubmit(e)} className='group'>
         <label for='email'>Email</label>
         <input className='form-input' type='email' name='email' 
         placeholder='Enter an email address' 
         value={email}
         onChange={(e)=>onHandleChange(e)}
         />
         <label for='password'>Password</label>
         <input className='form-input' type='text' name='password' placeholder='Enter an email address' 
         value={password}
         onChange={(e)=>onHandleChange(e)}
         />

         <div className='buttons-container'>

        <button type='submit' >Signin</button>
        <button type='button' onClick={logInWithGoogle}>Signin with google</button>
         </div>
        </form>
     </div>
       
        <SignUp />
    </div>
 
  )
}

export default SignIn