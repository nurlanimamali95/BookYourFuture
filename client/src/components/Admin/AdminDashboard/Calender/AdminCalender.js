import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import PropTypes from "prop-types";

export default function AdminCalender(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        showDaysOutsideCurrentMonth
        fixedWeekNumber={6}
        onChange={props.onDateSelected}
      />
    </LocalizationProvider>
  );
}

AdminCalender.propTypes = {
  onDateSelected: PropTypes.func.isRequired,
};
