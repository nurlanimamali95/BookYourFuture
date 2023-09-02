import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

function Layout() {
  const location = useLocation();
  return location.pathname === "/login" ? (
    <Box component="main" sx={{ flexGrow: 2, p: 5 }}>
      <Outlet />
    </Box>
  ) : (
    <>
      <Sidebar />{" "}
      <Box component="main" sx={{ flexGrow: 2, p: 5 }}>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
