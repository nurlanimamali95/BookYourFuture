import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Grid,
} from "@mui/material";

const AddStudentPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [groupNumber, setGroupNumber] = useState("");

  const handleSave = () => {
    // Handle saving the student data here
    // console.log("Student data:", { firstName, lastName, email, groupNumber });
  };

  const handleCancel = () => {
    // Handle cancel action (e.g., navigate back to the student list)
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">Add Student</Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="First Name"
          fullWidth
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Last Name"
          fullWidth
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Group Number</InputLabel>
          <Select
            value={groupNumber}
            onChange={(e) => setGroupNumber(e.target.value)}
          >
            <MenuItem value={43}>43</MenuItem>
            <MenuItem value={44}>44</MenuItem>
            <MenuItem value={45}>45</MenuItem>
            <MenuItem value={46}>46</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <Button variant="outlined" fullWidth onClick={handleCancel}>
          Cancel
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSave}
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddStudentPage;
