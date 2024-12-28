import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import authReducer from './features/authSlice';
import itemsReducer from './features/itemsSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    items: itemsReducer,
  },
});

export default store;