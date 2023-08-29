import React, { useState } from "react";
import { TextField, Button, Avatar, Grid, Paper } from "@mui/material";
import { Save, Cancel } from "@mui/icons-material";
import "./userProfilePage.css";

const UserProfilePage = () => {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    zipCode: "",
    githubLink: "",
    linkedInLink: "",
    phoneNumber: "",
    email: "",
  });

  const handleInputChange = (field, value) => {
    setProfileData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSave = () => {
    // Handle saving data, sending to an API, profileData
  };

  return (
    <div className="profile-container">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper className={"profile-paper column"}>
            <TextField
              label="First Name"
              fullWidth
              value={profileData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
            />
            <TextField
              label="City"
              fullWidth
              value={profileData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
            />
            <TextField
              label="GitHub Link"
              fullWidth
              value={profileData.githubLink}
              onChange={(e) => handleInputChange("githubLink", e.target.value)}
            />
            <TextField
              label="Phone Number"
              fullWidth
              value={profileData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={"profile-paper column"}>
            <TextField
              label="Last Name"
              fullWidth
              value={profileData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
            />
            <TextField
              label="Zip Code"
              fullWidth
              value={profileData.zipCode}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
            />
            <TextField
              label="LinkedIn Link"
              fullWidth
              value={profileData.linkedInLink}
              onChange={(e) =>
                handleInputChange("linkedInLink", e.target.value)
              }
            />
            <TextField
              label="Email"
              fullWidth
              value={profileData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={"profile-paper column"}>
            <Avatar
              alt="Profile Picture"
              src="/path-to-your-profile-picture.jpg"
              className="avatar"
            />
          </Paper>
        </Grid>
      </Grid>
      <div className="buttons-container">
        <Button
          className="save--btn"
          variant="contained"
          startIcon={<Save />}
          onClick={handleSave}
        >
          Save
        </Button>
        <Button
          className="cancel--btn"
          variant="contained"
          startIcon={<Cancel />}
          color="error"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default UserProfilePage;
