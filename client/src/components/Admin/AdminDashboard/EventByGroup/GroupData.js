import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Hidden } from "@mui/material";
import dayjs from "dayjs";

export default function GroupData({ data }) {
  const sessionDate =
    data.sessionSlot &&
    data.sessionSlot.length > 0 &&
    data.sessionSlot[0].startTime
      ? dayjs(data.sessionSlot[0].startTime).format("D MMMM")
      : "N/A";

  const sessionTime =
    data.sessionSlot &&
    data.sessionSlot.length > 0 &&
    data.sessionSlot[0].startTime
      ? dayjs(data.sessionSlot[0].startTime).format("HH:mm:ss")
      : "N/A";

  return (
    <Box
      elevation={1}
      key={data.name}
      sx={{
        paddingY: "1.25rem",
        paddingX: ".75rem",
        borderBottom: "1px solid #e0e0e0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "left",
        ":hover": { backgroundColor: "#fafafa" },
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle2">{sessionDate}</Typography>
        <Typography variant="subtitle2">{sessionTime}</Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        {/* <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          {data.student[0]?.firstName || "All"}
        </Typography> */}
        <Typography variant="subtitle2">{data.title}</Typography>
      </Box>
      <Hidden smDown>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" align="right">
            {data.location}
          </Typography>
        </Box>
      </Hidden>
    </Box>
  );
}

GroupData.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,

    location: PropTypes.string.isRequired,
    student: PropTypes.array.isRequired,
    group: PropTypes.array.isRequired,
    sessionSlot: PropTypes.arrayOf(
      PropTypes.shape({
        startTime: PropTypes.string,
      })
    ),
  }).isRequired,
};
