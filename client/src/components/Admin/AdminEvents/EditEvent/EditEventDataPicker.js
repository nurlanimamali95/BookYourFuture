import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import "dayjs/locale/de";
import EventContext from "../AddEvent/EventContext";

export default function EditDateTimePicker() {
  const { eventData, setEventData } = useContext(EventContext);

  // You can use eventData to populate initial values
  const [selectedDate, setSelectedDate] = React.useState(
    eventData.someDateProperty
  );

  const handleDateChange = (date) => {
    // Handle the date change logic for editing
    setSelectedDate(date);
    // Update your context or API with the new date if necessary
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
      <DateTimePicker
        label="Edit date and time"
        value={selectedDate}
        onChange={handleDateChange}
        ampm={false}
      />
    </LocalizationProvider>
  );
}
