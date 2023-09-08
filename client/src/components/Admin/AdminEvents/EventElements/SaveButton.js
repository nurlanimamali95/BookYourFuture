import React from "react";
import { Button } from "@mui/material";
import useFetch from "../../../../hooks/useFetch";
import PropTypes from "prop-types";

export default function SaveButton({ id, eventData, onSaved }) {
  // Use the custom hook to get necessary functions and states
  const { isLoading, performFetch } = useFetch(`/event/edit/${id}`, onSaved);

  // Define the save handler
  const handleSave = () => {
    performFetch(eventData, "PUT");
  };

  // Render the button
  return (
    <Button variant="contained" onClick={handleSave} disabled={isLoading}>
      Save Changes
    </Button>
  );
}

SaveButton.propTypes = {
  id: PropTypes.string.isRequired,
  eventData: PropTypes.object.isRequired,
  onSaved: PropTypes.func.isRequired,
};
