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
        id: '2321B',
      },
      {
        name: 'Johny',
        number: 1286545654,
        id: '2321C',
      },
    ],
  },
  reducers: {
    addPhoneContact(state, action) {
      state.contacts.push(action.payload);
    },
    deletePhoneContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
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
