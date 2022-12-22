import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://639f23e35eb8889197f5616a.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await axios.get('/contacts');
    return contacts.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number, id }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number, id });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
