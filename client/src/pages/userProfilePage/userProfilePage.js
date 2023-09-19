import React, { useEffect, useState } from "react";
import {
  Container,
  Button,
  Stack,
  Typography,
  Box,
  Tabs,
  Tab,
} from "@mui/material";

import PropTypes from "prop-types";
import ProfileTab from "./userProfileElements.js/ProfileTab";
import SocialTab from "./userProfileElements.js/SocialTab";
import SecurityTab from "./userProfileElements.js/SecurityTab";
import { useDispatch, useSelector } from "react-redux";
import { editUserInfo, getOneUser } from "../../components/redux/userSlice";
import { useParams } from "react-router-dom";
// import axios from "../../util/axios";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function UserProfilePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const reduxPayload = useSelector((state) => state.user.data);

  //Extract success and userData properties from the payload
  const { success, userData } = reduxPayload || {};

  const [currentData, setCurrentData] = useState({
    firstName: userData?.firstName || "",
    lastName: userData?.lastName || "",
    phone: userData?.phone || "",
    city: userData?.city || "",
    street: userData?.street || "",
    houseNumber: userData?.houseNumber || "",
    zipCode: userData?.zipCode || "",
    gitHub: userData?.gitHub || "",
    linkedIn: userData?.linkedIn || "",
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSaveInfo = (id) => {
    dispatch(editUserInfo(id));
  };

  // React.useEffect(() => {
  //   axios
  //     .get(`/api/user/${id}/`)
  //     .then(({ data }) => {
  //       if (data) {
  //         // Ensure that data is not undefined
  //         setCurrentData({
  //           firstName: data.userData.firstName || "",
  //           lastName: data.userData.lastName || "",
  //           phone: data.userData.phone || "",
  //           city: data.userData.city || "",
  //           street: data.userData.street || "",
  //           houseNumber: data.userData.houseNumber || "",
  //           zipCode: data.userData.zipCode || "",
  //           gitHub: data.userData.gitHub || "",
  //           linkedIn: data.userData.linkedIn || "",
  //         });
  //       } else {
  //         console.error("API response data is undefined or null.");
  //       }
  //     })
  //     .catch((err) => {
  //       // Handle API request error
  //       console.error(err);
  //     });
  // }, [id]);
  useEffect(() => {
    dispatch(getOneUser(id)).catch((err) => {
      //eslint-disable-next-line no-console
      console.error(err);
    });
  }, [dispatch, id]);

  useEffect(() => {
    if (success && userData) {
      setCurrentData(userData);
    }
  }, [success, userData]);
  //eslint-disable-next-line no-console
  console.log(currentData);

  return (
    <Container>
      <Typography variant="h4" style={{ margin: "20px" }}>
        User Profile
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Profile" {...a11yProps(0)} />
            <Tab label="Social" {...a11yProps(1)} />
            <Tab label="Security" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <ProfileTab />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <SocialTab />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <SecurityTab />
        </CustomTabPanel>
      </Box>
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        mt={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Button variant="contained" onClick={handleSaveInfo} color="primary">
          Save
        </Button>
        <Button variant="outlined">Cancel</Button>
      </Stack>
    </Container>
  );
}
