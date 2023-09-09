import React from "react";
import { Button } from "@mui/material";
import useFetch from "../../../../hooks/useFetch";
import PropTypes from "prop-types";

export default function SaveButton({
  eventData,
  onSaved,
  onError,
  endpoint,
  successMessage = "Saved successfully!",
  errorMessage = "An error occurred while saving.",
}) {
  const { isLoading, error, performFetch } = useFetch(endpoint, () => {
    if (error) {
      onError(errorMessage);
    } else {
      onSaved(successMessage);
    }
  });

  const handleSave = () => {
    performFetch(eventData, "PATCH");
  };

  return (
    <Button variant="contained" onClick={handleSave} disabled={isLoading}>
      Save Changes
    </Button>
  );
}

SaveButton.propTypes = {
  eventData: PropTypes.object.isRequired,
  onSaved: PropTypes.func.isRequired,
  onError: PropTypes.func,
  endpoint: PropTypes.string.isRequired,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
};
