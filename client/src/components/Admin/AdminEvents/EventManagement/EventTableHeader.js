import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";

export default function TableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ fontWeight: "bold" }}>Event</TableCell>
        <TableCell sx={{ fontWeight: "bold" }} align="right">
          Date
        </TableCell>
        <TableCell sx={{ fontWeight: "bold" }} align="right">
          Location
        </TableCell>
        <TableCell sx={{ fontWeight: "bold" }} align="right">
          Group
        </TableCell>
        {/* <TableCell sx={{ fontWeight: "bold" }} align="right">
          Student
        </TableCell> */}
        <TableCell sx={{ fontWeight: "bold" }} align="right"></TableCell>
      </TableRow>
    </TableHead>
  );
}
