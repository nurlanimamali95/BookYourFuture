import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Container,
  Box,
} from "@mui/material";

const events = [
  {
    name: "Node.js Week3",
    date: "05/09/23",
    description: "Check the github repository",
    location: "Online",
    time: "12:00",
    colorCode: "#909090",
  },
  {
    name: "Interview with Adyen",
    date: "02/09/23",
    description: "Preparation for the tech interview - check Github repo",
    location: "Online",
    time: "14:30",
    colorCode: "#3D860B",
  },
  {
    name: "Tech Interview with Rob at 09:30",
    date: "10/09/23",
    description: "Check the github repository",
    location: "Online",
    time: "12:00",
    colorCode: "#3D860B",
  },
];

export default function EventTable() {
  return (
    <Container>
      <Typography variant="h5" sx={{ mt: 2, mb: 4, textAlign: "left" }}>
        Today Events
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
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
              <TableCell>
                <Box
                  sx={{
                    width: 4,
                    height: 25,
                    bgcolor: event.colorCode,
                  }}
                />
              </TableCell>
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
}
