import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box } from "@mui/material";

export default function BasicPie() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "Group 42" },
              { id: 1, value: 15, label: "Group 43" },
              { id: 2, value: 20, label: "Group 44" },
              { id: 3, value: 25, label: "Group 45" },
            ],
            innerRadius: 30,
          },
        ]}
        height={150}
        legend={{
          direction: "column",
          position: {
            vertical: "bottom",
            horizontal: "right",
          },
        }}
        sx={{
          "--ChartsLegend-itemMarkSize": "12px",
          "--ChartsLegend-rootOffsetY": "-70px",
        }}
      />
    </Box>
  );
}
