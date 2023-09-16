import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import useFetch from "../../hooks/useFetch";
import { CancelButton } from "../../components/Buttons/CancelButton";
import { Button } from "../../components/Buttons/Button";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function AddEditGroupPage() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const isEdit = useMemo(() => pathname.includes("editGroup"), [pathname]);
  const [groupName, setGroupName] = useState("");
  const [status, setStatus] = useState("active");
  const { performFetch: getGroupDetails, error: errorDetails } = useFetch(
    `/group/${id}`,
    ({ groupData }) => {
      setGroupName(groupData.numberOfGroupName);

      setStatus(groupData.status);
    }
  );

  useEffect(() => {
    isEdit && id && getGroupDetails();
  }, [isEdit]);
  const { performFetch, error } = useFetch("/group/add", () => {
    // eslint-disable-next-line no-console
    toast.success("Group added successfully");
    setGroupName("");
    navigate("/groups");
  });
  const { performFetch: updateGroup, error: errorUpdateGroup } = useFetch(
    `/group/edit/${id}`,
    () => {
      // eslint-disable-next-line no-console
      toast.success("Group updated successfully");
      navigate("/groups");
    }
  );
  // useEffect(() => {
  //   const newError = errorUpdateGroup || ErrorIcon || errorDetails;
  //   newError && toast.error(newError);
  // }, [error, errorUpdateGroup, errorDetails]);
  // eslint-disable-next-line no-console
  console.log(errorUpdateGroup);
  // eslint-disable-next-line no-console
  console.log(error);
  // eslint-disable-next-line no-console
  console.log(errorDetails);

  const handleSave = (event) => {
    event.preventDefault();

    const groupData = {
      numberOfGroupName: Number(groupName),
      status,
      students: ["64ef5d073b654eb236073a61"],
    };
    // eslint-disable-next-line no-console
    console.log(groupData);
    isEdit ? updateGroup(groupData, "PATCH") : performFetch(groupData, "POST");
  };

  // performFetch(groupData, "POST");
  // Handle saving the student data here
  // eslint-disable-next-line no-console
  // console.log("Student data:", { firstName, lastName, email, groupNumber });
  // };

  const handleCancel = () => {
    // Handle cancel action (e.g., navigate back to the student list)
    navigate("/groups");
  };

  return (
    <form onSubmit={handleSave}>
      <Container maxWidth="sm" sx={{ marginTop: "25px" }}>
        <Grid container spacing={3}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ mb: 4, mt: 6, textAlign: "center" }}
            >
              {isEdit ? "Edit Group" : "Add Group"}
            </Typography>
          </Box>

          <Grid item xs={12}>
            <TextField
              label="Group Name"
              fullWidth
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              autoComplete="off"
              disabled={isEdit}
            />
          </Grid>
          {isEdit && (
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Group Color</InputLabel>
                <Select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <MenuItem value={"active"}>active</MenuItem>
                  <MenuItem value={"inactive"}>inactive</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          )}
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
              <CancelButton
                onClick={handleCancel}
                variant="contained"
                color="primary"
              >
                Cancel
              </CancelButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
}

export default AddEditGroupPage;
