

function addCartItem (cartItem,AddProduct){
    // console.log(cartItems)
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

export const removeCartItem =(cartItem,AddProduct)=>{
    // find the particulat product remove the item form the product return new array
    return cartItem.filter((item)=> item.id != AddProduct.id)

}


export const addItemtoCart = (cartItems,productToAdd)=>{
//    console.log(cartItem)
     const newCartItem = addCartItem(cartItems,productToAdd)
     return newCartItem
   }
   
// export   const decAndRemoveItem = (Product)=>{
//        updateCartReducer(decItem(cartItem,Product)) 
//    }
   
// export   const removeItemToCart =(deleteProduct)=>{
//        updateCartReducer(removeCartItem(cartItem,deleteProduct))
    
//    }