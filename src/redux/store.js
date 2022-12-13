import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { filterSlice } from './filterSlice';
import { phoneReducer } from './phoneSlice';

export const store = configureStore({
  reducer: {
    contacts: phoneReducer,
    filter: filterSlice.reducer,
  },
});

export const persistor = persistStore(store);
