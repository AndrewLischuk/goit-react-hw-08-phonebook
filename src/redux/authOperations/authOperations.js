import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

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

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('token is undefined');
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
