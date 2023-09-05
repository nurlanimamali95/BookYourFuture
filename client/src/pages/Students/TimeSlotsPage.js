import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BookTime from "../../components/Student/StudentEventManagement/BookTime";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function TimeSlotsPage() {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Container>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" mt={"1em"}>
              Social interview with Adyen
            </Typography>
            <Typography variant="subtitle1" mt={"2em"}>
              Book a time slot:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <BookTime
              date={"September 10"}
              selectedValue={selectedValue}
              handleChange={handleChange}
            />
            <BookTime
              date={"September 12"}
              selectedValue={selectedValue}
              handleChange={handleChange}
            />
            <BookTime
              date={"September 14"}
              selectedValue={selectedValue}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item xs={8}>
            <Button variant="contained" sx={{ ml: "11em" }}>
              Confirm
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
