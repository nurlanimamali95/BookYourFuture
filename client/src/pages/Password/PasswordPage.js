import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import background from "../../assets/loginbackground.jpg";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { selectorIsAuth } from "../../components/redux/authSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { changePasswordUser } from "../../components/redux/userSlice";

const ChangePasswordPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectorIsAuth);
  const userData = useSelector((state) => state.auth.data);
  const navigate = useNavigate();
  const success = useSelector((state) => state.user.status === "isSuccess");
  const error = useSelector((state) => state.user.status === "isError");

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const onSubmit = (values) => {
    dispatch(changePasswordUser(values));
  };

  const handleBackButton = () => {
    if (isAuth) {
      const route = userData?.admin === true ? "/admin" : "/student";
      navigate(route);
    }
  };

  React.useEffect(() => {}, []);
  return (
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
            <Typography sx={{ textAlign: "center" }} variant="h3">
              Change password page
            </Typography>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              onSubmit={handleSubmit}
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
                id="old-password"
                label="enter your password"
                type="password"
                name="enter your password"
                autoComplete="current-password"
                autoFocus
                {...register("oldPassword", {
                  required: "Password is required",
                })}
              />
              <TextField
                margin="normal"
                size="small"
                required
                name="new password"
                label="new password"
                type="password"
                id="new-password"
                autoComplete="current-password"
                {...register("newPassword", {
                  required: "New password is required",
                })}
              />
              <TextField
                margin="normal"
                size="small"
                required
                name="confirm new password"
                label="confirm new password"
                type="password"
                id="confirm-password"
                autoComplete="current-password"
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                })}
              />
              {success ? (
                <>
                  <Typography>Password successfully changed!</Typography>
                  <Button variant="contained" onClick={handleBackButton}>
                    Back
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={!isValid}
                    sx={{ m: 1 }}
                  >
                    Change Password
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ m: 2 }}
                    onClick={handleBackButton}
                  >
                    Cancel
                  </Button>
                </>
              )}
              {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
              <Grid container align="center">
                <Grid item xs></Grid>
              </Grid>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};
export default ChangePasswordPage;
