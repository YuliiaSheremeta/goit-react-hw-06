import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsSlice from './contactsSlice.js'
import filtersSlice from './filtersSlice.js'

const persistedUserContact = persistReducer(
    {
        key: 'user_contact',
        storage,
        //whitelist :[contacts]
    },
    contactsSlice
);
export const store = configureStore({
    reducer: {
        contacts: persistedUserContact,
        filters: filtersSlice
    }, 
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store);