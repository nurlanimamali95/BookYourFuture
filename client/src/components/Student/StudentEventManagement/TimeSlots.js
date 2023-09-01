import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="female"
          control={
            <Radio
              icon={<Button variant="outlined">10:00-11:00</Button>}
              checkedIcon={<Button variant="contained">10:00-11:00</Button>}
            />
          }
        />
        <FormControlLabel
          value="male"
          control={
            <Radio
              icon={<Button variant="outlined">11:00-12:00</Button>}
              checkedIcon={<Button variant="contained">11:00-12:00</Button>}
            />
          }
        />
        <FormControlLabel
          value="other"
          control={
            <Radio
              icon={<Button variant="outlined">12:00-13:00</Button>}
              checkedIcon={<Button variant="contained">12:00-13:00</Button>}
            />
          }
        />
      </RadioGroup>
    </FormControl>
  );
}
