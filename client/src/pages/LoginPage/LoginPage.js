import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import background from "../../assets/loginbackground.jpg";
import logo from "../../assets/logo.svg";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  fetchUserData,
  selectorIsAuth,
} from "../../components/redux/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectorIsAuth);
  const { userData } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "auth@test.com",
      password: "123456",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchUserData(values));

    if (!data.payload) {
      //eslint-disable-next-line
      console.log("Failed to login");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#139A43",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#0B5D1E",
      },
    },
  });

  {
    isAuth ? (
      userData.admin === "admin" ? (
        <Navigate to="/admin" />
      ) : (
        <Navigate to="/student" />
      )
    ) : null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={6}
          md={7}
          sx={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ mb: 10 }}>
              <Avatar src={logo} sx={{ width: 300, height: 100 }}>
                <LockOutlinedIcon />
              </Avatar>
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box
                noValidate
                sx={{
                  mt: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TextField
                  margin="normal"
                  size="small"
                  required
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  type="email"
                  autoFocus
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                  {...register("email", { required: "Email is required" })}
                />
                <TextField
                  margin="normal"
                  size="small"
                  required
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: theme.palette.primary.main,
                        "&.Mui-checked": {
                          color: theme.palette.secondary.main,
                        },
                      }}
                      value="remember"
                    />
                  }
                  label="Remember me"
                />
                <Button
                  disabled={!isValid}
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 7,
                    mb: 2,
                    backgroundColor: theme.palette.primary.main,
                    "&:hover": {
                      backgroundColor: theme.palette.secondary.main,
                    },
                    size: "medium",
                  }}
                >
                  Login
                </Button>
                <Grid container align="center">
                  <Grid item xs>
                    <RouterLink to="/dashboard" variant="body2">
                      Forgot password?
                    </RouterLink>
                  </Grid>
                </Grid>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default LoginPage;
