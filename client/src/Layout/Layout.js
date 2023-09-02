import React from "react";
import Topbar from "../components/Topbar/Topbar";
import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

function Layout() {
  const location = useLocation();
  return location.pathname === "/login" ? (
    <Box component="main">
      <Outlet />
    </Box>
  ) : (
    <>
      <Topbar />{" "}
      <Box component="main" sx={{ flexGrow: 2 }}>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
