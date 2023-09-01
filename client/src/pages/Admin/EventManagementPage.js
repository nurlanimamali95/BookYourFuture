import React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BasicTable from "../../components/Admin/AdminEvents/EventManagement/EventManagmentTable";
import FilterByGroup from "../../components/Admin/AdminEvents/EventManagement/FilterByGroup";
import SearchEvent from "../../components/Admin/AdminEvents/EventManagement/SearchEvent";
import Grid from "@mui/material/Grid";
export default function EventManagement() {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleAddEvent = () => {
    navigate("/add-event");
  };

  return (
    <Container>
      <Typography variant="h3" sx={{ pt: 4, mb: 2, ml: 2 }}>
        Event Management
      </Typography>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={10} container spacing={1}>
          <Grid item sx={{ mt: 2, mb: 1, ml: 2 }}>
            <FilterByGroup
              onFilterChange={(group) => setSelectedGroup(group)}
            />
          </Grid>
          <Grid item sx={{ mt: 2, mb: 1 }}>
            <SearchEvent onSearchChange={(term) => setSearch(term)} />
          </Grid>
        </Grid>

        <Grid item xs={2} container justifyContent="flex-end">
          <Button
            variant="contained"
            onClick={handleAddEvent}
            sx={{ mt: 2, mr: 3, mb: 1 }}
          >
            Add Event
          </Button>
        </Grid>
      </Grid>
      <BasicTable filterGroup={selectedGroup} search={search} />
    </Container>
  );
}
