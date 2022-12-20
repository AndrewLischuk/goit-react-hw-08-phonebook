import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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
    // addPhoneContact(state, action) {
    //   state.contacts.push(action.payload);
    // },
    // deletePhoneContact(state, action) {
    //   const index = state.contacts.findIndex(
    //     contact => contact.id === action.payload
    //   );
    //   state.contacts.splice(index, 1);
    // },
  },
});

// const persistConfig = {
//   key: 'phoneBook',
//   storage,
// };

// export const phoneReducer = persistReducer(persistConfig, phoneSlice.reducer);

export const contactReducer = phoneSlice.reducer;

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  // addPhoneContact,
  // deletePhoneContact,
} = phoneSlice.actions;

export const getContacts = state => state.phoneBook;
