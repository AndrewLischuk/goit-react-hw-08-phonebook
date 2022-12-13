import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterValue(_, action) {
      return action.payload;
    },
  },
});

export const { filterValue } = filterSlice.actions;

export const getFilter = state => state.filter;
