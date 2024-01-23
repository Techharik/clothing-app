import {CART_ACTION_TYPES} from '../action.types/cart.action.types'


export const cartReducer = (state, action)=>{
 console.log(state) 
    switch(action.type){
       
        case CART_ACTION_TYPES.UPDATE_CART_ITEM:
            return {
                ...state,
                ...action.payload
            }
            
        

        default:
            throw new Error(`unidentified action type is found ${action.type}`)
    }
}