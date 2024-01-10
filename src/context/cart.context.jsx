import { createContext, useEffect, useState } from "react";


const addCount =(cartItem)=>{
 let count = cartItem.reduce((total,cartit)=>{
     return total + cartit.quantity;
  },0)
//   console.log(count)
  return count;
}

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

const countTotal = (cartItem)=>{
     let total = cartItem.reduce((total,cartIt)=>{
        return total+(cartIt.price*cartIt.quantity)
     },0)

     return total;
}


export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItem:[],
    addItemtoCart:()=>{},
    cartCount:0,
    totalValue:0
})


export const CartContextProvider =({children})=>{
const [isCartOpen,setIsCartOpen] =useState(false)
const [cartItem,setCartItem] = useState([])
const [cartCount,setcartCount] =useState(0)
const [totalValue,setTotalValue] =useState()


const TotalValue = (cartItem)=>{
    setTotalValue(countTotal(cartItem))
}

const addItemtoCart = (productToAdd)=>{
 setCartItem(addCartItem(cartItem,productToAdd)) 
}

const decAndRemoveItem = (Product)=>{
    setCartItem(decItem(cartItem,Product)) 
}

const removeItemToCart =(productToAdd)=>{
    setCartItem(removeCartItem(cartItem,productToAdd))
}

useEffect(()=>{
    addCartCountQunatity(cartItem);
    TotalValue(cartItem)
},[cartItem])

const addCartCountQunatity = (cartItem)=>{
    setcartCount(addCount(cartItem));
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