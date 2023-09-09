import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Notifications.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Notifications(props) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    //eslint-disable-next-line
    console.log(props.message);
    const fetchedNotifications = [
      {
        message: props.message,
        type: "warning",
        action: {
          label: "Book a slot",
        },
      },
    ];
    setNotifications(fetchedNotifications);
  }, [props.message]);

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {notifications.map((notification, index) => (
        <Alert
          key={index}
          className="animated-alert"
          action={
            notification.action ? (
              <Link
                to="/student/event/timeslots"
                sx={{ textDecoration: "none" }}
              >
                <Button
                  style={{ color: "black" }}
                  size="small"
                  className="book-a-slot-button"
                >
                  {notification.action.label}
                  <ChevronRightIcon />
                </Button>
              </Link>
            ) : null
          }
          severity={notification.type || "info"}
        >
          {notification.message}
        </Alert>
      ))}
    </Stack>
  );
}

Notifications.propTypes = {
  message: PropTypes.string,
};
