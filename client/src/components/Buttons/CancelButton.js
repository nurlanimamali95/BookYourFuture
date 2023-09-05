import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const CancelButton = styled(Button)({
  backgroundColor: "red",
  color: "white",
  border: "1px solid red", // Add border style
  "&:hover": {
    backgroundColor: "white",
    color: "red",
    border: "1px solid red", // Border style on hover
  },
});
