import React from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Stack,
  Avatar,
  Typography,
  Box,
  Tabs,
  Tab,
  InputAdornment,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
// import { selectorIsAuth } from "../../components/redux/authSlice";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";

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
  const userData = useSelector((state) => state.auth.data);
  // const isAuth = useSelector(selectorIsAuth);
  const navigate = useNavigate();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // if (!isAuth) {
  //   return navigate("/login");
  // }

  const handleChangePassword = () => {
    navigate("/change-password");
  };

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
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Stack spacing={3} alignItems="center" justifyContent="center">
                <Avatar sx={{ width: 120, height: 120 }} />
                <Button
                  variant="contained"
                  component="label"
                  endIcon={<PhotoCamera />}
                >
                  Upload Avatar
                  <input type="file" hidden />
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Stack gap={2}>
                <TextField
                  label="First Name"
                  value={userData?.firstName || ""}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  label="Last Name"
                  value={userData?.lastName || ""}
                  variant="outlined"
                  fullWidth
                />
                <Stack direction="row" spacing={2}>
                  <TextField
                    label="City"
                    value={userData?.city}
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    label="Zip Code"
                    value={userData?.zipCode || ""}
                    variant="outlined"
                    fullWidth
                  />
                </Stack>
                <Stack direction="row" spacing={2}>
                  <TextField
                    label="Phone number"
                    value={userData?.phone}
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    value={userData?.email || ""}
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                  />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Stack gap={2}>
                <Stack direction="row" spacing={2}>
                  <TextField
                    value={userData?.gitHub || ""}
                    label="GitHub"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <GitHubIcon />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    value={userData?.linkedin || ""}
                    label="LinkedIn"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LinkedInIcon />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                </Stack>
                <Stack direction="row" spacing={2}>
                  <TextField
                    value={""}
                    label="Facebook"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FacebookIcon />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    value={""}
                    label="Telegram"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <TelegramIcon />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={1}></Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Start Building Your Network
              </Typography>
              <Typography variant="body1">
                Add your social links and start connecting with people. Social
                conections are very important bla bla bla{" "}
              </Typography>
            </Grid>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={8}>
              <Button variant="outlined" onClick={handleChangePassword}>
                Change Password
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Delete Account
              </Typography>
              <Typography variant="body1">
                WARNING! This action is irreversible. Once you delete your
                account, you will not be able to recover it.
              </Typography>
            </Grid>
          </Grid>
        </CustomTabPanel>
      </Box>

      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        mt={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Button variant="contained" color="primary">
          Save
        </Button>
        <Button variant="outlined">Cancel</Button>
      </Stack>
    </Container>
  );
}
