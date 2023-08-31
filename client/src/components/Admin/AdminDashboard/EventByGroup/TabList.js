import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabList({ value, onChange, groupLabels }) {
  return (
    <Tabs
      value={value}
      onChange={onChange}
      aria-label="basic tabs example"
      sx={{ my: 2, mx: 3 }}
    >
      {groupLabels.map((group) => (
        <Tab key={group} label={`Group ${group}`} {...a11yProps(group)} />
      ))}
    </Tabs>
  );
}

TabList.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  groupLabels: PropTypes.array.isRequired,
};
