import {createContext, useEffect, useState } from "react";

import shop_data from '../shop_data';
import { getCategoriesData } from "../utilits/firebase.utilits";

export const ProductContext = createContext({
    productItem:{}
})

export const ProductCardProvider = (({children})=>{
const [productItem, setProductItem] = useState({})



useEffect(()=>{
  const categoryMap = async ()=>{
   const categoriesData =   await getCategoriesData('categories') 
     setProductItem(categoriesData)
  } 
  categoryMap()
 
},[])

const value = {productItem,setProductItem}
    return <ProductContext.Provider value={value}>
          {children}
    </ProductContext.Provider>
})