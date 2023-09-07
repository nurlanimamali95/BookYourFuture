import React, { useEffect, useState } from "react";
import Calendar from "../../components/DatePicker/Calendar";
import Notifications from "../../components/Student/StudentDashboard/Notifications";
import Box from "@mui/material/Box";
import { CssBaseline, Typography, Container } from "@mui/material";
import EventTable from "../../components/Student/StudentDashboard/Table";
import Grid from "@mui/material/Grid";
import useFetch from "../../hooks/useFetch";
import todayDate from "../../components/Student/StudentEventManagement/FormatDate";

export default function StudentDashboard() {
  function processData(responseData) {
    if (responseData.success === true) {
      const eventsData = responseData.eventsData;
      // eslint-disable-next-line
      console.error("works", eventsData);

      return eventsData;
    } else {
      // eslint-disable-next-line
      console.error("API response indicates an error:", responseData);
      return [];
    }
  }

  const [selectedDate, setSelectedDate] = useState(todayDate);
  const [events, setEvents] = useState([]);

  // Create state to hold event data
  const [eventInfo, setEventInfo] = useState("");

  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    "/event/all",
    handleEventsUpdate
  );

  const renderContent = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>Error: {error.message}</p>;
    } else {
      return <EventTable events={events} selectedDate={selectedDate} />;
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // eslint-disable-next-line
    console.log("Selected Date:", date);
  };

  function handleEventsUpdate(responseData) {
    const processedEvents = processData(responseData);
    setEvents(processedEvents);

    if (processedEvents.length > 0) {
      const firstEvent = processedEvents[36];
      //eslint-disable-next-line
      console.log(firstEvent.title);
      setEventInfo(firstEvent.title);
    }
  }

  useEffect(() => {
    performFetch();
    return () => {
      cancelFetch();
    };
  }, []);
  //eslint-disable-next-line
  console.log(eventInfo);

  return (
    <Container>
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <CssBaseline />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography
                variant="h3"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: "0.5em",
                }}
              >
                Your events for today
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Notifications message={eventInfo} />
            </Grid>
            <Grid item mt="2em" xs={12} sm={12} md={4} lg={5}>
              <Calendar
                value={selectedDate}
                onDateSelected={handleDateChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={7}>
              {renderContent()}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
