import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./slices/navbarSlice";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    navbarReducer: navbarSlice,
    productReducer: productSlice,
    cartReducer: cartSlice
  },
});
