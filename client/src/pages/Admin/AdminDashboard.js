import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import EventByGroup from "../../components/Admin/AdminDashboard/EventByGroup/EventByGroup";
import PieChartCard from "../../components/Admin/AdminDashboard/PieChart/PieChartCard";
import AdminCalender from "../../components/Admin/AdminDashboard/Calender/AdminCalender";
import AdminEventTable from "../../components/Admin/AdminDashboard/AdminEventTable/AdminEventTable";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

export default function AdminDashboard() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h3" component="h2" sx={{ my: 4 }}>
            Admin Dashboard
          </Typography>
          <Grid container spacing={2} rowSpacing={4}>
            <Grid xs={8}>
              <Item>
                <EventByGroup />
              </Item>
            </Grid>
            <Grid xs={4}>
              <Item>
                <PieChartCard />
              </Item>
            </Grid>
            <Grid xs={4}>
              <Item>
                <AdminCalender />
              </Item>
            </Grid>
            <Grid xs={8}>
              <Item>
                <AdminEventTable />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
