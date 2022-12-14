import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const phoneSlice = createSlice({
  name: 'phoneBook',
  initialState: {
    contacts: [
      {
        name: 'Tommy',
        number: 1245654,
        id: 2321,
      },
      {
        name: 'Johny',
        number: 1286545654,
        id: 2376521,
      },
    ],
  },
  reducers: {
    addPhoneContact(state, action) {
      console.log(state);
      // return [action.payload, ...state.phoneBook];
      // state.phoneBook.contacts.push(action.payload);
    },
    deletePhoneContact(state, action) {
      console.log(state);
      console.log(action.payload);
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'phoneBook',
  storage,
};

export const phoneReducer = persistReducer(persistConfig, phoneSlice.reducer);

export const { addPhoneContact, deletePhoneContact } = phoneSlice.actions;

export const getContacts = state => state.phoneBook.contacts;
