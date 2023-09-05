import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from "@mui/material/Box";
import EventContext from "./EventContext";
import { useContext } from "react";
import "dayjs/locale/de";

export default function BasicDateTimePicker() {
  const [datePickers, setDatePickers] = React.useState([{ date: null }]);
  const { setEventData } = useContext(EventContext);

  const handleDateChange = (date, index) => {
    const updatedDatePickers = [...datePickers];
    updatedDatePickers[index].date = date;
    setDatePickers(updatedDatePickers);

    const dates = updatedDatePickers.map((picker) => picker.date);
    setEventData((prev) => ({ ...prev, dates }));
  };

  const handleRemove = (indexToRemove) => {
    setDatePickers((prevDatePickers) =>
      prevDatePickers.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleAdd = () => {
    const lastDate = datePickers[datePickers.length - 1].date;
    setDatePickers((prevDatePickers) => [
      ...prevDatePickers,
      { date: lastDate },
    ]);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
      <DemoContainer components={["DateTimePicker"]} sx={{ mt: 3 }}>
        {datePickers.map((picker, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <DateTimePicker
              label="Pick date and time"
              value={picker.date}
              onChange={(date) => handleDateChange(date, index)}
              ampm={false}
              sx={{ width: "100%", mr: 2 }}
            />
            <IconButton
              color="secondary"
              onClick={() => handleRemove(index)}
              disabled={!picker.date}
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
