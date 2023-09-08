import React from "react";
import MainEventInfo from "../../components/Admin/AdminEvents/AddEvent/AddEventInfo";
import {
  Grid,
  Container,
  Typography,
  Button,
  Stack,
  Box,
  Snackbar,
} from "@mui/material";
import EventContext from "../../components/Admin/AdminEvents/AddEvent/EventContext";
import { useState } from "react";
import AddEventDatePicker from "../../components/Admin/AdminEvents/AddEvent/AddEventDatePicker";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function AddEventPage() {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    location: "",
    duration: "",
    receiverType: "",
    group: "",
    student: "",
    sessionSlot: [],
  });

  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleCancelClick = () => {
    navigate("/events");
  };

  const { isLoading, error, performFetch } = useFetch("/event/add ", () => {
    setMessage("Event added successfully! Redirecting...");

    setTimeout(() => {
      navigate("/events");
    }, 2000);
  });

  useEffect(() => {
    if (error) {
      setMessage("There was an error adding the event. Please try again.");
    }
  }, [error]);

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
      <Snackbar
        open={Boolean(message)}
        autoHideDuration={3000}
        onClose={() => setMessage("")}
        message={message}
      />
    </EventContext.Provider>
  );
}
