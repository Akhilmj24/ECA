import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product:productSlice
  },
});
