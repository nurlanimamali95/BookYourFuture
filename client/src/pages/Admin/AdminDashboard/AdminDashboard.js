import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import EventByGroup from "./EventByGroup/EventByGroup";
import PieChart from "./PieChart";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AdminDashboard() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={8}>
              <Item>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ my: 2, ml: 1, textAlign: "left" }}
                >
                  Events by groups
                </Typography>
                <EventByGroup />
              </Item>
            </Grid>
            <Grid xs={4}>
              <Item>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ my: 2, mx: 1, textAlign: "left" }}
                >
                  Number of students
                </Typography>
                <PieChart />
              </Item>
            </Grid>
            <Grid xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid xs={8}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
