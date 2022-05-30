import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { AUTH_INITIAL_STATE } from "./auth.data";
import { AuthState } from "./auth.interface";

export const authSlice = createSlice({
  name: "auth",
  initialState: AUTH_INITIAL_STATE,
  reducers: {
    authenticateUser: (state, action: PayloadAction<AuthState>) => {
      state = { ...action.payload };
    },
    logout: (state) => {
      state = AUTH_INITIAL_STATE;
    },
  },
});

export const { authenticateUser, logout } = authSlice.actions;

export const selectAuthState = (state: RootState) => state.auth;


