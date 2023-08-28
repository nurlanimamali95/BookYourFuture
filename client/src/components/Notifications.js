import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Notifications = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert onClose={() => {}}>Class call with Josephine</Alert>
      <Alert
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        Social interview with Adyen
      </Alert>
    </Stack>
  );
};

export default Notifications;
