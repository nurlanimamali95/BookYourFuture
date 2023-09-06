import React from "react";
import MainEventInfo from "../../components/Admin/AdminEvents/AddEvent/AddEventInfo";
import { Grid, Container, Typography, Button, Stack, Box } from "@mui/material";
import EventContext from "../../components/Admin/AdminEvents/AddEvent/EventContext";
import { useState } from "react";
import AddEventDatePicker from "../../components/Admin/AdminEvents/AddEvent/AddEventDatePicker";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function AddEventPage() {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    location: "",
    duration: "",
    receiverType: "",
    group: "",
    student: "",
    dates: [],
  });

  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate("/events");
  };

  const { isLoading, error, performFetch } = useFetch("/event/add ", (data) => {
    //eslint-disable-next-line
    console.log("Event added successfully!", data);
    //eslint-disable-next-line
    console.error(error);
    // Add successes page here
  });

  const handleOnSubmit = () => {
    performFetch(eventData, "POST");
  };

  //eslint-disable-next-line
  console.log(eventData);

  return (
    <EventContext.Provider value={{ eventData, setEventData }}>
      <Container>
        <Typography variant="h3" sx={{ pt: 4, mb: 5, mt: 2 }}>
          Add Event
        </Typography>
        <Grid container>
          <Grid item xs={5} sm={5}>
            <MainEventInfo />
          </Grid>
          <Grid item xs={2} sm={2}></Grid>
          <Grid item xs={5} sm={5} sx={{ pl: 5 }}>
            <Box sx={{ minHeight: "500px" }}>
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
          <Button
            variant="contained"
            onClick={handleOnSubmit}
            disabled={isLoading}
          >
            Add Event
          </Button>
          <Button variant="outlined" onClick={handleCancelClick}>
            Cancel
          </Button>
        </Stack>
      </Container>
    </EventContext.Provider>
  );
}
