import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { filterSlice } from './filterSlice';
import { phoneReducer } from './phoneSlice';

export const store = configureStore({
  reducer: {
    phoneBook: phoneReducer,
    filter: filterSlice.reducer,
  },
});

export const persistor = persistStore(store);
