



import { configureStore} from "@reduxjs/toolkit";
// import cartReducer from "./cartRedux";
// import userReducer from "./userRedux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";




import authReducer from '../redux/auth/authSlice'
import cartReducer from '../redux/cart/cartSlice'




const persistConfig = {
  key: "cart",
  version: 1,
  storage,
};

// const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

const persistedReducer = persistReducer(persistConfig, cartReducer);

// const persistedCourseReducer = persistReducer(persistConfig, userCourseSlice);

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
