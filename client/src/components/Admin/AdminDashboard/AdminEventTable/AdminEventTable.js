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
    title: "Node.js Week3",
    date: "44",
    name: "Alex",
    location: "Online",
    time: "12:00",
    colorCode: "#8A89C0", // New color code
  },
  {
    title: "Interview with Adyen",
    date: "43",
    name: "Pedro",
    location: "Online",
    time: "14:30",
    colorCode: "#CDA2AB", // New color code
  },
];

export default function AdminEventTable() {
  return (
    <Container>
      <Typography variant="h5" sx={{ mt: 2, mb: 4, textAlign: "left" }}>
        Today Events
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Group</TableCell>
            <TableCell>Student</TableCell>
            <TableCell>Location</TableCell>
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
              </TableCell>{" "}
              <TableCell>{event.time}</TableCell>
              <TableCell>{event.title}</TableCell>
              <TableCell>{event.date}</TableCell>
              <TableCell>{event.name}</TableCell>
              <TableCell>{event.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
