import React from "react";
import useFetch from "../../hooks/useFetch";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types";

// Add prop validation
DeleteButton.propTypes = {
  id: PropTypes.string.isRequired, // id should be a string and is required
  reFetch: PropTypes.func.isRequired, // reFetch should be a function and is required
  page: PropTypes.string.isRequired,
};

function DeleteButton({ id, page, reFetch }) {
  const { performFetch } = useFetch(`/${page}/${id}`, () => {
    toast.error("Deleted successfully");
    reFetch();
  });
  const handleDeleteClick = () => {
    performFetch(null, "DELETE");
  };
  return (
    <IconButton onClick={() => handleDeleteClick()}>
      <DeleteIcon sx={{ color: "grey" }} />
    </IconButton>
  );
}

export default DeleteButton;
