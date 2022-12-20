import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import {
//   fetchingError,
//   fetchingInProgress,
//   fetchingSuccess,
// } from './phoneSlice';

axios.defaults.baseURL = 'https://639f23e35eb8889197f5616a.mockapi.io';

// export const fetchContacts = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());

//     const responce = await axios.get('/contacts');
//     console.log(responce);

//     dispatch(fetchingSuccess(responce.data));
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }
// };

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await axios.get('/contacts');
    return contacts.data;
  }
);

export const addContact = contact => async dispatch => {
  try {
    dispatch(fetchContacts.pending());

    await axios.post('/contacts', contact);
    const responce = await axios.get('/contacts');

    dispatch(fetchContacts.fulfilled(responce.data));
  } catch (error) {
    dispatch(fetchContacts.rejected(error));
  }
  // try {
  //   dispatch(fetchingInProgress());

  //   await axios.post('/contacts', contact);
  //   const responce = await axios.get('/contacts');

  //   dispatch(fetchingSuccess(responce.data));
  // } catch (e) {
  //   dispatch(fetchingError(e.message));
  // }
};

export const deleteContact = id => async dispatch => {
  try {
    dispatch(fetchContacts.pending());

    await axios.delete(`/contacts/${id}`);
    const responce = await axios.get('/contacts');

    dispatch(fetchContacts.fulfilled(responce.data));
  } catch (e) {
    dispatch(fetchContacts.rejected(e.message));
  }
  // try {
  //   dispatch(fetchingInProgress());

  //   await axios.delete(`/contacts/${id}`);
  //   const responce = await axios.get('/contacts');

  //   dispatch(fetchingSuccess(responce.data));
  // } catch (e) {
  //   dispatch(fetchingError(e.message));
  // }
};
