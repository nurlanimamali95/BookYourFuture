import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BookTime from "../../components/Student/StudentEventManagement/BookTime";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { RadioProvider } from "../../components/Student/StudentEventManagement/TimeSlotContext";
import { useState } from "react";

export default function TimeSlotsPage() {
  const [expanded, setExpanded] = useState(null);

  const handleAccordionChange = (panel) => {
    setExpanded(panel === expanded ? null : panel);
  };

  return (
    <RadioProvider>
      <Container>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                mt={"1em"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Social interview with Adyen
              </Typography>
              <Typography
                variant="subtitle1"
                mt={"2em"}
                sx={{ textAlign: "center" }}
              >
                Book a time slot and check the github repository for preparation
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <BookTime
                date={"September 10"}
                expanded={expanded === "panel1"}
                onChange={() => handleAccordionChange("panel1")}
              />
              <BookTime
                date={"September 12"}
                expanded={expanded === "panel2"}
                onChange={() => handleAccordionChange("panel2")}
              />
              <BookTime
                date={"September 14"}
                expanded={expanded === "panel3"}
                onChange={() => handleAccordionChange("panel3")}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                sx={{
                  display: "flex",
                  margin: "0 auto",
                }}
              >
                Confirm
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </RadioProvider>
  );
}
