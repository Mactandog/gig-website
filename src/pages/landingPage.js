import { Box } from '@mui/material';
import React from 'react'
import PrimaryNavbar from '../components/navbars/PrimaryNavbar';
import navLinks from '../components/navbars/navLinksLandingPage';
import FooterMain from '../components/footers/FooterMain';
import LandingPageHome from '../components/pages-comp/LandingPageHome';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const LandingPage = () => {
  return (
    <>
      <header>
        <PrimaryNavbar links={navLinks}/>
      </header>
      
      <main>
     
        <Route path='/gig' element={<LandingPageHome/>}/>
        {/* <LandingPageHome/> */}
        
      </main>

      <footer>
        {/* <Box sx={{ p: 2 }}>
          <FooterMain/>
        </Box> */}
      </footer>
    </>
  )
}

export default LandingPage;
