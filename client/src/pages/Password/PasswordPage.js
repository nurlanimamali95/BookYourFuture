import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import background from "../../assets/loginbackground.jpg";
import Typography from "@mui/material/Typography";

const ChangePasswordPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.get("enter your password");
    data.get("new password");
    data.get("confirm new password");
  };
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
          <Box
            component="form"
            noValidate
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
              required
              id="old-password"
              label="enter your password"
              type="password"
              name="enter your password"
              autoComplete="current-password"
              autoFocus
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
            />

            <Button type="submit" variant="contained">
              Ok
            </Button>
            <Grid container align="center">
              <Grid item xs></Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default ChangePasswordPage;
