import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import { Container } from "@mui/material";

function createData(event, date, location, group, student) {
  return { event, date, location, group, student };
}

const rows = [
  createData("Class Call", "12.03.2023", "Online", 42, "All"),
  createData("Class Call", "17.03.2023", "Online", 43, "All"),
  createData("Social Interview", "18.03.2023", "Online", 44, "Nurlan"),
  createData("Social Call", "19.03.2023", "Offline", 43, "Alevtina"),
  createData("Tech Interview", "20.03.2023", "Offline", 44, "Alex"),
  createData("Class Call", "12.03.2023", "Online", 44, "All"),
  createData("Class Call", "25.03.2023", "Online", 43, "All"),
  createData("Social Interview", "18.03.2023", "Online", 44, "Nurlan"),
  createData("Class Call", "17.03.2023", "Online", 43, "All"),
  createData("Class Call", "17.03.2023", "Online", 43, "All"),
];

const rowsPerPage = 6;

export default function BasicTable() {
  const [page, setPage] = useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Event</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Group</TableCell>
              <TableCell align="right">Student</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice((page - 1) * rowsPerPage, page * rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.event}
                  </TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.location}</TableCell>
                  <TableCell align="right">{row.group}</TableCell>
                  <TableCell align="right">{row.student}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(rows.length / rowsPerPage)}
        page={page}
        onChange={handleChangePage}
        size="small"
        sx={{ marginTop: 2, display: "flex", justifyContent: "flex-end" }}
      />
    </Container>
  );
}
