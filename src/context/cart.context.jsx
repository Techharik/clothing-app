import { createContext, useState } from "react";
import CartItem from "../components/CartItem/CartItem.component";



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


export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItem:[],
    addItemtoCart:()=>{}
})


export const CartContextProvider =({children})=>{
const [isCartOpen,setIsCartOpen] =useState(false)
const [cartItem,setCartItem] = useState([])

const addItemtoCart = (productToAdd)=>{
 setCartItem(addCartItem(cartItem,productToAdd)) 

}


const value = {isCartOpen,setIsCartOpen,addItemtoCart,cartItem}



return <CartContext.Provider value={value}>
          {children}
</CartContext.Provider>
}