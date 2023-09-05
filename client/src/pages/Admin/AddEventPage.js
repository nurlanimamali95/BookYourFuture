import React from "react";
import MainEventInfo from "../../components/Admin/AdminEvents/AddEvent/AddEventInfo";
import { Grid, Container, Typography, Box } from "@mui/material";
import EventPreview from "../../components/Admin/AdminEvents/AddEvent/EventPreview";
import EventContext from "../../components/Admin/AdminEvents/AddEvent/EventContext";
import { useState } from "react";

export default function AddEventPage() {
  const [eventData, setEventData] = useState({
    duration: "",
    group: "",
    student: "",
    receiverType: "",
    location: "",
    title: "",
    description: "",
  });

  return (
    <EventContext.Provider value={{ eventData, setEventData }}>
      <Container>
        <Typography variant="h3" sx={{ pt: 4, mb: 2, ml: 2 }}>
          Add Event
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={5} sm={5}>
            <MainEventInfo />
          </Grid>
          <Grid item xs={2} sm={2}></Grid>
          <Grid item xs={5} sm={5} sx={{ pl: 5, bgcolor: "lightgray" }}>
            <Box>
              <EventPreview />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </EventContext.Provider>
  );
}
