import * as React from "react";
import { useState } from "react";
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
import { rows } from "./EventData";

const rowsPerPage = 15;

export default function BasicTable({ filterGroup, search }) {
  const [page, setPage] = useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const filteredRows = rows.filter((row) => {
    const groupFilterIsValid =
      !filterGroup || row.group === parseInt(filterGroup, 10);
    const searchTermMatches = row.event
      .toLowerCase()
      .includes(search.toLowerCase());

    return groupFilterIsValid && searchTermMatches;
  });

  const pageCount = Math.ceil(filteredRows.length / rowsPerPage);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHeader />
          <TableBody>
            <EventTableRow
              rows={filteredRows.slice(
                (page - 1) * rowsPerPage,
                page * rowsPerPage
              )}
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
