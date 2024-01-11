import { combineReducers } from "redux";
// import { counterReducer } from "./counter.reducer";
import { medicinesReducer } from "./medicine.reducer";
import { facilitiesReducer } from "./facilities.reducer";
import counterSlice from "../slice/counter.slice";
import cartSlice from "../slice/addToCart.slice";


export const rootReducer = combineReducers({
    // counter: counterReducer,
    counter: counterSlice,
    medicines: medicinesReducer,
    facilities: facilitiesReducer,
    cart: cartSlice

})
