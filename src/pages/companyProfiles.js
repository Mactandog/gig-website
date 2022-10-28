import {
  Box,
  Button,
  Card,
  createTheme,
  InputAdornment,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import React from "react";
import bgImg from "../assets/media/images/img3.jpg";
import { Container } from "@mui/system";
import FeaturedEmployerCard from "../components/cards/FeaturedEmployerCard";
import EmployersCard from "../components/cards/EmployersCard";
import FooterMain from "../components/footers/FooterMain";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#fff",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

const CompanyProfiles = () => {
  return (
    <>
      <Box>
        <Box mt={6}>
          <Box
            sx={{
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "cover",
              height: "40vh",
              backgroundPosition: "top",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mb: 30,
            }}
          >
            <Card sx={{ p: 5, position: "absolute", top: "70%" }}>
              <Typography variant="h4" color="primary" mb={2}>
                A completely new kind of office experience
              </Typography>
              <Typography variant="body1" color="primary" mb={2}>
                Search for a company
              </Typography>
              <TextField
                id="outlined-search"
                label="Search field"
                type="search"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchRoundedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Card>
          </Box>
          <Container>
            <Box mb={10}>
              <Typography variant="h3" color="textPrimary" mb={4}>
                Featured Companies
              </Typography>
              <FeaturedEmployerCard />
            </Box>
            <Box mb={10}>
              <Typography variant="h4" color="textPrimary" mb={4}>
                Popular Companies
              </Typography>
              <Paper sx={{ p: 3 }} elevation={2}>
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
            </Box>
            <Card
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: 200,
                p: 8,
                marginBottom: 8,
              }}
              className="infoCard"
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h4" color="white" mb={4}>
                  Put your skills and passions to work.
                </Typography>
                <ThemeProvider theme={theme}>
                  <Button variant="outlined" color="primary" size="large">
                    Start Your Journey today
                  </Button>
                </ThemeProvider>
              </Box>
            </Card>
          </Container>
        </Box>
      </Box>
      <footer>
        <Box sx={{ p: 2 }}>
          <FooterMain />
        </Box>
      </footer>
    </>
  );
};

export default CompanyProfiles;
