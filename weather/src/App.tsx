import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { REDUX_STORE } from "./redux/store";
import {
  SignupScreen,
  LoginScreen,
  DashboardScreen,
  NotFoundScreen,
} from "./screens";
import { ROUTES } from "./settings";
import { APP_THEME } from "./settings/theme";

export const App = () => (
  <React.StrictMode>
    <Provider store={REDUX_STORE}>
      <ThemeProvider theme={APP_THEME}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate to={ROUTES.dashboard} />} />
            <Route path={ROUTES.sigup} element={<SignupScreen />} />
            <Route path={ROUTES.login} element={<LoginScreen />} />
            <Route path={ROUTES.dashboard} element={<DashboardScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

export default App;
