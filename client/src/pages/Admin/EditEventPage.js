import React from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import EditEvent from "../../components/Admin/AdminEvents/EditEvent/EditEvent";

export default function EditEventPage() {
  const { id } = useParams();
  return (
    <>
      <EditEvent />
      <Typography>Edit event with Id: {id}</Typography>
    </>
  );
}
