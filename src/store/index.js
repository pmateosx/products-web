import { configureStore } from '@reduxjs/toolkit';
import productsListReducer from './features/products/productsListSlice';

export const store = configureStore({
  reducer: {
    productsList: productsListReducer,
  },
});
