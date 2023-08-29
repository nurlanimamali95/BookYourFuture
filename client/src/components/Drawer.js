import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../assets/logo.svg";

const drawerWidth = 220;

const items = [
  { text: "Dashboard", icon: <DashboardIcon />, link: "/" },
  { text: "Profile", icon: <AccountCircleIcon />, link: "/" },
  { text: "Log out", icon: <LogoutIcon />, link: "/user" },
];

const renderListItem = (item) => (
  <ListItem key={item.text} disablePadding className="hover-list-item">
    <ListItemButton component={Link} to={item.link}>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.text} />
    </ListItemButton>
  </ListItem>
);

export default function DashboardDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Box>
            <img src={logo} alt="Logo" style={{ width: "10em" }} />
          </Box>
        </Toolbar>
        <List>{items.map(renderListItem)}</List>
      </Drawer>
    </Box>
  );
}
