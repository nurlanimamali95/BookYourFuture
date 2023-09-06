import React from "react";
import MainEventInfo from "../../components/Admin/AdminEvents/AddEvent/AddEventInfo";
import { Grid, Container, Typography, Button, Stack, Box } from "@mui/material";
// import EventPreview from "../../components/Admin/AdminEvents/AddEvent/EventPreview";
import EventContext from "../../components/Admin/AdminEvents/AddEvent/EventContext";
import { useState } from "react";
import AddEventDatePicker from "../../components/Admin/AdminEvents/AddEvent/AddEventDatePicker";

export default function AddEventPage() {
  const [eventData, setEventData] = useState({
    duration: "",
    group: "",
    student: "",
    receiverType: "",
    location: "",
    title: "",
    description: "",
    dates: [],
  });

  return (
    <EventContext.Provider value={{ eventData, setEventData }}>
      <Container>
        <Typography variant="h3" sx={{ pt: 4, mb: 5, mt: 2 }}>
          Add Event
        </Typography>
        <Grid container>
          <Grid item xs={12} md={5}>
            <MainEventInfo />
          </Grid>
          <Grid item xs={false} s md={2}></Grid>
          <Grid item xs={12} md={5}>
            <Box sx={{ minHeight: { sx: "30px", md: "500px" } }}>
              <AddEventDatePicker />
            </Box>
          </Grid>
        </Grid>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={4}
          sx={{ mt: 6 }}
        >
          <Button variant="contained">Add Event</Button>
          <Button variant="outlined">Cancel</Button>
        </Stack>
      </Container>
    </EventContext.Provider>
  );
}
