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

export default function GroupManagement() {
  const [data, setData] = useState(null);

  const { performFetch, error, isLoading } = useFetch(
    "/group/all",
    (result) => {
      // eslint-disable-next-line no-console
      console.log(result);
      setData(result.groupsData);
    }
  );
  useEffect(() => {
    performFetch();
    // eslint-disable-next-line no-console
    console.log(error);
  }, []);

  const handleEditClick = (id) => {
    // Handle edit action here
    // eslint-disable-next-line no-console
    console.log(`Edit clicked for ID ${id}`);
  };

  const navigate = useNavigate();
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
              Group Management
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
                navigate("/addGroup");
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
                  <TableRow key={item._id}>
                    <TableCell>{item.numberOfGroupName}</TableCell>
                    <TableCell>{item.color}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>
                      {new Date(item.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEditClick(item._id)}>
                        <EditIcon sx={{ color: "grey" }} />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <DeleteButton id={item._id} reFetch={performFetch} />
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
