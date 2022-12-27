import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://639f23e35eb8889197f5616a.mockapi.io';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
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

export const userRegistration = createAsyncThunk(
  'users/signup',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post(`/users/signup`, userData);
      token.set(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  'users/login',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post(`/users/login`, userData);
      token.set(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const userLogOut = createAsyncThunk(
  'users/logout',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post(`/users/logout`, userData);
      token.unset();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'users/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    console.log(thunkAPI.getState(), '92');
    console.log(persistedToken, '93');

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('token is undefined');
    }
    token.set(persistedToken);
    console.log(persistedToken, '99');
    console.log(thunkAPI.getState(), '100');
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
