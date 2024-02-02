
import { PRODUCT_ACTIONTYPES } from '../store/product/product.action.js';
import { getCategoriesData } from './firebase.utilits.js';



export const fetchCategory = ()=> {
    return async (dispatch) =>{
        dispatch({
          type:PRODUCT_ACTIONTYPES.PRODUCT_CATEGORY_START
        })
         
        try{
          const data = await getCategoriesData('categories')
          dispatch({
            type:PRODUCT_ACTIONTYPES.PRODUCT_CATEGORY_SUCCESS,
            payload:data
          })
        }catch(err){
           dispatch({
            type:PRODUCT_ACTIONTYPES.PRODUCT_CATEGORY_ERROR,
            payload:err
           })
        }
    
}

}