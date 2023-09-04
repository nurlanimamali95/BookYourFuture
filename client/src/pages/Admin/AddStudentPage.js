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
  Container,
  Stack,
  Box,
} from "@mui/material";

const AddStudentPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [groupNumber, setGroupNumber] = useState("");

  // const handleSave = () => {
  //   // Handle saving the student data here
  //   // eslint-disable-next-line no-console
  //   // console.log("Student data:", { firstName, lastName, email, groupNumber });
  // };

  // const handleCancel = () => {
  //   // Handle cancel action (e.g., navigate back to the student list)
  // };
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
    <Container maxWidth="md" sx={{ marginTop: "25px" }}>
      <Grid container spacing={3}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ mb: 4, mt: 6, textAlign: "center" }}
          >
            Add Student
          </Typography>
        </Box>
        <Grid item xs={12}>
          <TextField
            label="First Name"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Last Name"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2}>
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
          </Stack>
        </Grid>
        <Grid item xs={6} sx={{ justifyContent: "center" }}></Grid>
        <Grid container justifyContent="center">
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddStudentPage;
