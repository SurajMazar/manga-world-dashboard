import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit' // toolkit functions for redux
import rootReducer from './rootReducer' // collection of reducer
import {routerMiddleware} from 'connected-react-router' // route history in redux store
import history from '../utils/history' // history middleware

// store creation
const store = configureStore({
  reducer:rootReducer,
  middleware:[...getDefaultMiddleware(), routerMiddleware(history)],
  devTools: process.env.NODE_ENV !== 'production',
})

export default store