import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import MainEventInfo from "../../components/Admin/AdminEvents/AddEvent/AddEventInfo";
import AddEventDatePicker from "../../components/Admin/AdminEvents/AddEvent/AddEventDatePicker";
import EventContext from "../../components/Admin/AdminEvents/AddEvent/EventContext";
import SaveButton from "../../components/Admin/AdminEvents/EventElements/SaveButton";
import DeleteButton from "../../components/Admin/AdminEvents/EventElements/DeleteButton";
import {
  Container,
  Typography,
  Grid,
  Box,
  Snackbar,
  Stack,
} from "@mui/material";

export default function EditEventPage() {
  const { id } = useParams();

  const [message, setMessage] = useState("");

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

  // Fetch the existing event data
  const { performFetch } = useFetch(`/event/${id}`, handleReceivedData);

  useEffect(() => {
    performFetch();
  }, []);

  function handleReceivedData(data) {
    setEventData(data.eventData);
  }

  const handleSaved = () => {
    setMessage("Event saved successfully!");
  };

  const handleDeleted = () => {
    setMessage("Event deleted successfully!");
    // Add redirection or other logic after deletion if needed
  };

  return (
    <EventContext.Provider value={{ eventData, setEventData }}>
      <Container>
        <Typography variant="h3" sx={{ pt: 4, mb: 5, mt: 2 }}>
          Edit Event
        </Typography>
        <Grid container>
          <Grid item xs={12} md={5}>
            <MainEventInfo />
          </Grid>
          <Grid item xs={false} md={2}></Grid>
          <Grid item xs={12} md={5}>
            <Box sx={{ minHeight: { xs: "30px", md: "500px" } }}>
              <AddEventDatePicker />
            </Box>
          </Grid>
        </Grid>
        <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
          <SaveButton id={id} eventData={eventData} onSaved={handleSaved} />
          <DeleteButton id={id} onDeleted={handleDeleted} />
        </Stack>
      </Container>
      <Snackbar
        open={Boolean(message)}
        autoHideDuration={6000}
        onClose={() => setMessage("")}
        message={message}
      />
    </EventContext.Provider>
  );
}
