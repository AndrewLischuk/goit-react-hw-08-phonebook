import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const phoneSlice = createSlice({
  name: 'contacts',
  initialState: [
    {
      name: 'Tommy',
      number: 1245654,
      id: 2321,
    },
  ],
  reducers: {
    addPhoneContact(state, action) {
      return [action.payload, ...state];
    },
    deletePhoneContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const phoneReducer = persistReducer(persistConfig, phoneSlice.reducer);

export const { addPhoneContact, deletePhoneContact } = phoneSlice.actions;
