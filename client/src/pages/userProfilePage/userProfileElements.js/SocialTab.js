import React from "react";
import { useSelector } from "react-redux";
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

export default function SocialTab() {
  const userData = useSelector((state) => state.auth.data);

  return (
    <>
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
    </>
  );
}
