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
import { useSelector } from "react-redux";

const initialValue = dayjs(todayDate);

function ServerDay(props) {
  const { isSelected, ...other } = props;

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? "😸" : undefined}
    >
      <PickersDay {...other} />
    </Badge>
  );
}

export default function Calendar(props) {
  const userData = useSelector((state) => state.auth.data);
  const userId = userData ? userData._id : null;
  const { eventsData, onDateSelected } = props;
  const [highlightedDays, setHighlightedDays] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(initialValue.month());
  const [selectedYear, setSelectedYear] = useState(initialValue.year());

  useEffect(() => {
    const allHighlightedDays = [];

    eventsData.forEach((event) => {
      event.sessionSlot.forEach((slot) => {
        if (slot.student && slot.student._id === userId) {
          const startTime = dayjs(slot.startTime);
          const eventMonth = startTime.month();
          const eventYear = startTime.year();

          if (eventMonth === selectedMonth && eventYear === selectedYear) {
            allHighlightedDays.push(startTime.date());
          }
        }
      });
    });

    setHighlightedDays(allHighlightedDays);
  }, [eventsData, userId, selectedMonth, selectedYear]);

  const handleMonthChange = (newDate) => {
    setSelectedMonth(newDate.month());
    setSelectedYear(newDate.year());
  };

  const shouldResetHighlightedDays =
    selectedMonth !== initialValue.month() ||
    selectedYear !== initialValue.year();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        defaultValue={initialValue}
        onChange={onDateSelected}
        onMonthChange={handleMonthChange}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: (dayProps) => (
            <ServerDay
              {...dayProps}
              isSelected={
                !dayProps.outsideCurrentMonth &&
                highlightedDays.indexOf(dayProps.day.date()) >= 0 &&
                !shouldResetHighlightedDays
              }
            />
          ),
        }}
      />
    </LocalizationProvider>
  );
}

ServerDay.propTypes = {
  day: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

Calendar.propTypes = {
  eventsData: PropTypes.arrayOf(
    PropTypes.shape({
      sessionSlot: PropTypes.arrayOf(
        PropTypes.shape({
          startTime: PropTypes.string.isRequired,
          student: PropTypes.shape({
            _id: PropTypes.string.isRequired,
          }),
        })
      ).isRequired,
    })
  ).isRequired,
  onDateSelected: PropTypes.func.isRequired,
};
