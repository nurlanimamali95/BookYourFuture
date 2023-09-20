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

  const [currentData, setCurrentData] = useState();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeInfo = () => {
    // Dispatch the action with the updated currentData
    dispatch(editUserInfo({ id, params: currentData }));
  };

  useEffect(() => {
    dispatch(getOneUser(id)).catch((err) => {
      //eslint-disable-next-line no-console
      console.error(err);
    });
  }, [dispatch, id]);

  useEffect(() => {
    if (success && userData) {
      setCurrentData({
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        phone: userData.phone || "",
        city: userData.city || "",
        street: userData.street || "",
        houseNumber: userData.houseNumber || "",
        zipCode: userData.zipCode || "",
        gitHub: userData.gitHub || "",
        linkedIn: userData.linkedIn || "",
        facebook: userData.facebook || "",
        telegram: userData.telegram || "",
      });
    }
  }, [success, userData]);

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
          <ProfileTab
            currentData={currentData}
            setCurrentData={setCurrentData}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <SocialTab
            currentData={currentData}
            setCurrentData={setCurrentData}
          />
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
        <Button variant="contained" onClick={handleChangeInfo} color="primary">
          Save
        </Button>
        <Button variant="outlined">Cancel</Button>
      </Stack>
    </Container>
  );
}

UserProfilePage.propTypes = {
  currentData: PropTypes.object.isRequired,
  setCurrentData: PropTypes.func.isRequired,
};
