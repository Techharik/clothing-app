import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedUser } from "../utilits/firebase.utilits";

export const userContext = createContext({
 currentUser:null,
 setCurrentUser:()=>null
})


export const UserProvider = ({children})=>{
      const [currentUser,setCurrentUser]=useState(null)
      const value = {currentUser,setCurrentUser}
      
      useEffect(()=>{
        const unsubscribe = onAuthStateChangedUser((u)=>{
              setCurrentUser(u)
        }) 

        return unsubscribe
      },[])

    return   <userContext.Provider value={value}> 
             {children} 
            </userContext.Provider>
}