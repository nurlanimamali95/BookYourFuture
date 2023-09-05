import styled from "@emotion/styled";
import { Button as MUIButton } from "@mui/material";

export const Button = styled(MUIButton)({
  backgroundColor: "#56ae5a",
  color: "white",
  "&:hover": {
    backgroundColor: "white",
    color: "#56ae5a",
    border: "1px solid #56ae5a",
  },
});
