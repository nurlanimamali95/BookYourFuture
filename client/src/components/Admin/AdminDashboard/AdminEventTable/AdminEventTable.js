import React, { useState } from "react";
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
import EventBusyIcon from "@mui/icons-material/EventBusy";
import Pagination from "@mui/material/Pagination";

export default function AdminEventTable(props) {
  const { events, selectedDate } = props;

  const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD");

  const filteredEvents = events.filter((event) =>
    dayjs(event.createdAt).isSame(formattedDate, "day")
  );

  const itemsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;

  const eventsForCurrentPage = filteredEvents.slice(startIndex, endIndex);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container>
      {filteredEvents.length > 0 && (
        <>
          <Typography variant="h5" sx={{ mt: 2, mb: 4, textAlign: "left" }}>
            Events for {dayjs(selectedDate).format("MMMM D")}
          </Typography>
          <Table size="inherit">
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
            <TableBody
              style={{
                maxHeight: "200px",
                overflowY: "auto",
              }}
            >
              {eventsForCurrentPage.map((event, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Box
                      sx={{
                        width: 4,
                        height: 25,
                        bgcolor: "green",
                      }}
                    />
                  </TableCell>
                  <TableCell>{event.title}</TableCell>
                  <TableCell>
                    {dayjs(selectedDate).format("DD-MM-YYYY")}
                  </TableCell>
                  <TableCell>{event.description}</TableCell>
                  <TableCell>{event.location}</TableCell>
                  <TableCell>{event.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
            />
          </Box>
        </>
      )}

      {filteredEvents.length === 0 && (
        <div style={{ textAlign: "center" }}>
          <Typography variant="h5" sx={{ mt: "5em" }}>
            No events for {dayjs(selectedDate).format("MMMM D")}
          </Typography>
          <EventBusyIcon fontSize="large" sx={{ mt: "0.5em" }} />
        </div>
      )}
    </Container>
  );
}

AdminEventTable.propTypes = {
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
