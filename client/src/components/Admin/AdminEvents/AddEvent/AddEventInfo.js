import React from "react";
import { TextField, Stack } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";

import {
  DurationDropdown,
  LocationToggle,
  ReceiverToggle,
  GroupDropdown,
  StudentDropdown,
} from "./AddEventElements";

function handleDropdown(setter) {
  return (e) => {
    setter(e.target.value);
  };
}

export default function MainEventInfo() {
  const [duration, setDuration] = useState("");
  const [group, setGroup] = useState("");
  const [student, setStudent] = useState("");

  return (
    <>
      <Stack spacing={4}>
        <TextField
          id="standard-basic"
          label="Title"
          variant="standard"
          fullWidth
        />

        <TextField
          id="standard-multiline-flexible"
          label="Description"
          multiline
          maxRows={4}
          variant="standard"
          fullWidth
        />
      </Stack>
      <Stack direction="row" justifyContent="space-between" sx={{ mt: 6 }}>
        <DurationDropdown
          value={duration}
          onChange={handleDropdown(setDuration)}
        />
        <LocationToggle />
      </Stack>
      <ReceiverToggle />
      <Stack direction="row" justifyContent="space-between" sx={{ mt: 2 }}>
        <GroupDropdown value={group} onChange={handleDropdown(setGroup)} />
        <StudentDropdown
          value={student}
          onChange={handleDropdown(setStudent)}
        />
      </Stack>
    </>
  );
}

handleDropdown.propTypes = {
  setter: PropTypes.func.isRequired,
};
