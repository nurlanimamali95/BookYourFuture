import React, { useContext } from "react";
import { Container, Typography } from "@mui/material";
import EventContext from "./EventContext";

export default function EventPreview() {
  const { eventData } = useContext(EventContext);

  return (
    <Container>
      <Typography variant="h6">Event Preview</Typography>
      <Typography variant="body1">
        <strong>Title:</strong> {eventData.title}
      </Typography>
      <Typography variant="body1">
        <strong>Description:</strong> {eventData.description}
      </Typography>
      <Typography variant="body1">
        <strong>Duration:</strong> {eventData.duration} minutes
      </Typography>
      <Typography variant="body1">
        <strong>Location:</strong> {eventData.location}
      </Typography>
      <Typography variant="body1">
        <strong>Receiver Type:</strong> {eventData.receiverType}
      </Typography>
      <Typography variant="body1">
        <strong>Group:</strong> {eventData.group}
      </Typography>
      <Typography variant="body1">
        <strong>Student:</strong> {eventData.student}
      </Typography>
    </Container>
  );
}
