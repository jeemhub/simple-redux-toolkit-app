import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CountSlice'
import productSlice from './productSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    product:productSlice,
  },
})
export default store;