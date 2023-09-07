import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BookTime from "../../components/Student/StudentEventManagement/BookTime";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { RadioProvider } from "../../components/Student/StudentEventManagement/TimeSlotContext";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import formatDate from "../../components/Student/StudentEventManagement/FormatDate";

export default function TimeSlotsPage() {
  const [expanded, setExpanded] = useState(null);
  const [eventData, setEventData] = useState({
    eventName: "",
    description: "",
  });
  const [timeSlotDate, setTimeSlotDate] = useState("");
  const { isLoading, error, performFetch } = useFetch("/event/all", (data) => {
    if (data.success && data.eventsData.length > 0) {
      const firstEvent = data.eventsData[22];
      if (firstEvent.sessionSlot && firstEvent.sessionSlot.length > 0) {
        const firstSessionSlot = firstEvent.sessionSlot[0];
        setTimeSlotDate(formatDate(firstSessionSlot.startTime));
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
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <BookTime
                date={timeSlotDate}
                expanded={expanded === "panel1"}
                onChange={() => handleAccordionChange("panel1")}
              />
              <BookTime
                date={timeSlotDate}
                expanded={expanded === "panel2"}
                onChange={() => handleAccordionChange("panel2")}
              />
              <BookTime
                date={timeSlotDate}
                expanded={expanded === "panel3"}
                onChange={() => handleAccordionChange("panel3")}
              />
            </Grid>
            <Grid item xs={12}>
              {isLoading ? (
                <Typography variant="body1">Loading...</Typography>
              ) : error ? (
                <Typography variant="body1">Error: {error.message}</Typography>
              ) : (
                <Button
                  variant="contained"
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
    </RadioProvider>
  );
}
