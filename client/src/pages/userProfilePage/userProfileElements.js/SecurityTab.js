import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDeleteUser } from "../../../components/redux/userSlice";

export default function SecurityTab() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const userData = useSelector((state) => state.auth.data);

  const handleChangePassword = () => {
    navigate("/change-password");
  };

  const handleDeleteAccount = () => {
    const confirmation = window.confirm(
      `Are you sure you want to delete a student ${userData?.firstName} ${userData?.lastName}?`
    );

    if (confirmation) {
      // User confirmed, so proceed with deletion
      dispatch(getDeleteUser(id));
      window.localStorage.removeItem("token");
      navigate("/");
    }
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
          <Button
            variant="contained"
            onClick={handleDeleteAccount}
            color="error"
            sx={{ mb: 3 }}
            disabled={userData.admin}
          >
            Delete Account
          </Button>
          <Typography variant="body1">
            WARNING! This action is irreversible. Once you delete your account,
            you will not be able to recover it.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
