import { Grid, Paper, Select, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Search1 from "../../searchBars/Search1";

const TalentHome = () => {
  //Age Picker
  const [proficiency, setProficiency] = React.useState("");
  const handleChange = (event) => {
    setProficiency(event.target.value);
  };

  return (
    <>
      <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
        <Typography variant="h4" fontWeight={500} color="textPrimary">
          <HomeRoundedIcon /> My Home
        </Typography>
        {/* container */}
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ flexGrow: 1, mt: 4 }}
        >
          <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
              <Search1 />
            </Grid>
          </Grid>
        </Box>

        {/* end of container */}
      </Paper>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4}>
          <Paper sx={{ height: "100vh", backgroundColor: "primary" }}>
            span 4
          </Paper>
        </Grid>
        <Grid item xs="none" md={8}>
          <Paper sx={{ height: "100vh", backgroundColor: "primary" }}>
            span 8
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default TalentHome;
