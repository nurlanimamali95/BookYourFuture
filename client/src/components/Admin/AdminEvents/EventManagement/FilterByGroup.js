import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import useFetch from "../../../../hooks/useFetch";

export default function FilterByGroup({
  onFilterChange,
  isSelect = false,
  idGroup = "",
}) {
  const [group, setGroup] = useState("");
  const [groupList, setGroupList] = useState([]);

  const { performFetch, error } = useFetch("/group/all", handleReceivedData);
  useEffect(() => {
    isSelect && idGroup && setGroup(idGroup);
  }, [isSelect, idGroup]);

  useEffect(() => {
    performFetch();
  }, []);

  function handleReceivedData(data) {
    setGroupList(data.groupsData);
  }

  const handleChange = (e) => {
    const selectGroup = e.target.value;
    setGroup(selectGroup);
    onFilterChange(selectGroup);
  };

  if (error) return <div>Error: {error.message}</div>;

  const activeGroups = groupList
    .filter((group) => group.status === "active")
    .map((group) => ({ number: group.numberOfGroupName, id: group._id }));

  return (
    <FormControl size="small" sx={{ m: 1, minWidth: "140px" }}>
      <InputLabel id="group-label">Group</InputLabel>
      <Select
        labelId="group-label"
        variant="outlined"
        size="small"
        value={group}
        onChange={handleChange}
        label="Group"
      >
        <MenuItem value="All">
          <em>All</em>
        </MenuItem>

        {activeGroups.map(({ number, id }) => (
          <MenuItem key={id} value={isSelect ? id : number.toString()}>
            {`Group ${number}`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

FilterByGroup.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  isSelect: PropTypes.bool,
  idGroup: PropTypes.string,
};
