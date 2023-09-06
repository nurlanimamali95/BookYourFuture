import * as React from "react";
import { useState, useEffect } from "react";
import {
  Container,
  Table,
  TableBody,
  TableContainer,
  Paper,
  Pagination,
} from "@mui/material";
import PropTypes from "prop-types";
import TableHeader from "./EventTableHeader";
import EventTableRow from "./EventTableRow";
import useFetch from "../../../../hooks/useFetch";

const rowsPerPage = 10;

export default function BasicTable({ filterGroup, search }) {
  const [page, setPage] = useState(1);
  const [events, setEvents] = useState([]);
  const { performFetch } = useFetch(
    `/event/all/?group=${filterGroup}&search=${search}`,
    handleReceivedData
  );

  useEffect(() => {
    performFetch();
  }, [filterGroup, search]);

  function handleReceivedData(data) {
    setEvents(data.eventsData);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const pageCount = Math.ceil(events.length / rowsPerPage);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHeader />
          <TableBody>
            <EventTableRow
              rows={events.slice((page - 1) * rowsPerPage, page * rowsPerPage)}
            />
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={pageCount}
        page={page}
        onChange={handleChangePage}
        size="small"
        sx={{ marginTop: 2, display: "flex", justifyContent: "flex-end" }}
      />
    </Container>
  );
}

BasicTable.propTypes = {
  filterGroup: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
};
