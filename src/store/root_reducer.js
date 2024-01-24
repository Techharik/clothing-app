import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { productReducers } from "./product/product.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
    user:userReducer,
    product: productReducers,
    cart :cartReducer
})