import { createSlice } from '@reduxjs/toolkit';

export const phoneSlice = createSlice({
  name: 'phoneBook',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactReducer = phoneSlice.reducer;

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  phoneSlice.actions;

export const getContacts = state => state.phoneBook;
