import SignIn from "./auth/authentication/SignIn";
import Home from "./routes/Home";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";


const App = () => {
return(
  <Routes>
    <Route path="/" element={<Navigation />} >
         <Route index  element={<Home />} />
         <Route path="/shop" element={<Shop />} />
    <Route path="/sign-in" element={<SignIn  />} />
    </Route>
    <Route path='/checkout' element={<Checkout />} />
  </Routes>
) 
};

export default App;