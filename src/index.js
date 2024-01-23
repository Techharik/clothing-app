import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user.context';

import reportWebVitals from './reportWebVitals';
import { ProductCardProvider } from './context/product.context';
import { CartContextProvider } from './context/cart.context';



import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter> 
    {/* <UserProvider> */}
    <Provider store= {store}>
      {/* <ProductCardProvider> */}
        <CartContextProvider >
          <App />
        </CartContextProvider>
      {/* </ProductCardProvider> */}
      </Provider>
    {/* </UserProvider> */}
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
