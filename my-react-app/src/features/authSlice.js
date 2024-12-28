import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('currentUser')) || null,
  isAuthenticated: !!localStorage.getItem('currentUser'),
  error: null,
  loading: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem('currentUser', JSON.stringify(action.payload));
    },
    signUp: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem('currentUser', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem('currentUser');
    },
    updateProfile: (state, action) => {
      const updatedUser = { ...state.user, ...action.payload };
      state.user = updatedUser;
      
      // Update both in localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const updatedUsers = users.map(user => 
        user.id === updatedUser.id ? updatedUser : user
      );
      
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
});

export const { 
  signIn, 
  signUp, 
  logout, 
  updateProfile, 
  setError, 
  clearError 
} = authSlice.actions;

export default authSlice.reducer;