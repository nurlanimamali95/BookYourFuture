import React from "react";
import { TextField, Stack } from "@mui/material";
import EventContext from "./EventContext";
import { useContext } from "react";
import {
  DurationDropdown,
  LocationToggle,
  ReceiverToggle,
} from "./AddEventElements";
import GroupDropdown from "../EventElements/GroupDropdown";
import StudentDropdown from "../EventElements/StudentDropdown";

export default function MainEventInfo() {
  const { eventData, setEventData } = useContext(EventContext);

  function handleDropdownChange(name) {
    return (event) => {
      setEventData((prev) => ({
        ...prev,
        [name]: event.target.value,
      }));
    };
  }

  return (
    <>
      <Stack spacing={2}>
        <TextField
          id="standard-basic"
          label="Title"
          variant="standard"
          fullWidth
          value={eventData.title}
          onChange={handleDropdownChange("title")}
        />

        <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={3}
          variant="standard"
          fullWidth
          value={eventData.description}
          onChange={handleDropdownChange("description")}
        />
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "flex-start", md: "space-between" }}
        gap={2}
        sx={{
          mt: { xs: 4, sm: 4 },
          mb: { xs: 2, sm: 2 },
        }}
      >
        <DurationDropdown
          value={eventData.duration}
          onChange={handleDropdownChange("duration")}
        />
        <LocationToggle
          value={eventData.location}
          onChange={handleDropdownChange("location")}
        />
      </Stack>
      <ReceiverToggle
        value={eventData.receiverType}
        onChange={handleDropdownChange("receiverType")}
      />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "flex-start", md: "space-between" }}
        sx={{
          mt: { xs: 2, sm: 4 },
        }}
        gap={2}
      >
        <GroupDropdown
          value={eventData.group}
          onChange={handleDropdownChange("group")}
        />
        {/* <StudentDropdown
          value={eventData.student}
          onChange={handleDropdownChange("student")}
          isGroup={eventData.receiverType === "Group"}
          disabled={eventData.receiverType !== "Student"}
        /> */}
        <StudentDropdown
          groupId={eventData.group}
          value={eventData.student}
          onChange={handleDropdownChange("student")}
          isGroup={eventData.receiverType === "Group"}
          disabled={eventData.receiverType !== "Student"}
        />
      </Stack>
    </>
  );
}
