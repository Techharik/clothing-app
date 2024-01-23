import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { productReducers } from "./product/product.reducer";

export const rootReducer = combineReducers({
    user:userReducer,
    product: productReducers
})