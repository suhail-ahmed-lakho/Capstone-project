import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../../features/cartSlice';
import itemsReducer from '../../features/itemsSlice'; // Import the items reducer

const store = configureStore({
  reducer: {
    cart: cartReducer,
    items: itemsReducer, // Ensure items reducer is added here
  },
});

export default store; // Ensure this line is present
