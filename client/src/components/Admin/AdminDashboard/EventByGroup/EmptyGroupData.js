import React from "react";
import Typography from "@mui/material/Typography";
import EventBusyIcon from "@mui/icons-material/EventBusy";

export default function EmptyGroupData() {
  return (
    <>
      <EventBusyIcon sx={{ my: 1, fontSize: 40 }} />
      <Typography variant="body1" sx={{ mb: 2 }}>
        No events scheduled for this group
      </Typography>
    </>
  );
}
