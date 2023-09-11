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
    event.sessionSlot.some((slot) =>
      dayjs(slot.startTime).isSame(formattedDate, "day")
    )
  );

  const flattenedEvents = filteredEvents.flatMap((event) =>
    event.sessionSlot.map((slot) => ({
      ...event,
      slot, // this will add the individual slot to each event object
    }))
  );

  const itemsPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(flattenedEvents.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;

  const eventsForCurrentPage = flattenedEvents.slice(startIndex, endIndex);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container>
      {filteredEvents.length > 0 && (
        <>
          <Typography variant="h6" sx={{ mb: 2, textAlign: "left" }}>
            Events for {dayjs(selectedDate).format("MMMM D")}
          </Typography>
          <Table size="inherit">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Title</TableCell>

                <TableCell>Student</TableCell>
                <TableCell>Location</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ maxHeight: "200px", overflowY: "auto" }}>
              {eventsForCurrentPage.map((event, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Box
                      sx={{
                        width: 4,
                        height: 25,
                        bgcolor: event.group[0]?.color || "defaultColor",
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    {dayjs(event.slot.startTime).format("HH:mm")}
                  </TableCell>
                  <TableCell>
                    {event.title.length > 120
                      ? `${event.title.slice(0, 118)}...`
                      : event.title}
                  </TableCell>
                  <TableCell>
                    {event.slot.student?.firstName || "N/A"}{" "}
                    {event.slot.student?.lastName || ""}
                  </TableCell>
                  <TableCell>{event.location}</TableCell>
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
      title: PropTypes.string,
      location: PropTypes.string,
      sessionSlot: PropTypes.arrayOf(
        PropTypes.shape({
          student: PropTypes.shape({
            firstName: PropTypes.string,
            lastName: PropTypes.string,
          }),
          startTime: PropTypes.string,
        })
      ),
    })
  ).isRequired,
  selectedDate: PropTypes.string,
};
