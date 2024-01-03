import React, { useState } from 'react'
import { createUserWithGoogleData } from '../../../utilits/firebase.utilits'
import { auth } from '../../../utilits/firebase.utilits'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import './SignUp.styles.scss'

const defaultUserData = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUp = () => {
  const [formfield, setFormfield] =useState(defaultUserData)
  const {displayName,email,password,confirmPassword}= formfield;

  const resetValue =()=> {
    setFormfield(defaultUserData)
  }


  const handleSubmit =async(event)=>{
    event.preventDefault()
    if(password !== confirmPassword)return alert('password mismatch')
    const {user} = await createUserWithEmailAndPassword(auth, email,password)
   await createUserWithGoogleData(user,{displayName})
resetValue()
  }

  const handleChange=(event)=>{
    
    const {name, value} =event.target 

    setFormfield({...formfield,[name]:value})


  }

  return (
    <form onSubmit={(e)=>{handleSubmit(e)}} className='sign-up-container '>
      <div className='group'>

         <label for='displayName' >Name</label>
         <input 
         type='text' 
         className='form-input'
         name='displayName'
         placeholder='Enter an Name'
         value={displayName}
         onChange={handleChange}
         />
         <label for='email' >Email</label>
         <input 
         type='email' 
         name='email'
         className='form-input'
         placeholder='Enter an email address'
         value={email}
         onChange={handleChange}

         />
         <label for='password' >Password</label>
         <input 
         type='text' 
         name='password' 
         className='form-input'
         placeholder='Enter an Password'
         value={password}
         onChange={handleChange}

         />
         <label for='confirmPassword' >Confirm Password</label>
         <input 
         type='text' 
         name='confirmPassword' 
         className='form-input'
         placeholder='Enter an confirm Password' 
         value={confirmPassword}
         onChange={handleChange}

         />
        <button type='submit' >SignUp</button>
        </div>

    </form>
  )
}

export default SignUp