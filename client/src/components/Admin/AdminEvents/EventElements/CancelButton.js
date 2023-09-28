import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { clearUserDetails } from "../../../redux/studentsSlice";

export default function CancelButton({ endpoint }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCancel = () => {
    navigate(endpoint);
    dispatch(clearUserDetails());
  };

  return (
    <Button variant="outlined" color="primary" onClick={handleCancel}>
      Cancel
    </Button>
  );
}

CancelButton.propTypes = {
  endpoint: PropTypes.string.isRequired,
};
