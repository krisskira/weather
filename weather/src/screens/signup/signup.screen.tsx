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
import { useSignupScreen } from "./signup.hook";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const SignupScreen: React.FC = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { formErrors, onchange, onsubmit, isLoading } = useSignupScreen();
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
        <h1>Register | Weather</h1>
        <form onSubmit={onsubmit}>
          <TextField
            name="fullname"
            label="Full Name:"
            placeholder="Jon Doe"
            variant="outlined"
            fullWidth
            onChange={onchange}
            error={!!formErrors.fullname}
            helperText={formErrors.fullname}
          />
          <Box sx={{ height: theme.spacing() }} />
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
            fullWidth
            onChange={onchange}
            error={!!formErrors.password}
            helperText={formErrors.password}
          />
          <Box sx={{ height: theme.spacing() }} />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="secondary"
            startIcon={
              isLoading && (
                <CircularProgress
                  style={{
                    height: 18,
                    width: 18,
                    marginLeft: -24,
                    color: "white",
                  }}
                />
              )
            }
          >
            Sign Up
          </Button>
          <Box sx={{ height: theme.spacing() }} />
          <Button
            color="secondary"
            fullWidth
            component={RouterLink}
            to={ROUTES.login}
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </Container>
  );
};
