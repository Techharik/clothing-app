import { PRODUCT_ACTIONTYPES } from "./product.action";

const INITIAL_STATE = {
    productItem:{}
}

export const productReducers = (state= INITIAL_STATE, action ={})=>{
    const {type , payload } =action;

    switch(type){
        case PRODUCT_ACTIONTYPES.ADD_PRDOCUT_CATEGORY:
            return {
                ...state,
                productItem:payload
            }
        default:
            return state;
    }
}