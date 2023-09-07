import React from "react";
import { Button } from "@mui/material";
import useFetch from "../../../../hooks/useFetch";
import PropTypes from "prop-types";

export default function DeleteButton({ id, onDeleted }) {
  // Use the custom hook to get necessary functions and states
  const { isLoading, performFetch } = useFetch(`/event/${id}`, onDeleted);

  // Define the delete handler
  const handleDelete = () => {
    performFetch(null, "DELETE");
  };

  return (
    <Button variant="outlined" onClick={handleDelete} disabled={isLoading}>
      Delete Event
    </Button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDeleted: PropTypes.func.isRequired,
};
