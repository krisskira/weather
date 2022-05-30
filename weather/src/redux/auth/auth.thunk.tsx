import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthState } from "./auth.interface";

export const authenticateUser = createAsyncThunk<unknown, AuthState>(
  "auth/authenticateUser",
  async (payload, thunkAPI) => {
    localStorage.setItem("token", payload.token ?? "");
    thunkAPI.dispatch(authenticateUser(payload));
    return payload;
  }
);
