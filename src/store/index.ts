import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {articlesAPI} from '../services/ArticlesService';
import bookmarksSlicer from './slices/bookmarks/slicer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const rootReducer = combineReducers({
  bookmarks: bookmarksSlicer,
  [articlesAPI.reducerPath]: articlesAPI.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(articlesAPI.middleware),
  });
};

export const store = createStore();
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
