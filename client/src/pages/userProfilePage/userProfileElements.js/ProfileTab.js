import React from "react";
import { useSelector } from "react-redux";
import { Avatar, Button, Grid, Stack, TextField } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import PropTypes from "prop-types";

export default function ProfileTab({ currentData, setCurrentData }) {
  const userData = useSelector((state) => state.auth.data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentData({ ...currentData, [name]: value });
  };

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
              name="firstName"
              label="First Name"
              value={currentData?.firstName || ""}
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
            <TextField
              name="lastName"
              label="Last Name"
              value={currentData?.lastName || ""}
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
            <Stack direction="row" spacing={2}>
              <TextField
                name="city"
                label="City"
                value={currentData?.city || ""}
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
              <TextField
                name="zipCode"
                label="Zip Code"
                value={currentData?.zipCode || ""}
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
            </Stack>
            <Stack direction="row" spacing={2}>
              <TextField
                name="phone"
                label="Phone number"
                value={currentData?.phone || ""}
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
              <TextField
                value={userData?.email}
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

ProfileTab.propTypes = {
  currentData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    city: PropTypes.string,
    zipCode: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  setCurrentData: PropTypes.func.isRequired,
};
