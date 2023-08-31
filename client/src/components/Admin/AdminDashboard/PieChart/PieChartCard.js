import * as React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import PieChart from "./PieChart";

export default function PieChartCard() {
  return (
    <>
      <Typography
        variant="h5"
        component="h2"
        sx={{ mt: 2, mb: 1, mx: 1, textAlign: "left" }}
      >
        Number of students
      </Typography>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          mb: 2,

          mx: 1,
          textAlign: "left",
          color: "#3f51b5",
          fontWeight: "bold",
        }}
      >
        40
      </Typography>
      <Divider sx={{ my: 3 }} />

      <PieChart />
    </>
  );
}
