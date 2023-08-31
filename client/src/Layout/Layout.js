import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

function Layout() {
  return (
    <>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 2, p: 5 }}>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
