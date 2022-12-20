import axios from 'axios';
import {
  fetchingError,
  fetchingInProgress,
  fetchingSuccess,
} from './phoneSlice';

axios.defaults.baseURL = 'https://639f23e35eb8889197f5616a.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());

    const responce = await axios.get('/contacts');
    console.log(responce);

    dispatch(fetchingSuccess(responce.data));
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};

export const addContact = contact => async dispatch => {
  try {
    dispatch(fetchingInProgress());

    await axios.post('/contacts', contact);
    const responce = await axios.get('/contacts');

    dispatch(fetchingSuccess(responce.data));
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};

export const deleteContact = id => async dispatch => {
  try {
    dispatch(fetchingInProgress());

    await axios.delete(`/contacts/${id}`);
    const responce = await axios.get('/contacts');

    dispatch(fetchingSuccess(responce.data));
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};
