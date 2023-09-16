import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SecurityTab() {
  const navigate = useNavigate();

  const handleChangePassword = () => {
    navigate("/change-password");
  };

  return (
    <>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={8}>
          <Button variant="outlined" onClick={handleChangePassword}>
            Change Password
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Delete Account
          </Typography>
          <Typography variant="body1">
            WARNING! This action is irreversible. Once you delete your account,
            you will not be able to recover it.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
