import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  InputAdornment,
  Paper,
  TextField,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ROUTES } from "../../settings";
import { useLoginScreen } from "./login.hook";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const LoginScreen: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const theme = useTheme();
  const { formErrors, onchange, onsubmit, isLoading } = useLoginScreen();
  return (
    <Container
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
      maxWidth="lg"
    >
      <Paper sx={{ padding: theme.spacing(2), minWidth: 600 }} elevation={3}>
        <h1>Login | Weather </h1>
        <form onSubmit={onsubmit}>
          <TextField
            name="username"
            label="Username:"
            placeholder="jon.doe@email.com"
            type="email"
            variant="outlined"
            fullWidth
            onChange={onchange}
            error={!!formErrors.username}
            helperText={formErrors.username}
          />
          <Box sx={{ height: theme.spacing() }} />
          <TextField
            name="password"
            label="Password:"
            placeholder="********"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            onChange={onchange}
            error={!!formErrors.password}
            helperText={formErrors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  onClick={() => setShowPassword(!showPassword)}
                  position="start"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ height: theme.spacing() }} />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="secondary"
            startIcon={
              isLoading && <CircularProgress
                style={{
                  height: 18,
                  width: 18,
                  marginLeft: -24,
                  color: "white",
                }}
              />
            }
          >
            Sign In
          </Button>
          <Box sx={{ height: theme.spacing() }} />
          <Button
            color="secondary"
            fullWidth
            component={RouterLink}
            to={ROUTES.sigup}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Container>
  );
};
