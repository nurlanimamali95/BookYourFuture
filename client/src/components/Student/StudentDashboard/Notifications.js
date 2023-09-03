import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Notifications.css";
import { Link } from "react-router-dom";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchedNotifications = [
      {
        message: "Class call with Josephine at 12:00",
        type: "info",
      },
      {
        message: "Social interview with Adyen",
        type: "warning",
        action: {
          label: "Book a slot",
        },
      },
    ];
    setNotifications(fetchedNotifications);
  }, []);

  const handleAlertClose = (index) => {
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {notifications.map((notification, index) => (
        <Alert
          key={index}
          className="animated-alert"
          onClose={() => {
            if (notification.type === "info") {
              handleAlertClose(index);
            }
          }}
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
