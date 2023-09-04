import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BookTime from "../../components/Student/StudentEventManagement/BookTime";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function TimeSlotsPage() {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h4" mt={"1em"}>
              Social interview with Adyen
            </Typography>
            <Typography variant="subtitle1" mt={"2em"}>
              Book a time slot:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <BookTime date={"September 10"} />
          </Grid>
          <Grid item xs={8}>
            <BookTime date={"September 12"} />
          </Grid>
          <Grid item xs={8}>
            <BookTime date={"September 14"} />
          </Grid>
          <Grid item xs={8}>
            {" "}
            <Button variant="contained" sx={{ ml: "11em" }}>
              Confirm
            </Button>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={8}></Grid>
        </Grid>
      </Box>
    </Container>
  );
}
