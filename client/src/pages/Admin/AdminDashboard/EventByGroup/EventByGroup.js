import * as React from "react";
import Box from "@mui/material/Box";
import TabList from "./TabList";
import TabPanels from "./TabPanels";

export default function EventByGroup() {
  const demoGroup = [42, 43, 44, 45];
  const demoData = [
    {
      groupNumber: 43,
      name: "Nurlan",
      title: "Interview with Adyen",
      date: "12 September",
      time: "16:00 - 17:00",
      status: "Online",
    },
    {
      groupNumber: 43,
      name: "Anastasia",
      title: "Interview with Adyen",
      date: "16 September",
      time: "16:00 - 17:00",
      status: "Online",
    },
    {
      groupNumber: 42,
      name: "Anastasia",
      title: "Interview with Adyen",
      date: "16 September",
      time: "16:00 - 17:00",
      status: "Online",
    },
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList
          value={value}
          onChange={handleChange}
          groupLabels={demoGroup}
        />
      </Box>
      <TabPanels value={value} groupLabels={demoGroup} demoData={demoData} />
    </Box>
  );
}
