import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    amount: 0,
    total: 0,
    showMore: 3,
    filtered: "all",
  },
  reducers: {
    addToCart: (state, action) => {
      const cartItem = state.data.find((item) => {
        return item.id === action.payload.id;
      });
      if (cartItem) {
        cartItem.count++;
        state.amount++;
        state.total += action.payload.price;
      } else {
        state.data.push(action.payload);
        state.amount++;
        state.total += action.payload.price;
      }
    },

    setShowMore: (state, action) => {
      state.showMore =
        action.payload > state.showMore
          ? state.showMore + 3
          : state.showMore + 0;
    },
    setFiltered: (state, action) => {
      state.filtered = action.payload;
    },
    increament: (state, action) => {
      const cartItem = state.data.find((item) => {
        return item.id === action.payload.id;
      });
      cartItem.count++;
      state.amount++;
      state.total += action.payload.price;
    },

    decreament: (state, action) => {
      const cartItem = state.data.find((item) => {
        return item.id === action.payload.id;
      });
      if (cartItem.count > 1) {
        cartItem.count--;
        state.amount--;
        state.total -= action.payload.price;
      }
    },

    removeFromCart: (state, action) => {
      state.data = state.data.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.total = state.total - action.payload.price * action.payload.count;
      state.amount = state.amount - action.payload.count;
    },
  },
});

export const {
  addToCart,
  setShowMore,
  setFiltered,
  increament,
  decreament,
  removeFromCart,
} = productSlice.actions;

export default productSlice.reducer;
