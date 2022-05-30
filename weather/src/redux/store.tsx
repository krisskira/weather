import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/auth.slice";

export const REDUX_STORE = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof REDUX_STORE.getState>;
export type AppDispatch = typeof REDUX_STORE.dispatch;
