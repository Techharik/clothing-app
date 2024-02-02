import { PRODUCT_ACTIONTYPES } from "./product.action";

const INITIAL_STATE = {
    productItem:{},
    isLoading:false,
    error:null,
}

export const productReducers = 
    (
    state= INITIAL_STATE, action ={}
    ) => {

    const {type , payload } =action;

    switch(type){

        case PRODUCT_ACTIONTYPES.PRODUCT_CATEGORY_START:
            return {
                ...state,
                isLoading:true
            }

        case PRODUCT_ACTIONTYPES.PRODUCT_CATEGORY_SUCCESS:
            return {
                ...state,
                productItem:payload,
                isLoading:false
            }
     
        case PRODUCT_ACTIONTYPES.PRODUCT_CATEGORY_ERROR:
            return{
                ...state,
                error:payload,
                isLoading:false
            }

        default:
            return state;

    }
}