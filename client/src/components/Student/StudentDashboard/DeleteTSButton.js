import React, { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";

export default function DeleteTSButton({
  sessionSlotId,
  onDeleteSuccess,
  onTimeslotDelete,
}) {
  const [openDialog, setOpenDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { error, performFetch } = useFetch(
    `/event/bookTime/DeleteStudent/${sessionSlotId[0]}`,
    () => {
      if (onDeleteSuccess) {
        onDeleteSuccess();
      }
      setOpenDialog(false);
      if (onTimeslotDelete) {
        onTimeslotDelete();
      }
    }
  );

  const userData = useSelector((state) => state.auth.data);
  const userId = userData ? userData._id : null;

  useEffect(() => {
    if (error) {
      setErrorMessage("There was an error confirming. Please try again.");
    }
  }, [error]);

  const handleOnSubmit = () => {
    const requestBody = {
      studentId: userId,
    };

    performFetch(requestBody, "Delete", requestBody);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
    setErrorMessage("");
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Tooltip title="Delete">
        <IconButton variant="contained" onClick={handleOpenDialog}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogContent>
          <DialogContentText>
            {errorMessage
              ? errorMessage
              : "Are you sure you want to delete this Time slot?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          {errorMessage ? null : (
            <Button onClick={handleOnSubmit} color="primary">
              Delete
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}

DeleteTSButton.propTypes = {
  sessionSlotId: PropTypes.string.isRequired,
  onDeleteSuccess: PropTypes.func,
  onTimeslotDelete: PropTypes.func,
};
