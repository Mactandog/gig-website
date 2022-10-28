import React from "react";
import { Box, Button, Grid, Paper, styled, Typography } from "@mui/material";
import jobImg from "../assets/media/images/jobsearch.png";
import EmployersCard from "../components/cards/EmployersCard";
import JobCategories from "../components/cards/JobCategories";
import { Link } from "react-router-dom";
import FooterMain from "../components/footers/FooterMain";

const LandingPageHome = () => {
  const StyledLink = styled(Link)`
    padding-left: 0.5rem;
    color: #6eb0a0;
    text-decoration: none;
    &:hover,
    &:focus {
      color: primary;
    }
  `;
  return (
    <>
      <Grid container sx={{ p: 8, mt: 8 }}>
        <Grid item>
          <Paper elevation={0} variant="outlined">
            <Grid
              container
              sx={{ display: "flex", aligItems: "space-between" }}
            >
              <Grid item xs={12} lg={6}>
                <Box p={4}>
                  <Typography variant="h2" fontWeight={500} color="primary">
                    The Ultimate Tool to Find the Best People.
                  </Typography>
                  <Typography variant="h5">
                    You're one good hire away from getting it all done.
                  </Typography>
                  <Button variant="contained" color="secondary" sx={{ my: 3 }}>
                    Get Started
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box p={4}>
                  <img src={jobImg} className="heroImg" alt="Job Search" />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Box sx={{ mt: 8 }}>
            <Typography variant="h3" color="primary">
              Browse by Category
            </Typography>
            <Typography
              fontSize="md"
              aria-describedby="card-description"
              mt={2}
            >
              Looking for work?
              <StyledLink to="/jobs" underline="none">
                Browse jobs
              </StyledLink>
            </Typography>
          </Box>
        </Grid>
        <Grid container sx={{ width: "100%", justifyContent: "center", p: 3 }}>
          <JobCategories />
        </Grid>
        <Grid item>
          <Box sx={{ mt: 10, mb: 2 }}>
            <Typography variant="h3" color="primary">
              Top Employers
            </Typography>
          </Box>
          <Paper sx={{ p: 3, mb: 8 }} variant="outlined">
            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="center"
            >
              <EmployersCard />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="center"
              marginTop={5}
            >
              <Button variant="contained" size="large">
                Show all
              </Button>
            </Box>
          </Paper>
          <Typography variant="h3" color="primary">
            Testimonial
          </Typography>
        </Grid>
      </Grid>
      <footer>
        <Box sx={{ p: 2 }}>
          <FooterMain />
        </Box>
      </footer>
    </>
  );
};

export default LandingPageHome;
