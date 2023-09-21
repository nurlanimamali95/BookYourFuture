import React from "react";
import {
  Grid,
  Stack,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import PropTypes from "prop-types";

export default function SocialTab({ currentData, setCurrentData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentData({ ...currentData, [name]: value });
  };
  return (
    <>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <Stack gap={2}>
            <Stack direction="row" spacing={2}>
              <TextField
                name="gitHub"
                value={currentData?.gitHub || ""}
                label="GitHub"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <GitHubIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                name="linkedIn"
                value={currentData?.linkedIn || ""}
                label="LinkedIn"
                variant="outlined"
                onChange={handleChange}
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
                name="facebook"
                value={currentData?.facebook || ""}
                label="Facebook"
                variant="outlined"
                onChange={handleChange}
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
                name="telegram"
                value={currentData?.telegram || ""}
                label="Telegram"
                variant="outlined"
                onChange={handleChange}
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
            connections are very important bla bla bla
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

SocialTab.propTypes = {
  currentData: PropTypes.shape({
    gitHub: PropTypes.string,
    linkedIn: PropTypes.string,
    facebook: PropTypes.string,
    telegram: PropTypes.string,
  }).isRequired,
  setCurrentData: PropTypes.func.isRequired,
};
