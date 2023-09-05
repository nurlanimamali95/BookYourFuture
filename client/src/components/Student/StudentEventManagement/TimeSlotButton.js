import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

function generateRadioButtons(buttonsData) {
  return buttonsData.map((button) => (
    <FormControlLabel
      key={button.value}
      value={button.value}
      control={
        <Radio
          icon={<Button variant="outlined">{button.label}</Button>}
          checkedIcon={<Button variant="contained">{button.label}</Button>}
          name="timeSlot"
        />
      }
    />
  ));
}

export default function TimeSlotButtons(props) {
  const buttonsData = [
    { value: "1", label: "10:00-11:00" },
    { value: "2", label: "11:00-12:00" },
    { value: "3", label: "12:00-13:00" },
    { value: "4", label: "12:00-13:00" },
    { value: "5", label: "12:00-13:00" },
  ];

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        sx={{ display: "flex", flexDirection: "row" }}
        value={props.value}
        onChange={props.change}
      >
        {generateRadioButtons(buttonsData)}
      </RadioGroup>
    </FormControl>
  );
}

TimeSlotButtons.propTypes = {
  date: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};
