import { createSlice } from "@reduxjs/toolkit";

const initState = {
    cart : []
}

const cartSlice = createSlice ({
    name : 'cart',
    initialState : initState ,
    reducers ; {
        
    }

})














































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


