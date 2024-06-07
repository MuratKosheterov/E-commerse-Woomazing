import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartOpen: false
    },
    reducers: {
        toggleCart: (state) => {
            state.cartOpen =!state.cartOpen;
        }   
    }
})

export const { toggleCart } = cartSlice.actions;
export default cartSlice.reducer;