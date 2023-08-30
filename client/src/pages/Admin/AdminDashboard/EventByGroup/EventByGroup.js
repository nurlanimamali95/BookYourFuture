import * as React from "react";
import Box from "@mui/material/Box";
import TabList from "./TabList";
import TabPanels from "./TabPanels";
import { useState } from "react";

export default function EventByGroup() {
  const demoGroup = [42, 43, 44, 45];
  const demoData = [
    {
      groupNumber: 43,
      name: "1",
      title: "Interview with Adyen",
      date: "12 September",
      time: "16:00 - 17:00",
      status: "Online",
    },
    {
      groupNumber: 43,
      name: "2",
      title: "Interview with Adyen",
      date: "16 September",
      time: "16:00 - 17:00",
      status: "Online",
    },
    {
      groupNumber: 43,
      name: "3",
      title: "Interview with Adyen",
      date: "16 September",
      time: "16:00 - 17:00",
      status: "Online",
    },
    {
      groupNumber: 43,
      name: "4",
      title: "Interview with Adyen",
      date: "16 September",
      time: "16:00 - 17:00",
      status: "Online",
    },
    {
      groupNumber: 43,
      name: "5",
      title: "Interview with Adyen",
      date: "16 September",
      time: "16:00 - 17:00",
      status: "Online",
    },
    {
      groupNumber: 43,
      name: "6",
      title: "Interview with Adyen",
      date: "16 September",
      time: "16:00 - 17:00",
      status: "Online",
    },
    {
      groupNumber: 43,
      name: "7",
      title: "Interview with Adyen",
      date: "16 September",
      time: "16:00 - 17:00",
      status: "Online",
    },
    {
      groupNumber: 43,
      name: "8",
      title: "Interview with Adyen",
      date: "16 September",
      time: "16:00 - 17:00",
      status: "Online",
    },
    {
      groupNumber: 43,
      name: "9",
      title: "Interview with Adyen",
      date: "16 September",
      time: "16:00 - 17:00",
      status: "Online",
    },
    {
      groupNumber: 43,
      name: "10",
      title: "Interview with Adyen",
      date: "16 September",
      time: "16:00 - 17:00",
      status: "Online",
    },
    {
      groupNumber: 43,
      name: "11",
      title: "Interview with Adyen",
      date: "16 September",
      time: "16:00 - 17:00",
      status: "Online",
    },
    {
      groupNumber: 43,
      name: "12",
      title: "Interview with Adyen",
      date: "16 September",
      time: "16:00 - 17:00",
      status: "Online",
    },
    {
      groupNumber: 43,
      name: "13",
      title: "Interview with Adyen",
      date: "16 September",
      time: "16:00 - 17:00",
      status: "Online",
    },
  ];

  const [value, setValue] = useState(0);

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
