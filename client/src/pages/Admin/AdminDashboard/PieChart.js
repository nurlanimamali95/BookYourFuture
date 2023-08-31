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
              { id: 0, value: 10, label: "G42" },
              { id: 1, value: 15, label: "G43" },
              { id: 2, value: 20, label: "G44" },
              { id: 3, value: 25, label: "G45" },
            ],
            innerRadius: 30,
          },
        ]}
        width={400}
        height={200}
      />
    </Box>
  );
}
