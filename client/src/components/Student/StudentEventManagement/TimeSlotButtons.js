import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

function generateRadioButtons(buttonsData) {
  return buttonsData.map((button) => (
    <FormControlLabel
      key={button.value}
      value={button.value}
      control={
        <Radio
          icon={<Button variant="outlined">{button.label}</Button>}
          checkedIcon={<Button variant="contained">{button.label}</Button>}
        />
      }
    />
  ));
}

export default function TimeSlotButtons() {
  const buttonsData = [
    { value: "1", label: "10:00-11:00" },
    { value: "2", label: "11:00-12:00" },
    { value: "3", label: "12:00-13:00" },
  ];

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        sx={{ display: "flex", flexDirection: "row" }}
      >
        {generateRadioButtons(buttonsData)}
      </RadioGroup>
    </FormControl>
  );
}
