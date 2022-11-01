import { Box, ThemeProvider } from "@mui/material";
import { customTheme } from "../styles/customTheme";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrimaryNavbar from "../components/navbars/PrimaryNavbar";
import navLinks from "../components/navbars/navLinksLandingPage";
import LandingPageHome from "./landingPageHome";
import SearchJob from "./searchJob";
import WhyGig from "./whyGig";
import ForEmployer from "./forEmployer";
import CompanyProfiles from "./companyProfiles";
import Company from "./company";
import TalentLogin from "./talentLogin";
import EmployerLogin from "./employer/employerLogin";
import EmployerSignUp from "./employer/signupEmployer";
import TalentSignUp from "./signupTalent";
import TalentDashboard from "./talent/talentDashboard";
import SecondaryNavbar from "../components/navbars/SecondaryNavbar";
import CompanyDashboard from "./employer/CompanyDashboard";
const Index = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <Box
          sx={{
            backgroundColor: "#f3f2ef",
            overflowX: "hidden",
          }}
        >
          <Box sx={{ mt: 8 }}>
            <Routes>
              <Route element={<PrimaryNavbar links={navLinks} />}>
                <Route exact path="/" element={<LandingPageHome />} />
                <Route path="/companies" element={<CompanyProfiles />} />
                <Route path="/search-jobs" element={<SearchJob />} />
                <Route path="/about-us" element={<WhyGig />} />
                <Route path="/for-employer" element={<ForEmployer />} />
                <Route path="/companies/company" element={<Company />} />
              </Route>
              <Route element={<SecondaryNavbar links={navLinks} />}>
                <Route path="/talent/login" element={<TalentLogin />} />
                <Route path="/talent/signup" element={<TalentSignUp />} />
                <Route path="/business/login" element={<EmployerLogin />} />
                <Route path="/business/signup" element={<EmployerSignUp />} />
              </Route>
              <Route path="/talent/profile/*" element={<TalentDashboard />} />
              <Route path="/employer/profile/*" element={<CompanyDashboard />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default Index;
