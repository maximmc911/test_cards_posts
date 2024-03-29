import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { reducer as getPosts } from "./getPosts/getPosts";
const redusers = combineReducers({
  getPosts: getPosts,
});

export const store = configureStore({
  reducer: redusers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
