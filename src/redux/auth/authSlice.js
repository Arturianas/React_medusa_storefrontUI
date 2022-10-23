import { createSlice } from "@reduxjs/toolkit";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))



export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  },
  reducers: {
    //  login
    loginStart: (state) => {
        state.isLoading = true;
      },
      loginSuccess: (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      },
      loginFailure: (state) => {
        state.isLoading = false;
        state.isError = true;
      },
      // Register
      registerStart: (state) => {
        state.isLoading = true;
      },
      registerSuccess: (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      },
      registerFailure: (state) => {
        state.isLoading = false;
        state.isError = true;
      },
    //   Logout
      logout: (state) => {
        state.user = null;
      },
  },
});

export const {
loginStart,
loginSuccess,
loginFailure,
registerStart,
registerSuccess,
registerFailure,
logout,
} = authSlice.actions;

export default authSlice.reducer;