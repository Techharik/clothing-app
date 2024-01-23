import { createContext, useEffect, useReducer, useState } from "react";


import { CART_ACTION_TYPES } from "../utilits/action.types/cart.action.types";
import { cartReducer } from "../utilits/reducer/cart.reducer";

// const addCount =(cartItem)=>{
//  let count = cartItem.reduce((total,cartit)=>{
//      return total + cartit.quantity;
//   },0)
// //   console.log(count)
//   return count;
// }

function addCartItem (cartItem,AddProduct){
    // console.log(AddProduct)
    const {id,name,imageUrl,price}= AddProduct
    const AddItem ={
        id,
        title:name,
        imageUrl,
        price,
        quantity:1
    }
    // If the prduct is already exists
    const exitingItem = cartItem.find((item)=>{
       return item.id === AddItem.id
    })
    //if exists increases only quantity
    if(exitingItem) {
     return cartItem.map((cart)=> {
        if(cart.id === AddItem.id){
          return  {
            ...cart,
            quantity:cart.quantity+1
            }
        }
        return cart
     }
    
     )
    
    }

    //if not exists add item to product.
    return [...cartItem,{...AddItem}]
}

function decItem(cartItem,AddProduct){
    // If the prduct is already exists
    const exitingItem = cartItem.find((item)=>{
       return item.id === AddProduct.id
    })
    //if exists increases only quantity
    if(exitingItem) {
     if(exitingItem.quantity != 1){
        return cartItem.map((cart)=> {
            if(cart.id === AddProduct.id){
              return  {
                ...cart,
                quantity:cart.quantity-1
                }
            }
            return cart
         }
        
         )
     }   
     
    
    }
    if(exitingItem.quantity ===1){
       return cartItem.filter((cart)=>{
        return cart.id != exitingItem.id
       })
    }
}

const removeCartItem =(cartItem,AddProduct)=>{
    // find the particulat product remove the item form the product return new array
    return cartItem.filter((item)=> item.id != AddProduct.id)

}

// const countTotal = (cartItem)=>{
//      let total = cartItem.reduce((total,cartIt)=>{
//         return total+(cartIt.price*cartIt.quantity)
//      },0)

//      return total;
// }


export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemtoCart:()=>{},
    cartCount:0,
    totalValue:0
})
const INITIAL_VALUE = {
    isCartOpen:false,
    cartCount:0,
    totalValue:0,
    cartItem:[],
}

export const CartContextProvider =({children})=>{
const {UPDATE_CART_ITEM,REMOVE_CART_ITEM}=CART_ACTION_TYPES
const [state, dispatch] = useReducer(cartReducer,INITIAL_VALUE)
const {cartCount,totalValue,cartItem}=state

const [isCartOpen,setIsCartOpen] =useState(false)



const updateCartReducer = (newCartItem)=>{
    const newCount =  newCartItem.reduce((total,CartItem)=>{
        return total + CartItem.quantity;
     },0)

    const newTotalValue = newCartItem.reduce((total,cartIt)=>{
        return total+(cartIt.price*cartIt.quantity)
     },0)

     dispatch(
    {
        type: UPDATE_CART_ITEM,
        payload:{
            cartItem:newCartItem,
            totalValue:newTotalValue,
            cartCount:newCount
        }
    }
     )

}





const addItemtoCart = (productToAdd)=>{
 const newCartItem = addCartItem(cartItem,productToAdd)
 updateCartReducer(newCartItem) 
}

const decAndRemoveItem = (Product)=>{
    updateCartReducer(decItem(cartItem,Product)) 
}

const removeItemToCart =(deleteProduct)=>{
    updateCartReducer(removeCartItem(cartItem,deleteProduct))
 
}



const value = 
{
    isCartOpen,
    setIsCartOpen,
    addItemtoCart,
    cartItem,
    cartCount,
    removeItemToCart,
    decAndRemoveItem,
    totalValue
}



return <CartContext.Provider value={value}>
          {children}
       </CartContext.Provider>
}