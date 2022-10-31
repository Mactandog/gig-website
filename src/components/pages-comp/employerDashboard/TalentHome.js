import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Search1 from "../../searchBars/Search1";
import JobsListCard from "./JobsListCard";
import DynamicFeedRoundedIcon from "@mui/icons-material/DynamicFeedRounded";

const TalentHome = () => {
  return (
    <>
      <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
        <Typography variant="h4" fontWeight={500} color="textPrimary">
          <DynamicFeedRoundedIcon /> My Feed
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
        <JobsListCard />
      </Grid>
    </>
  );
};

export default TalentHome;
