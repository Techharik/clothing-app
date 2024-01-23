import SignIn from "./auth/authentication/SignIn";
import Home from "./routes/Home";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import Category from "./components/single-category/single.category";

import {  useEffect } from "react";
import { onAuthStateChangedUser } from "./utilits/firebase.utilits";

import { UseDispatch, useDispatch } from "react-redux";

import { USER_ACTION_TYPES } from "./store/user/user.action";

const App = () => {
 const dispatch = useDispatch()


  useEffect(()=>{
    const unsubscribe = onAuthStateChangedUser((user)=>{
          dispatch({
            type:USER_ACTION_TYPES.SET_CURRENT_USER,
            payload:user
          })
    }) 

    return unsubscribe
  },[])

return(
  <Routes>
    <Route path="/" element={<Navigation />} >
         <Route index  element={<Home />} />
         <Route path="shop/" element={<Shop />} />
         <Route path='shop/:category' element={<Category />} />
          
         <Route path="/sign-in" element={<SignIn  />} />
    </Route>
    <Route path='/checkout' element={<Checkout />} />
  </Routes>
) 
};

export default App;