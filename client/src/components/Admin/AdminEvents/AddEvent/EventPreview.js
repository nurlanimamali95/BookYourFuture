import React, { useContext } from "react";
import { Container, Divider, Stack, Typography, Box } from "@mui/material";
import EventContext from "./EventContext";
import dayjs from "dayjs";

export default function EventPreview() {
  const { eventData } = useContext(EventContext);

  return (
    <Container>
      <Typography
        variant="subtitle1"
        sx={{ pt: 4, mb: 2, textAlign: "center" }}
      >
        Event Preview
      </Typography>
      <Box sx={{ p: 3 }}>
        <Typography
          variant="h6"
          align="center"
          sx={{
            textTransform: "uppercase",
            py: 4,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {eventData.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {eventData.description}
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="body1">{eventData.duration}</Typography>
            <Typography variant="body1">{eventData.location}</Typography>
          </Stack>
          <Typography variant="body1">{eventData.group}</Typography>
          <Typography variant="body1">{eventData.student}</Typography>
        </Stack>

        <Divider sx={{ my: 4 }} />
        <Typography variant="body1">
          <ul>
            {eventData.dates &&
              eventData.dates.map((date, index) => {
                const startDate = dayjs(date);
                const endDate = startDate.add(
                  parseInt(eventData.duration, 10),
                  "minute"
                );

                return (
                  <li key={index}>
                    {startDate.format("DD MMM YYYY HH:mm")} -
                    {endDate.format(" HH:mm")}
                  </li>
                );
              })}
          </ul>
        </Typography>
      </Box>
    </Container>
  );
}
