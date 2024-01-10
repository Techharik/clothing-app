import {createContext, useState } from "react";

import productsList from '../shop_data.json';

export const ProductContext = createContext({
    productItem:[]
})

export const ProductCardProvider = (({children})=>{
const [productItem, setProductItem] = useState(productsList)

const value = {productItem,setProductItem}
    return <ProductContext.Provider value={value}>
          {children}
    </ProductContext.Provider>
})