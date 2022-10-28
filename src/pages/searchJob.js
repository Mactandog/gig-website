import { Box } from "@mui/material";
import React from "react";
import FooterMain from "../components/footers/FooterMain";

const SearchJob = () => {
  return (
    <>
      <div>
        <h1>Search jobs</h1>
      </div>
      <footer>
        <Box sx={{ p: 2 }}>
          <FooterMain />
        </Box>
      </footer>
    </>
  );
};

export default SearchJob;
