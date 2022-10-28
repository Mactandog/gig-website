import { Box } from "@mui/material";
import React from "react";
import FooterMain from "../components/footers/FooterMain";

const ForEmployer = () => {
  return (
    <>
      <div>
        <h1>For Employer</h1>
      </div>
      <footer>
        <Box sx={{ p: 2 }}>
          <FooterMain />
        </Box>
      </footer>
    </>
  );
};

export default ForEmployer;
