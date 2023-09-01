import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Notifications.css";

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
          className="animated-alert" // Add this class for animation
          onClose={() => {
            if (notification.type === "info") {
              handleAlertClose(index);
            }
          }}
          action={
            notification.action ? (
              <Button color="inherit" size="small">
                {notification.action.label}
                <ChevronRightIcon />
              </Button>
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
