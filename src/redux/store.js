import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const rootReducer = combineReducers({ 
  auth: authSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware:[thunk]
})

export const persistor = persistStore(store)

