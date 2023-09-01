import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import PropTypes from "prop-types";

export function DurationDropdown({ value, onChange }) {
  return (
    <FormControl sx={{ minWidth: 220 }}>
      <InputLabel id="duration-select-label">Duration</InputLabel>
      <Select
        labelId="duration-select-label"
        id="duration-select"
        label="Duration"
        value={value}
        onChange={onChange}
      >
        <MenuItem value={15}>15 min</MenuItem>
        <MenuItem value={30}>30 min</MenuItem>
        <MenuItem value={60}>1 hour</MenuItem>
        <MenuItem value={180}>3 hours</MenuItem>
      </Select>
    </FormControl>
  );
}

DurationDropdown.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

export function LocationToggle() {
  return (
    <FormControl component="fieldset" sx={{ pl: 2 }}>
      <FormLabel component="legend">Location</FormLabel>
      <RadioGroup row name="location">
        <FormControlLabel value="Online" control={<Radio />} label="Online" />
        <FormControlLabel value="Offline" control={<Radio />} label="Offline" />
      </RadioGroup>
    </FormControl>
  );
}

export function ReceiverToggle() {
  return (
    <FormControl component="fieldset" sx={{ mt: 4 }}>
      <FormLabel component="legend">Receiver Type</FormLabel>
      <RadioGroup row name="receiverType">
        <FormControlLabel value="Group" control={<Radio />} label="Group" />
        <FormControlLabel value="Student" control={<Radio />} label="Student" />
      </RadioGroup>
    </FormControl>
  );
}

export function GroupDropdown({ value, onChange }) {
  return (
    <FormControl sx={{ minWidth: 220 }}>
      <InputLabel id="group-select-label">Group</InputLabel>
      <Select
        labelId="group-select-label"
        id="group-select"
        value={value}
        label="Group"
        onChange={onChange}
      >
        <MenuItem value={43}>Group</MenuItem>
        <MenuItem value={44}>30 min</MenuItem>
        <MenuItem value={45}>1 hour</MenuItem>
        <MenuItem value={46}>3 hours</MenuItem>
      </Select>
    </FormControl>
  );
}

GroupDropdown.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

export function StudentDropdown({ value, onChange }) {
  return (
    <FormControl sx={{ minWidth: 220 }}>
      <InputLabel id="student-select-label">Student</InputLabel>
      <Select
        labelId="student-select-label"
        id="student-select"
        value={value}
        label="Student"
        onChange={onChange}
      >
        <MenuItem value={15}>15 min</MenuItem>
        <MenuItem value={30}>30 min</MenuItem>
        <MenuItem value={60}>1 hour</MenuItem>
        <MenuItem value={180}>3 hours</MenuItem>
      </Select>
    </FormControl>
  );
}

StudentDropdown.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};
