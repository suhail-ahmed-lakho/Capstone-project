// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';
import itemsReducer from '../features/itemsSlice'; // Import the items reducer

const store = configureStore({
  reducer: {
    cart: cartReducer,
    items: itemsReducer, // Add items reducer here
  },
});

export default store;