import React from "react";
import { useSelector } from "react-redux";
import { Avatar, Button, Grid, Stack, TextField } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

export default function ProfileTab() {
  const userData = useSelector((state) => state.auth.data);
  return (
    <>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Stack spacing={3} alignItems="center" justifyContent="center">
            <Avatar sx={{ width: 120, height: 120 }} />
            <Button
              variant="contained"
              component="label"
              endIcon={<PhotoCamera />}
            >
              Upload Avatar
              <input type="file" hidden />
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Stack gap={2}>
            <TextField
              label="First Name"
              value={userData?.firstName || ""}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Last Name"
              value={userData?.lastName || ""}
              variant="outlined"
              fullWidth
            />
            <Stack direction="row" spacing={2}>
              <TextField
                label="City"
                value={userData?.city}
                variant="outlined"
                fullWidth
              />
              <TextField
                label="Zip Code"
                value={userData?.zipCode || ""}
                variant="outlined"
                fullWidth
              />
            </Stack>
            <Stack direction="row" spacing={2}>
              <TextField
                label="Phone number"
                value={userData?.phone}
                variant="outlined"
                fullWidth
              />
              <TextField
                value={userData?.email || ""}
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
