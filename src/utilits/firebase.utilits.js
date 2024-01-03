
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc , getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlKPn46Mihq3pudoD08h79hDvUWk1s14o",
  authDomain: "clothing-90cb8.firebaseapp.com",
  projectId: "clothing-90cb8",
  storageBucket: "clothing-90cb8.appspot.com",
  messagingSenderId: "364808005474",
  appId: "1:364808005474:web:b499bd71acd2a051172e3b",
  measurementId: "G-Y9SXGV2MS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


export const auth = getAuth();
const GoogleUserAuthProvider = new GoogleAuthProvider();

GoogleUserAuthProvider.setCustomParameters({
    prompt: 'select_account'
});


export const createUserWithAuthProvider =async()=>{
 return signInWithPopup(auth,GoogleUserAuthProvider)
}


export const createUserWithGoogleData = async(userAuth,additionalInfo)=>{
  const userCredentials = doc( db, 'user', userAuth?.uid)
  const userSnapshot = await getDoc(userCredentials)


  console.log(userSnapshot.exists())

  if(! userSnapshot.exists()){
    const createdAt = new Date();
     

    try{
       await setDoc(userCredentials,{
            displayName: userAuth.displayName,
            email:userAuth.email,
            createdAt,
            ...additionalInfo
         })


    }catch(e){
        console.log('error creating user'+e.message)
    }
  }else{
    return userCredentials
  }
}


export const authSignIn =async ({email,password})=>{
    if(! email | !password) return
 return  await  signInWithEmailAndPassword(auth,email,password)
}