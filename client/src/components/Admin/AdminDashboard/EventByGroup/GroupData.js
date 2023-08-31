import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function GroupData({ data }) {
  return (
    <Box
      elevation={1}
      key={data.name}
      sx={{
        paddingY: ".75rem",
        paddingX: "1.5rem",
        borderBottom: "1px solid #e0e0e0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: ".75rem",
        textAlign: "left",
        ":hover": { backgroundColor: "#f5f5f5" },
      }}
    >
      <div>
        <Typography variant="subtitle2">{data.date}</Typography>
        <Typography variant="subtitle2">{data.time}</Typography>
      </div>
      <div>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          {data.name}
        </Typography>
        <Typography variant="subtitle2">{data.title}</Typography>
      </div>
      <div>
        <Typography variant="subtitle1" align="right">
          {data.status}
        </Typography>
      </div>
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
