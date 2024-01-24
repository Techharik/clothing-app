import { CART_ACTION_TYPES } from "../../utilits/action.types/cart.action.types";





const INITIAL_VALUE = {
    isCartOpen:false,
    cartItems: [],
}



export const cartReducer = (state = INITIAL_VALUE,action ={})=>{
    const {type , payload} = action;

    switch(type){
        case CART_ACTION_TYPES.UPDATE_CART_ITEM:
            return {
                ...state,
                cartItems:payload
            }
        case CART_ACTION_TYPES.IS_CART_OPEN:
            return {
                ...state,
                isCartOpen:!state.isCartOpen
            }
        default : 
        return state;
    }
}