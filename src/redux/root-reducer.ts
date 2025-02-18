import { combineReducers } from "redux";
import { userReducer } from "./userReducer/reducer";

import { cartSlice } from "./Cart/cart-slice";

export const rootReducer =  combineReducers({
   userReducer, 
   cartReducer: cartSlice.reducer,
})

export type RootReducer = ReturnType<typeof rootReducer>