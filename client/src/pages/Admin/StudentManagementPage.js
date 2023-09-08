import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import {
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

import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Buttons/Button";
import DeleteButton from "../../components/Buttons/DeleteButton";

export default function StudentManagementPage() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  // eslint-disable-next-line no-console
  console.log(data);
  useEffect(() => {
    performFetch();
    // eslint-disable-next-line no-console
    console.log(error);
  }, []);

  const { performFetch, error, isLoading } = useFetch("/user/all", (result) => {
    // eslint-disable-next-line no-console
    console.log(result);

    setData(result.usersData);
  });

  const handleEditClick = (id) => {
    // Handle edit action here
    // eslint-disable-next-line no-console
    console.log(`Edit clicked for ID ${id}`);
  };

  return (
    <>
      {isLoading && <h1>Loading</h1>}
      {data && (
        <Container maxWidth="md">
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ mb: 4, mt: 6, textAlign: "center" }}
            >
              Students Management
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              marginBottom: "20px",
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                navigate("/addStudent");
                // eslint-disable-next-line no-console
                console.log("Add Student clicked");
              }}
            >
              Add Student
            </Button>
          </Box>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Full Name</TableCell>
                  <TableCell>Group</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Github</TableCell>
                  <TableCell>Edit</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((student) => (
                  <TableRow key={student._id}>
                    <TableCell>
                      {student.firstName} {student.lastName}
                    </TableCell>
                    <TableCell>{student.group}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.github}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEditClick(student._id)}>
                        <EditIcon sx={{ color: "grey" }} />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <DeleteButton
                        id={student._id}
                        page="user"
                        reFetch={performFetch}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      )}
    </>
  );
}
