import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

// const mainColors = [
//   "#FF0000", // Red
//   "#00FF00", // Green
//   "#0000FF", // Blue
//   "#FFFF00", // Yellow
//   "#00FFFF", // Cyan
//   "#FF00FF", // Magenta
//   "#000000", // Black
//   "#FFFFFF", // White
//   "#808080", // Gray
//   "#FFA500", // Orange
// ];

function AddGroupPage() {
  const [groupName, setGroupName] = useState("");
  const [groupColor, setGroupColor] = useState("");

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
    <Container maxWidth="sm" sx={{ marginTop: "25px" }}>
      <Grid container spacing={3}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ mb: 4, mt: 6, textAlign: "center" }}
          >
            Add Group
          </Typography>
        </Box>
        <Grid item xs={12}>
          <TextField
            label="Group Name"
            fullWidth
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Group Color</InputLabel>
            <Select
              value={groupColor}
              onChange={(e) => setGroupColor(e.target.value)}
            >
              <MenuItem value={43}>blue</MenuItem>
              <MenuItem value={44}>white</MenuItem>
              <MenuItem value={45}>green</MenuItem>
              <MenuItem value={46}>orange</MenuItem>
            </Select>
          </FormControl>
        </Grid>
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
            <Button variant="contained" sx={buttonStyle}>
              Save
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddGroupPage;
