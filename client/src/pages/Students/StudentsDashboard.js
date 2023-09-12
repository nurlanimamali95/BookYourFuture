import React, { useEffect, useState } from "react";
import Calendar from "../../components/DatePicker/Calendar";
import Notifications from "../../components/Student/StudentDashboard/Notifications";
import Box from "@mui/material/Box";
import { CssBaseline, Typography, Container } from "@mui/material";
import EventTable from "../../components/Student/StudentDashboard/Table";
import Grid from "@mui/material/Grid";
import useFetch from "../../hooks/useFetch";
import todayDate from "../../components/Student/StudentEventManagement/FormatDate";
// import { selectorIsAuth } from "../../components/redux/authSlice";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  // const isAuth = useSelector(selectorIsAuth);
  // const navigate = useNavigate();
  function processData(responseData) {
    if (responseData.success === true) {
      const eventsData = responseData.eventsData;
      return eventsData;
    } else {
      return [];
    }
  }

  const userData = useSelector((state) => state.auth.data);
  const userId = userData ? userData._id : null;
  //eslint-disable-next-line
  console.log(userId);
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const [events, setEvents] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const { isLoading, error, performFetch } = useFetch(
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
    performFetch();
  };
  //eslint-disable-next-line
  console.log(events);
  function handleEventsUpdate(responseData) {
    const data = processData(responseData);

    const filteredEvents = data.filter((event) =>
      event.group[0]?.students.includes(userId)
    );

    const eventNotifications = filteredEvents.map((event) => ({
      message: event.title,
      type: "warning",
      action: {
        label: "Book a slot",
        link: "/student/event/timeslots",
      },
    }));

    setEvents(filteredEvents);
    setNotifications(eventNotifications);
  }

  useEffect(() => {
    performFetch();
  }, []);

  // if (!isAuth) {
  //   return navigate("/login");
  // }

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
              <Notifications notifications={notifications} />
            </Grid>
            <Grid item mt="2em" xs={12} sm={12} md={3} lg={4}>
              <Calendar
                value={selectedDate}
                onDateSelected={handleDateChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={8}>
              {renderContent()}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
