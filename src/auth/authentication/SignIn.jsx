import React from 'react'

import { createUserWithAuthProvider ,createUserWithGoogleData} from '../../utilits/firebase.utilits'

const SignIn = () => {

const logInWithGoogle = async()=>{
    const {user} = await createUserWithAuthProvider()
    createUserWithGoogleData(user)
}

  return (
    <div>
        <button onClick={logInWithGoogle}>Signin with google</button>
    </div>
  )
}

export default SignIn