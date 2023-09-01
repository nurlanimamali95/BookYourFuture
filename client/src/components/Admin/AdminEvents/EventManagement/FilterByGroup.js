import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import PropTypes from "prop-types";

export default function FilterByGroup({ onFilterChange }) {
  const [group, setGroup] = useState("");

  const handleChange = (e) => {
    const selectGroup = e.target.value;
    setGroup(selectGroup);
    onFilterChange(selectGroup);
  };

  const uniqueGroups = [42, 43, 44, 45];

  return (
    <FormControl size="small" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="group-label">Group</InputLabel>
      <Select
        labelId="group-label"
        variant="outlined"
        size="small"
        value={group}
        onChange={handleChange}
        label="Group"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {uniqueGroups.map((group) => (
          <MenuItem key={group} value={group.toString()}>
            {`Group ${group}`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

FilterByGroup.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
