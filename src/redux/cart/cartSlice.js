import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    open: false,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price;
    },
    removeProduct: (state, action) => {
        state.quantity -= 1;
        state.products = state.products.filter((course)=> course._id !== action.payload.courseId);
        // state.courses = state.courses.filter((course)=> course._id !== action.payload)
        state.total -= action.payload.price;
      },
    cleanCart: (state, action) => {
        state.quantity = 0;
        state.products = [];
        // state.courses = state.courses.filter((course)=> course._id !== action.payload)
        state.total = 0;
      },
    cartState: (state, action) => {
        state.open = !state.open;
     
    },
  },
});

export const { addProduct, removeProduct, cleanCart, cartState } = cartSlice.actions;
export default cartSlice.reducer;