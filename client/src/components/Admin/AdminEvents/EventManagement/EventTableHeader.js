import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";

export default function TableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Event</TableCell>
        <TableCell align="right">Date</TableCell>
        <TableCell align="right">Location</TableCell>
        <TableCell align="right">Group</TableCell>
        <TableCell align="right">Student</TableCell>
        <TableCell align="right"></TableCell>
      </TableRow>
    </TableHead>
  );
}
