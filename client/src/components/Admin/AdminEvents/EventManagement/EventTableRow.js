// EventTableRow.js

import React from "react";
import { TableRow, TableCell } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

function EventTableRow({ rows }) {
  const navigate = useNavigate();

  const handleEditClick = (_id) => {
    navigate(`/events/edit/${_id}`);
  };

  return rows.map((event) => (
    <TableRow
      key={event._id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {event.title}
      </TableCell>
      <TableCell align="right">
        {new Date(event.createdAt).toLocaleDateString()}
      </TableCell>
      <TableCell align="right">{event.location}</TableCell>
      <TableCell align="right">
        {event.group.map((g) => g.numberOfGroupName).join(", ")}
      </TableCell>
      <TableCell align="right">
        {event.student.map((s) => s.firstName + " " + s.lastName).join(", ")}
      </TableCell>
      <TableCell align="right">
        <EditIcon
          onClick={() => handleEditClick(event._id)}
          fontSize="small"
          color="action"
          cursor="pointer"
        />
      </TableCell>
    </TableRow>
  ));
}

export default EventTableRow;
