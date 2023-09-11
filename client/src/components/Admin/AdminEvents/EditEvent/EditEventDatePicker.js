import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from "@mui/material/Box";
import EventContext from "../AddEvent/EventContext";
import "dayjs/locale/de";

export default function EditEventDatePicker() {
  const { eventData, setEventData } = React.useContext(EventContext);

  const handleAdd = () => {
    const newSlot = { startTime: null }; // Temporarily using Date.now() for unique _id
    setEventData((prev) => ({
      ...prev,
      sessionSlot: [...prev.sessionSlot, newSlot],
    }));
  };

  const handleRemove = (idToRemove) => {
    setEventData((prev) => ({
      ...prev,
      sessionSlot: prev.sessionSlot.filter((slot) => slot._id !== idToRemove),
    }));
    setEventData((prev) => ({
      ...prev,
      sessionSlot: prev.sessionSlot.filter((slot) => slot._id !== idToRemove),
    }));
  };

  const handleDateChange = (date, index) => {
    const updatedSessionSlot = [...eventData.sessionSlot];
    if (!updatedSessionSlot[index]) {
      updatedSessionSlot[index] = {};
    }
    updatedSessionSlot[index].startTime = date ? date.toDate() : null;

    // Convert duration to seconds and store it in the sessionSlot
    const durationInSeconds = Number(eventData.duration) * 3600;
    updatedSessionSlot[index].durationInSeconds = durationInSeconds;

    setEventData((prev) => ({ ...prev, sessionSlot: updatedSessionSlot }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
      <DemoContainer components={["DateTimePicker"]} sx={{ mt: 3 }}>
        {eventData.sessionSlot.map((slot, index) => (
          <Box
            key={slot._id}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <DateTimePicker
              label="Pick date and time"
              value={slot.startTime}
              onChange={(date) => handleDateChange(date, index)}
              ampm={false}
              sx={{ width: "100%", mr: 2 }}
            />
            <IconButton
              color="secondary"
              onClick={() => handleRemove(slot._id)}
              disabled={eventData.sessionSlot.length === 1}
              sx={{ ml: 1 }}
            >
              <RemoveCircleOutlineIcon fontSize="large" />
            </IconButton>
            <IconButton color="primary" onClick={handleAdd} sx={{ ml: 1 }}>
              <AddCircleOutlineIcon fontSize="large" />
            </IconButton>
          </Box>
        ))}
      </DemoContainer>
    </LocalizationProvider>
  );
}
