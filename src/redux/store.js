import { configureStore, createReducer } from '@reduxjs/toolkit';

const phoneReducer = createReducer(0, {});

export const store = () =>
  configureStore({
    reducer: {
      contacts: phoneReducer,
    },
  });
