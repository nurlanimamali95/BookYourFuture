import React, { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { useRadioContext } from "./TimeSlotContext";
import useFetch from "../../../hooks/useFetch";
import dayjs from "dayjs";
import "dayjs/locale/en"; // You can choose the desired locale if needed

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
  const { selectedValue, handleChange } = useRadioContext();
  const [sessionSlots, setSessionSlots] = useState([]);

  const { performFetch } = useFetch("/event/all", (data) => {
    if (data.success && data.eventsData.length > 0) {
      const firstEvent = data.eventsData[35];
      if (firstEvent.sessionSlot && firstEvent.sessionSlot.length > 0) {
        setSessionSlots(firstEvent.sessionSlot);
      }
    }
  });

  useEffect(() => {
    performFetch();
  }, []);

  const buttonsData = sessionSlots.map((slot) => {
    const durationInMinutes = slot.durationInSeconds
      ? slot.durationInSeconds / 3600
      : 0;

    const startTime = dayjs(slot.startTime);
    const endTime = startTime.add(durationInMinutes, "minute");

    const label = `${startTime.format("HH:mm")}-${endTime.format("HH:mm")}`;

    return {
      value: slot._id,
      label: label,
    };
  });

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        sx={{ display: "flex", flexDirection: "row" }}
        value={selectedValue}
        onChange={handleChange}
      >
        {generateRadioButtons(buttonsData)}
      </RadioGroup>
    </FormControl>
  );
}

TimeSlotButtons.propTypes = {
  date: PropTypes.string,
  value: PropTypes.string,
  change: PropTypes.func,
};
