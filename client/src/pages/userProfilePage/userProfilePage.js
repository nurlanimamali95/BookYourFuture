import React from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Stack,
  Avatar,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const UserProfilePage = () => {
  return (
    <Container maxWidth="md">
      <h1>User Profile</h1>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Stack spacing={3}>
            <TextField label="First Name" variant="outlined" fullWidth />
            <TextField label="City" variant="outlined" fullWidth />
            <TextField label="GitHub" variant="outlined" fullWidth />
            <TextField label="Phone" variant="outlined" fullWidth />
            <TextField
              label="New Password"
              type="password"
              variant="outlined"
              fullWidth
            />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={3}>
            <TextField label="Last Name" variant="outlined" fullWidth />
            <TextField label="Zip Code" variant="outlined" fullWidth />
            <TextField label="LinkedIn" variant="outlined" fullWidth />
            <TextField
              label="Email"
              type="email"
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
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            backgroundColor: "lightgrey",
            paddingLeft: "5px",
            marginTop: "25px",
            borderRadius: "10px",
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Avatar sx={{ width: 150, height: 150 }} />
            <Button variant="contained" component="label">
              Upload Profile Picture
              <input type="file" hidden />
              <PhotoCamera />
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Stack direction="row" justifyContent="center" spacing={2} mt={3}>
        <Button variant="outlined">Cancel</Button>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Stack>
    </Container>
  );
};

export default UserProfilePage;
