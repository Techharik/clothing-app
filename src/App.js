import SignIn from "./auth/authentication/SignIn";
import Home from "./routes/Home";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";


const App = () => {
return(
  <Routes>
    <Route path="/" element={<Navigation />} >
         <Route index  element={<Home />} />
         <Route path="/shop" element={<h3>I am in shop</h3>} />
    <Route path="/sign-in" element={<SignIn  />} />
    </Route>
  </Routes>
) 
};

export default App;