import axios from "axios";
// import { axiosInstance } from "../../project44-config.js";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout
  } from "./authSlice.js";

// API requests






  export const login = async (dispatch, userData) => {
    dispatch(loginStart());
    try {
        const response = await axios.post('/auth/login', userData)

        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data))
          }

      dispatch(loginSuccess(response.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  };




  export const register = async (dispatch, userData) => {
    dispatch(registerStart());
    try {
        const response = await axios.post('/auth/register', userData)

        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data))
          }
          
      dispatch(registerSuccess(response.data));
    } catch (err) {
      dispatch(registerFailure());
    }
  };


  export const Logout = (dispatch) => {
      localStorage.removeItem('user')
      dispatch(logout())
      
    }