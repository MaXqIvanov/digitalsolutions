import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postsSlice from './postsSlice';
import usersSlice from './usersSlice';

const rootReducer = combineReducers({
  users: usersSlice,
  posts: postsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
