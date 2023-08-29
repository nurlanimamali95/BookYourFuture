import React from "react";
import Calendar from "../../components/DatePicker/Calendar";
import Notifications from "../../components/Notifications";
import Drawer from "../../components/Drawer";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import EventTable from "../../components/Table";
import Grid from "@mui/material/Grid";

export default function StudentDashboard() {
  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <Drawer />
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Your events for today
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Notifications />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Calendar />
          </Grid>
          <Grid item xs={12} sm={8}>
            <EventTable />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
