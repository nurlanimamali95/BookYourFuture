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
  TextField, // Import TextField for search
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Buttons/Button";
import DeleteButton from "../../components/Buttons/DeleteButton";
import FilterByGroup from "../../components/Admin/AdminEvents/EventManagement/FilterByGroup";

function StudentManagementPage() {
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [selectedGroup, setSelectedGroup] = useState("All"); // State for selected group filter

  const navigate = useNavigate();

  useEffect(() => {
    performFetch();
  }, []);

  const { performFetch, error, isLoading } = useFetch("/user/all", (result) => {
    setData(result.usersData);
    // eslint-disable-next-line no-console
    console.error(error);
  });

  const handleEditClick = (id) => {
    // eslint-disable-next-line no-console
    console.log(`Edit clicked for ID ${id}`);
    navigate(`editStudent/${id}`);
  };

  const filteredData = data
    ? data.filter((student) => {
        // Check if the student matches the search query
        const fullName =
          `${student.firstName} ${student.lastName}`.toLowerCase();
        const email = student.email.toLowerCase();
        const query = searchQuery.toLowerCase();
        const isGroupMatch =
          selectedGroup === "All" ||
          student.group[0]?.numberOfGroupName.toString() === selectedGroup;

        return (
          (fullName.includes(query) || email.includes(query)) && isGroupMatch
        );
      })
    : [];

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
              justifyContent: "space-between", // Change to space-between
              alignItems: "center", // Center vertically
              marginBottom: "20px",
            }}
          >
            <Box>
              <TextField
                label="Search"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Box>
            <Box>
              <FilterByGroup
                onFilterChange={(group) => setSelectedGroup(group)}
              />
            </Box>
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
                {filteredData.map((student) => (
                  <TableRow key={student._id}>
                    <TableCell>
                      {student.firstName} {student.lastName}
                    </TableCell>
                    <TableCell
                      key={student.group[0]?._id}
                      value={student.group[0]?.numberOfGroupName}
                    >
                      {student.group[0]?.numberOfGroupName}
                    </TableCell>
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
                        titleConfirm={"Delete student"}
                        contentConfirm={`Are you sure you want to delete a student ${student.firstName} ${student.lastName}?`}
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

export default StudentManagementPage;
