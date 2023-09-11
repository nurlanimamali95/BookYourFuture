import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BookTime from "../../components/Student/StudentEventManagement/BookTime";
import Typography from "@mui/material/Typography";
import Button from "../../components/Student/StudentEventManagement/ConfirmEventButton";
import { RadioProvider } from "../../components/Student/StudentEventManagement/TimeSlotContext";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import formatDate from "../../components/Student/StudentEventManagement/FormatDate";
import { Snackbar } from "@mui/material";

export default function TimeSlotsPage() {
  const [expanded, setExpanded] = useState(null);
  const [message, setMessage] = useState("");
  const [eventData, setEventData] = useState({
    eventName: "",
    description: "",
  });
  const [sessionSlots, setSessionSlots] = useState([]);
  const [sessionSlotId, setSessionSlotId] = useState([]);
  //eslint-disable-next-line
  console.log(sessionSlotId);

  const { isLoading, error, performFetch } = useFetch("/event/all", (data) => {
    if (data.success && data.eventsData.length > 0) {
      const firstEvent = data.eventsData[6];
      if (firstEvent.sessionSlot && firstEvent.sessionSlot.length > 0) {
        setSessionSlots(firstEvent.sessionSlot);
        setSessionSlotId(firstEvent.sessionSlot[0]._id);
      }
      setEventData({
        eventName: firstEvent.title,
        description: firstEvent.description,
      });
    }
  });

  useEffect(() => {
    performFetch();
  }, []);

  const groupedTimeSlots = {};

  sessionSlots.forEach((slot) => {
    const date = formatDate(slot.startTime);
    if (!groupedTimeSlots[date]) {
      groupedTimeSlots[date] = [];
    }
    groupedTimeSlots[date].push(slot);
  });

  const handleAccordionChange = (panel) => {
    setExpanded(panel === expanded ? null : panel);
  };

  return (
    <RadioProvider>
      <Container>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                mt={"1em"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {eventData.eventName}
              </Typography>
              <Typography
                variant="subtitle1"
                mt={"2em"}
                sx={{ textAlign: "center" }}
              >
                {eventData.description}
              </Typography>
            </Grid>
            {Object.entries(groupedTimeSlots).map(
              ([date, timeSlots], index) => (
                <Grid
                  item
                  xs={12}
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <BookTime
                    date={date}
                    expanded={expanded === `panel${index}`}
                    onChange={() => handleAccordionChange(`panel${index}`)}
                    timeSlots={timeSlots}
                  />
                </Grid>
              )
            )}
            <Grid item xs={12}>
              {isLoading ? (
                <Typography variant="body1">Loading...</Typography>
              ) : error ? (
                <Typography variant="body1">Error: {error.message}</Typography>
              ) : (
                <Button
                  variant="contained"
                  sessionSlotId={sessionSlotId}
                  onEventAdded={setMessage}
                  redirectPath="/student"
                  sx={{
                    display: "flex",
                    margin: "0 auto",
                  }}
                >
                  Confirm
                </Button>
              )}
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Snackbar
        open={Boolean(message)}
        autoHideDuration={3000}
        onClose={() => setMessage("")}
        message={message}
      />
    </RadioProvider>
  );
}
