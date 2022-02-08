import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import productReducer from '../features/productSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    productInfo: productReducer
  },
});
