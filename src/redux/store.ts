import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersSlice from './usersSlice';


const rootReducer = combineReducers({
  users: usersSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});