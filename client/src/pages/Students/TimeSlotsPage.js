import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BookTime from "../../components/Student/StudentEventManagement/BookTime";
import Typography from "@mui/material/Typography";

export default function TimeSlotsPage() {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h4">Social interview with Adyen</Typography>
            <Typography variant="subtitle1" mt={"2em"}>
              Location: Online. Check the github repository: link
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <BookTime />
          </Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={8}></Grid>
        </Grid>
      </Box>
    </Container>
  );
}
