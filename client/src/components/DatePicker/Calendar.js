import * as React from "react";
import dayjs from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import { todayDate } from "../Student/StudentEventManagement/FormatDate";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const initialValue = dayjs(todayDate);

function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth &&
    highlightedDays.indexOf(props.day.date()) >= 0;

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? "😸" : undefined}
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    </Badge>
  );
}

export default function Calendar(props) {
  const { eventsData, onDateSelected } = props;
  const [highlightedDays, setHighlightedDays] = useState([]);

  useEffect(() => {
    const allHighlightedDays = [];

    eventsData.forEach((event) => {
      event.sessionSlot.forEach((slot) => {
        const startTime = dayjs(slot.startTime);
        allHighlightedDays.push(startTime.date());
      });
    });

    setHighlightedDays(allHighlightedDays);
  }, [eventsData]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        defaultValue={initialValue}
        onChange={onDateSelected}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays,
          },
        }}
      />
    </LocalizationProvider>
  );
}

ServerDay.propTypes = {
  highlightedDays: PropTypes.arrayOf(PropTypes.number),
  day: PropTypes.object.isRequired,
  outsideCurrentMonth: PropTypes.bool.isRequired,
};

Calendar.propTypes = {
  eventsData: PropTypes.arrayOf(
    PropTypes.shape({
      sessionSlot: PropTypes.arrayOf(
        PropTypes.shape({
          startTime: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  onDateSelected: PropTypes.func.isRequired,
};
