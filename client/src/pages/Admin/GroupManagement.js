import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Container,
  Box,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const initialData = [
  {
    id: 1,
    group: "Group A",
    color: "Red",
    status: "Active",
    creationDate: "2023-09-01",
  },
  {
    id: 2,
    group: "Group B",
    color: "Blue",
    status: "Inactive",
    creationDate: "2023-09-02",
  },
  // Add more data as needed
];

export default function GroupManagement() {
  const [data, setData] = useState(initialData);

  const handleEditClick = (id) => {
    // Handle edit action here
    // eslint-disable-next-line no-console
    console.log(`Edit clicked for ID ${id}`);
  };

  const handleDeleteClick = (id) => {
    // Handle delete action here
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };
  const buttonStyle = {
    backgroundColor: "#56ae5a",
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "#56ae5a",
      border: "1px solid #56ae5a",
    },
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ mb: 4, mt: 6, textAlign: "center" }}
        >
          Group Management
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "end", marginBottom: "20px" }}
      >
        <Button
          variant="contained"
          sx={buttonStyle}
          onClick={() => {
            // Handle add group action here
            // eslint-disable-next-line no-console
            console.log("Add Group clicked");
          }}
        >
          Add Group
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Group</TableCell>
              <TableCell>Color</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Creation Date</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.group}</TableCell>
                <TableCell>{item.color}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.creationDate}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditClick(item.id)}>
                    <EditIcon sx={{ color: "grey" }} />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDeleteClick(item.id)}>
                    <DeleteIcon sx={{ color: "grey" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
