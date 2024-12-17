import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk for signIn
export const signIn = createAsyncThunk('auth/signIn', async (credentials) => {
  // Your sign-in logic here, e.g., API call
  // return response.data; // Example return statement
});

// Define the async thunk for signUp
export const signUp = createAsyncThunk('auth/signUp', async (userData) => {
  // Your sign-up logic here, e.g., API call
  // return response.data; // Example return statement
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
    updateUser: (state, action) => {
      state.currentUser = { ...state.currentUser, ...action.payload };
    },
    clearUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { setUser, updateUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

