import { Box, Grid, Link, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const FooterMain = () => {
  return (
    <>
      <Paper
        color="primary"
        sx={{ borderRadius: 2, backgroundColor: "primary.main", p: 6 }}
      >
        <Grid display="flex" justifyContent="space-around">
          <Box>
            <Typography color="secondary.light" variant="h5" mb={1}>
              Job seekers
            </Typography>
            <Stack spacing={2} alignItems="flex-start">
              <Link
                to="/job-search-/find-specialization/"
                component="button"
                underline="none"
                color="primary.contrastText"
                className="footerLinks"
              >
                Jobs by specialization
              </Link>
              <Link
                component="button"
                underline="none"
                color="primary.contrastText"
                className="footerLinks"
              >
                Jobs by company name
              </Link>
              <Link
                component="button"
                underline="none"
                color="primary.contrastText"
                className="footerLinks"
              >
                Career resources
              </Link>
              <Link
                component="button"
                underline="none"
                color="primary.contrastText"
                className="footerLinks"
              >
                Explore careers
              </Link>
            </Stack>
          </Box>
          <Box>
            <Typography color="secondary.light" variant="h5" mb={1}>
              Job seekers
            </Typography>
            <Stack spacing={2} alignItems="flex-start">
              <Link
                to="/job-search-/find-specialization/"
                component="button"
                underline="none"
                color="primary.contrastText"
                className="footerLinks"
              >
                Jobs by specialization
              </Link>
              <Link
                component="button"
                underline="none"
                color="primary.contrastText"
                className="footerLinks"
              >
                Jobs by company name
              </Link>
              <Link
                component="button"
                underline="none"
                color="primary.contrastText"
                className="footerLinks"
              >
                Career resources
              </Link>
              <Link
                component="button"
                underline="none"
                color="primary.contrastText"
                className="footerLinks"
              >
                Explore careers
              </Link>
            </Stack>
          </Box>
          <Box>
            <Typography color="secondary.light" variant="h5" mb={1}>
              Job seekers
            </Typography>
            <Stack spacing={2} alignItems="flex-start">
              <Link
                to="/job-search-/find-specialization/"
                component="button"
                underline="none"
                color="primary.contrastText"
                className="footerLinks"
              >
                Jobs by specialization
              </Link>
              <Link
                component="button"
                underline="none"
                color="primary.contrastText"
                className="footerLinks"
              >
                Jobs by company name
              </Link>
              <Link
                component="button"
                underline="none"
                color="primary.contrastText"
                className="footerLinks"
              >
                Career resources
              </Link>
              <Link
                component="button"
                underline="none"
                color="primary.contrastText"
                className="footerLinks"
              >
                Explore careers
              </Link>
            </Stack>
          </Box>
        </Grid>
      </Paper>
    </>
  );
};

export default FooterMain;
