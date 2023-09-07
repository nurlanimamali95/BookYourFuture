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
import PropTypes from "prop-types";
import dayjs from "dayjs";

export default function EventTable(props) {
  const { events, selectedDate } = props;
  const filteredEvents = events.filter((event) => event.date === selectedDate);

  const formattedDate = dayjs(selectedDate).format("MMMM DD, YYYY");
  return (
    <Container>
      <Typography variant="h5" sx={{ mt: 2, mb: 4, textAlign: "left" }}>
        Events for {formattedDate}
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
          {filteredEvents.map((event, index) => (
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

EventTable.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      date: PropTypes.string,
      description: PropTypes.string,
      location: PropTypes.string,
      time: PropTypes.string,
      colorCode: PropTypes.string,
    })
  ).isRequired,
  selectedDate: PropTypes.string,
};
