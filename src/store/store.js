import { createStore ,compose , applyMiddleware} from "redux";

import logger from "redux-logger";
import { rootReducer } from "./root_reducer";


const middleWares = [ logger ];

const composeMiddleWares = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer,undefined,composeMiddleWares)
