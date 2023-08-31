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
  Hidden,
} from "@mui/material";

const events = [
  {
    title: "Node.js Week3",
    date: "44",
    name: "Alex",
    location: "Online",
    time: "12:00",
    colorCode: "#8A89C0",
  },
  {
    title: "Interview with Adyen",
    date: "43",
    name: "Pedro",
    location: "Online",
    time: "14:30",
    colorCode: "#CDA2AB",
  },
];

export default function AdminEventTable() {
  return (
    <Container>
      <Typography
        variant="h6"
        sx={{
          textAlign: { xs: "center", sm: "left" },
          mt: {
            xs: 1,
            sm: 2,
          },
          mb: {
            xs: 2,
            sm: 4,
          },
        }}
      >
        Today Events
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <Hidden smDown>
              <TableCell></TableCell>
            </Hidden>
            <TableCell>Time</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Group</TableCell>
            <TableCell>Student</TableCell>
            <Hidden smDown>
              <TableCell>Location</TableCell>
            </Hidden>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event, index) => (
            <TableRow key={index}>
              <Hidden smDown>
                <TableCell>
                  <Box
                    sx={{
                      width: 4,
                      height: 25,
                      bgcolor: event.colorCode,
                    }}
                  />
                </TableCell>
              </Hidden>

              <TableCell>{event.time}</TableCell>
              <TableCell>{event.title}</TableCell>
              <TableCell>{event.date}</TableCell>
              <TableCell>{event.name}</TableCell>
              <Hidden smDown>
                <TableCell>{event.location}</TableCell>
              </Hidden>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
