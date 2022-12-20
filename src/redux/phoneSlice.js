import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

export const phoneSlice = createSlice({
  name: 'phoneBook',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      return { ...state, items: [], isLoading: true, error: null };
    },
    [fetchContacts.fulfilled]: (state, action) => {
      return { ...state, items: action.payload, isLoading: false, error: null };
    },
    [fetchContacts.rejected]: (state, action) => {
      return { ...state, items: [], isLoading: false, error: action.error };
    },
  },
  // reducers: {
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.items = action.payload;
  //     state.error = null;
  //   },
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});

export const contactReducer = phoneSlice.reducer;

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   phoneSlice.actions;

export const getContacts = state => state.phoneBook;
