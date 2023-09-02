import React from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Stack,
  Avatar,
  Typography,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const UserProfilePage = () => {
  const buttonStyle = {
    backgroundColor: "#56ae5a",
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "#56ae5a",
      border: "1px solid #56ae5a",
    },
  };

  const cancelButtonStyle = {
    backgroundColor: "red",
    color: "white",
    border: "1px solid red", // Add border style
    "&:hover": {
      backgroundColor: "white",
      color: "red",
      border: "1px solid red", // Border style on hover
    },
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" style={{ margin: "20px" }}>
        User Profile
      </Typography>
      <Grid container spacing={5}>
        {/* First Column */}
        <Grid item xs={12} sm={8}>
          <Stack spacing={3}>
            <Stack direction="row" spacing={2}>
              <TextField label="First Name" variant="outlined" fullWidth />
              <TextField label="Last Name" variant="outlined" fullWidth />
            </Stack>
            <Stack direction="row" spacing={2}>
              <TextField label="City" variant="outlined" fullWidth />
              <TextField label="Zip Code" variant="outlined" fullWidth />
            </Stack>
            <Stack direction="row" spacing={2}>
              <TextField label="GitHub" variant="outlined" fullWidth />
              <TextField label="LinkedIn" variant="outlined" fullWidth />
            </Stack>
            <Stack direction="row" spacing={2}>
              <TextField label="Phone" variant="outlined" fullWidth />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
              />
            </Stack>
            <Stack direction="row" spacing={2}>
              <TextField
                label="New Password"
                type="password"
                variant="outlined"
                fullWidth
              />
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
              />
            </Stack>
          </Stack>
        </Grid>

        {/* Second Column */}
        {/* <Grid item xs={12} sm={2}>
          <Stack spacing={3}></Stack>
        </Grid> */}

        {/* Third Column */}
        <Grid item xs={12} sm={4}>
          <Stack spacing={3} alignItems="center">
            <Avatar sx={{ width: 150, height: 150 }} />
            <Button
              variant="contained"
              component="label"
              sx={{
                ...buttonStyle,
                "&:hover": {
                  backgroundColor: "white",
                  color: "#56ae5a",
                  border: "1px solid #56ae5a",
                },
              }}
            >
              Upload Avatar
              <input type="file" hidden />
              <PhotoCamera />
            </Button>
          </Stack>
        </Grid>
      </Grid>

      {/* Buttons */}
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        mt={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Button variant="outlined" sx={cancelButtonStyle}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" sx={buttonStyle}>
          Save
        </Button>
      </Stack>
    </Container>
  );
};

export default UserProfilePage;
