import { createStore ,compose , applyMiddleware} from "redux";

import logger from "redux-logger";
import { rootReducer } from "./root_reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import  {thunk}  from "redux-thunk";

//! need  to run logger only in development not in productions
const middleWares = [process.env.NODE_ENV !== 'production' && logger , thunk].filter((b)=>b)

// console.log(middleWares)
const persistCoonfig = {
    key : 'root',
    storage,
    blacklist:['user',"product"]
}


const composedMiddleWares = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const composeMiddleWares = composedMiddleWares(applyMiddleware(...middleWares))

const persistReducers = persistReducer(persistCoonfig,rootReducer)

export const store = createStore(persistReducers,undefined,composeMiddleWares)

export const persistStores = persistStore(store)
