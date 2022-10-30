import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";

const TalentMyJobs = () => {
  return (
    <>
      <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
        <Typography variant="h4" fontWeight={500} color="textPrimary">
          <WorkRoundedIcon /> My Jobs
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ flexGrow: 1, mt: 4 }}
        >
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          ></Grid>
        </Box>
      </Paper>
    </>
  );
};

export default TalentMyJobs;
