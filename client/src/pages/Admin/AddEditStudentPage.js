import React, { useEffect, useMemo, useState } from "react";
import {
  TextField,
  Typography,
  Grid,
  Container,
  Stack,
  Box,
  Select,
} from "@mui/material";
import { CancelButton } from "../../components/Buttons/CancelButton";
import { Button } from "../../components/Buttons/Button";
import { toast } from "react-hot-toast";
import useFetch from "../../hooks/useFetch";
import FilterByGroup from "../../components/Filters/FilterByGroup";
import { useLocation, useParams } from "react-router-dom";
import { selectorIsAuth } from "../../components/redux/authSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AddEditStudentPage() {
  const isAuth = useSelector(selectorIsAuth);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isEdit = useMemo(() => pathname.includes("editStudent"), [pathname]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [groupNumber, setGroupNumber] = useState("");
  const { id } = useParams();
  const { performFetch: getUserDetails, error: errorDetails } = useFetch(
    `/user/${id}`,
    ({ userData }) => {
      // eslint-disable-next-line no-console

      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setEmail(userData.email);
      setGroupNumber(userData.group[0]?._id);
    }
  );

  useEffect(() => {
    isEdit && id && getUserDetails();
  }, [isEdit]);

  const { performFetch, error } = useFetch("/auth/register", () => {
    // eslint-disable-next-line no-console
    toast.success("Student added successfully");
  });
  const { performFetch: updateUser, error: errorUpdateUser } = useFetch(
    `/user/edit/${id}`,
    () => {
      // eslint-disable-next-line no-console
      toast.success("Student updated successfully");
    }
  );
  // eslint-disable-next-line no-console
  console.log(errorUpdateUser);
  // eslint-disable-next-line no-console
  console.log(error);
  // eslint-disable-next-line no-console
  console.log(errorDetails);
  // eslint-disable-next-line no-console
  console.log(groupNumber);

  const handleSave = (event) => {
    event.preventDefault();
    const usersData = {
      firstName: firstName,
      lastName: lastName,
      group: [groupNumber],
      email: email,
      ...(!isEdit && { password: "hsdkhdshdlash" }),
    };
    // eslint-disable-next-line no-console
    console.log(usersData);
    isEdit ? updateUser(usersData, "PUT") : performFetch(usersData, "POST");
  };

  if (!isAuth) {
    return navigate("/login");
  }

  return (
    <form onSubmit={handleSave}>
      <Container maxWidth="md" sx={{ marginTop: "25px" }}>
        <Grid container spacing={3}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ mb: 4, mt: 6, textAlign: "center" }}
            >
              {isEdit ? "Edit Student" : "Add Student"}
            </Typography>
          </Box>
          <Grid item xs={12}>
            <TextField
              label="First Name"
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Last Name"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2}>
              <TextField
                label="Email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FilterByGroup
                onFilterChange={(event) => setGroupNumber(event)}
                isSelect={true}
                idGroup={isEdit && groupNumber}
              >
                <Select label="Filter" fullWidth />
              </FilterByGroup>
            </Stack>
          </Grid>

          <Grid container justifyContent="center">
            <Stack
              direction="row"
              justifyContent="center"
              spacing={2}
              mt={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button type="submit" variant="outlined">
                Save
              </Button>
              <CancelButton variant="contained">Cancel</CancelButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
}
