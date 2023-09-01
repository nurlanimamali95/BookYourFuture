// EventTableRow.js
import React from "react";
import { TableRow, TableCell } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

function EventTableRow({ rows }) {
  const navigate = useNavigate();

  const handleEditClick = (key) => {
    navigate(`/edit/${key}`);
  };

  return rows.map((row) => (
    <TableRow
      key={row.key}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {row.event}
      </TableCell>
      <TableCell align="right">{row.date}</TableCell>
      <TableCell align="right">{row.location}</TableCell>
      <TableCell align="right">{row.group}</TableCell>
      <TableCell align="right">{row.student}</TableCell>
      <TableCell align="right">
        <EditIcon
          onClick={() => handleEditClick(row.key)}
          fontSize="small"
          color="action"
          cursor="pointer"
        />
      </TableCell>
    </TableRow>
  ));
}

export default EventTableRow;
