import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

export const addPhoneContact = createAction('contacts/Phone');
export const deletePhoneContact = createAction('contacts/deleteContact');

const phoneReducer = createReducer([], {
  [addPhoneContact]: (state, action) => [action.payload, ...state],
  [deletePhoneContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

export const store = configureStore({
  reducer: {
    contacts: phoneReducer,
  },
});
