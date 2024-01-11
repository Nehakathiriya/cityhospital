import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isloading: false,
    cart: [],
    error: null,
    count: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        handleDataCart: (state, action) => {
            let index = state.cart.findIndex((v) => v.id === action.payload);
            if (index !== -1) {
                state.cart[index].quantity++;
            } else {
                state.cart.push({ id: action.payload, quantity: 1 });
            }
        },
        decreaseQuantity: (state, action) => {

            let index = state.cart.findIndex((v) => v.id === action.payload);
            state.cart[index].quantity -= 1;

        },
        increaseQuantity: (state, action) => {
            let index = state.cart.findIndex((v) => v.id === action.payload);
            state.cart[index].quantity += 1;

        },
        removerCartData : (state,action) => {
             let updatedCart = state.cart.filter((v) => v.id !== action.payload);
             console.log(updatedCart);

        }

    }
})

export const { handleDataCart, decreaseQuantity, increaseQuantity,removerCartData } = cartSlice.actions;
export default cartSlice.reducer;














































// // cartSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: [],
//   reducers: {
//     addToCart: (state, action) => {
//       const existingItem = state.find((item) => item.id === action.payload.id);

//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     removeFromCart: (state, action) => {
//       return state.filter((item) => item.id !== action.payload);
//     },
//     decreaseQuantity: (state, action) => {
//       const existingItem = state.find((item) => item.id === action.payload);

//       if (existingItem && existingItem.quantity > 1) {
//         existingItem.quantity -= 1;
//       } else {
//         return state.filter((item) => item.id !== action.payload);
//       }
//     },
//     increaseQuantity: (state, action) => {
//       const existingItem = state.find((item) => item.id === action.payload);

//       if (existingItem) {
//         existingItem.quantity += 1;
//       }
//     },
//   },
// });

// export const {
//   addToCart,
//   removeFromCart,
//   decreaseQuantity,
//   increaseQuantity,
// } = cartSlice.actions;
// export default cartSlice.reducer;


// // store.js
// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice";

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// export default store;



// // AddToCart.js
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   addToCart,
//   removeFromCart,
//   decreaseQuantity,
//   increaseQuantity,
// } from "./cartSlice";
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import DeleteIcon from '@mui/icons-material/Delete';

// function AddToCart() {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   const handleDec = (id) => {
//     dispatch(decreaseQuantity(id));
//   };

//   const handleInc = (id) => {
//     dispatch(increaseQuantity(id));
//   };

//   const handleRemove = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   return (
//     // Your component JSX here
//   );
// }

// export default AddToCart;


