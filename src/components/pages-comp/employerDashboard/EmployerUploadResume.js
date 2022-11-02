import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AttachmentRoundedIcon from "@mui/icons-material/AttachmentRounded";
import FileUpload from "../../forms/FIleUpload";

const EmployerUploadResume = () => {
  return (
    <>
      <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
        <Typography variant="h4" fontWeight={500} color="textPrimary">
          <AttachmentRoundedIcon /> Upload Resume
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
          >
            <Grid item xs={12} md={3} textAlign="center">
              <FileUpload />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default EmployerUploadResume;
