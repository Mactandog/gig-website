import { Box, ThemeProvider } from "@mui/material";
import { customTheme } from "../styles/customTheme";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrimaryNavbar from "../components/navbars/PrimaryNavbar";
import FooterMain from "../components/footers/FooterMain";
import navLinks from "../components/navbars/navLinksLandingPage";
import LandingPageHome from "./landingPageHome";
import SearchJob from "./searchJob";
import WhyGig from "./whyGig";
import ForEmployer from "./forEmployer";
import CompanyProfiles from "./companyProfiles";
import Company from "./company";

const Index = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <Box sx={{ backgroundColor: "#f3f2ef" }}>
          <header>
            <PrimaryNavbar links={navLinks} />
          </header>

          <Routes>
            <Route exact path="/" element={<LandingPageHome />} />
            <Route path="/companies" element={<CompanyProfiles />} />
            <Route path="/search-jobs" element={<SearchJob />} />
            <Route path="/about-us" element={<WhyGig />} />
            <Route path="/for-employer" element={<ForEmployer />} />
            <Route path="/companies/company" element={<Company />} />
          </Routes>

          <footer>
            <Box sx={{ p: 2 }}>
              <FooterMain />
            </Box>
          </footer>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default Index;
