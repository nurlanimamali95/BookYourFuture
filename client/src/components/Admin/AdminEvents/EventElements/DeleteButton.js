import React from "react";
import { Button } from "@mui/material";
import useFetch from "../../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function DeleteButton({ endpoint, onDeleted, redirectPath }) {
  const navigate = useNavigate();
  const { isLoading, performFetch } = useFetch(endpoint, () => {
    onDeleted("Deleted successfully! Redirecting...");
    setTimeout(() => {
      navigate(redirectPath);
    }, 500);
  });

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
  endpoint: PropTypes.string.isRequired,
  redirectPath: PropTypes.string,
  onDeleted: PropTypes.func.isRequired,
};
