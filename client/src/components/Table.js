import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Container,
} from "@mui/material";

const events = [
  {
    name: "Node.js Week3",
    date: "29/09/23",
    description: "Check the github repository",
    location: "Online",
    time: "12:00",
  },
  {
    name: "Interview with Adyen",
    date: "20/09/23",
    description: "Preparation for the tech interview - check Github repo",
    location: "Online",
    time: "14:30",
  },
];

const EventTable = () => {
  return (
    <Container>
      <Typography variant="h5" sx={{ marginTop: 2, marginBottom: 2 }}>
        Event List
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event, index) => (
            <TableRow key={index}>
              <TableCell>{event.name}</TableCell>
              <TableCell>{event.date}</TableCell>
              <TableCell>{event.description}</TableCell>
              <TableCell>{event.location}</TableCell>
              <TableCell>{event.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default EventTable;
