import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartCount:0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartCount = action.payload;
      window.location.href = '/AnalyticsProject/thankyou';
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const cart = cartSlice.reducer;