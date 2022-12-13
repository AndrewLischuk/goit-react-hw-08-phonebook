import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

export const addPhoneContact = createAction('contacts/Phone');
export const deletePhoneContact = createAction('contacts/deleteContact');

export const filterValue = createAction('filter/filterValue');

const phoneReducer = createReducer([], {
  [addPhoneContact]: (state, action) => [action.payload, ...state],
  [deletePhoneContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filterReducer = createReducer('', {
  [filterValue]: (state, action) => action.payload,
});

export const store = configureStore({
  reducer: {
    contacts: phoneReducer,
    filter: filterReducer,
  },
});
