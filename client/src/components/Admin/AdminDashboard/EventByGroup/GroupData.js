import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Hidden } from "@mui/material";

export default function GroupData({ data }) {
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
      <box>
        <Typography variant="subtitle2">{data.date}</Typography>
        <Typography variant="subtitle2">{data.time}</Typography>
      </box>
      <box>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          {data.name}
        </Typography>
        <Typography variant="subtitle2">{data.title}</Typography>
      </box>
      <Hidden smDown>
        <box>
          <Typography variant="subtitle1" align="right">
            {data.status}
          </Typography>
        </box>
      </Hidden>
    </Box>
  );
}

GroupData.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
