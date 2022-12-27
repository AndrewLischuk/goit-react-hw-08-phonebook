import { createSlice } from '@reduxjs/toolkit';
import {
  userRegistration,
  userLogin,
  userLogOut,
  fetchCurrentUser,
} from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [userRegistration.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLogedIn = true;
      state.token = action.payload.token;
    },
    [userLogin.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLogedIn = true;
      state.token = action.payload.token;
    },
    [userLogOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.isLogedIn = false;
      state.token = null;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLogedIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;

export const getIsLoggedIn = state => state.auth.isLogedIn;
