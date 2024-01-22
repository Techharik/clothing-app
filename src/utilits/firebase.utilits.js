
// Import auth and auth provider from firebase documentation.
import { 
   getAuth,
   signInWithPopup,
   GoogleAuthProvider,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged
   } from "firebase/auth";

import { initializeApp } from "firebase/app";

// Firestore Database  
import { getFirestore, doc, setDoc , getDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";

// Special Configurations Given to the App
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
//Initialize the firestore
const db = getFirestore(app);


export const auth = getAuth();
const GoogleUserAuthProvider = new GoogleAuthProvider();

//Optional Paramters
GoogleUserAuthProvider.setCustomParameters({
    prompt: 'select_account'
});

//A functional return the signInWithPopup
export const createUserWithAuthProvider = async () =>{
 return signInWithPopup(auth,GoogleUserAuthProvider)
}


export const createUserWithGoogleData = async(userAuth,additionalInfo)=>{
  //creating a document in the container using doc method.
  const userCredentials = doc( db, 'user', userAuth?.uid)
  //getdoc is  used to find the value in document
  const userSnapshot = await getDoc(userCredentials)


  // console.log(userSnapshot.exists())

  if(! userSnapshot.exists()){
    const createdAt = new Date();
     

    try{
      // setting the value inside the user document
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

//using signIn with email and password
export const authSignIn =async ({email,password})=>{
    if(! email | !password) return
 return  await  signInWithEmailAndPassword(auth,email,password)
}

//signOut from the current sessions.
export const signOutUser = ()=> signOut(auth)

//Maintaining
export const onAuthStateChangedUser = (clback)=>{
  return onAuthStateChanged(auth,clback)
}



//collection and batch writing

export const addCollectionDoc = async(collectionkey,objectToAdd)=>{
  const collectionRef = collection(db,collectionkey)

  const batch = writeBatch(db)
  
  objectToAdd.forEach((object)=>{
      const docRef = doc(collectionRef,object.title.toLowerCase())

      batch.set(docRef,object)
  })

  await batch.commit()
  console.log("done")
 
}


//getting data form the firestore databse:

export const getCategoriesData =async (name)=>{
  const collectionRef = collection(db, 'categories')
  const querySnapshot = await getDocs(collectionRef)

 const categoryMap =  querySnapshot.docs.reduce((acc, value)=>{
          const {title , items} = value.data()
          acc[title.toLowerCase()] =items;
          return acc;
  },{})

  return categoryMap
}