import {
  Grid,
  Box,
  Typography,
  Container,
  Card,
  Paper,
  Pagination,
} from "@mui/material";
import React from "react";
import FooterMain from "../components/footers/FooterMain";
import JobsListCard from "../components/cards/JobsListCard";

const SearchJob = () => {
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} py={2}>
            <Card sx={{ py: 10, textAlign: "center" }}>
              <Typography variant="h4">Search field here</Typography>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Paper variant="outlined">
              <Box p={2}>
                <Typography variant="h5">Recent Jobs</Typography>
                <Typography>
                  Category Product Design, React Developer
                </Typography>
              </Box>
              <Grid
                container
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Grid item xs={12}>
                  <JobsListCard />
                </Grid>
              </Grid>
              <Box
                xs={12}
                p={2}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Pagination count={10} shape="rounded" sx={{ marginTop: 4 }} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <footer>
        <Box sx={{ p: 2 }}>
          <FooterMain />
        </Box>
      </footer>
    </>
  );
};

export default SearchJob;

