import React, { useState } from "react";
import {
  Box,
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
import useFetch from "../../hooks/useFetch";
import { CancelButton } from "../../components/Buttons/CancelButton";
import { Button } from "../../components/Buttons/Button";

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
  const { isLoading, performFetch } = useFetch("/group/add", (result) => {
    // eslint-disable-next-line no-console
    console.log(result);
  });
  // const { performFetch} = useFetch("/auth/login", (result) => {
  //   // eslint-disable-next-line no-console
  //   console.log(result);
  // });
  // eslint-disable-next-line no-console
  console.log(isLoading);

  const handleSave = (event) => {
    event.preventDefault();
    performFetch(
      {
        color: groupColor,
        numberOfGroupName: Number(groupName),
        status: "active",
      },
      "POST"
    );
    // Handle saving the student data here
    // eslint-disable-next-line no-console
    // console.log("Student data:", { firstName, lastName, email, groupNumber });
  };

  // const handleCancel = () => {
  //   // Handle cancel action (e.g., navigate back to the student list)
  // };

  return (
    <form onSubmit={handleSave}>
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
                <MenuItem value={"blue"}>blue</MenuItem>
                <MenuItem value={"white"}>white</MenuItem>
                <MenuItem value={"green"}>green</MenuItem>
                <MenuItem value={"orange"}>orange</MenuItem>
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
              <Button type="submit" variant="outlined">
                Save
              </Button>
              <CancelButton variant="contained" color="primary">
                Cancel
              </CancelButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
}

export default AddGroupPage;
