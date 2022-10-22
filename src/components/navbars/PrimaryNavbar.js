import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Grid, Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';
import logoWhite from '../../assets/media/logo/gig-white-icon.svg';
import { useState } from 'react';
import DrawerComp from '../drawers/Drawer';
import navLinks from './navLinksLandingPage';



function PrimaryNavbar({links}) {

  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch)

  return (
    <Box>
      <AppBar component="nav" className="topNav">
        {isMatch ? <DrawerComp links={links}/> :
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Grid container sx={{ alignItems: 'center' }}>
              {/* Logo */}
              <Grid item xs={2} >
                <Button disableRipple sx={{ width: 5, display: 'flex', alignItems: 'center' }}>
                  <img src={logoWhite} className="logo" alt='Gig Logo' />
                </Button>
              </Grid>

              {/* Nav links */}
              <Grid item xs={7} >
                <Tabs indicatorColor='secondary' textColor='inherit' value={value} onChange={(e, value) => setValue(value)} >
                  {navLinks.map((link, index) => (
                     <Tab key={index} label={link}/>
                  ))}
                </Tabs>
              </Grid>

              {/* Buttons */}
              <Grid item xs={3}>
                <Box display='flex'>
                  <Button color='secondary' variant='outlined' sx={{ ml:'auto' }}>Login</Button>
                  <Button color='secondary' variant='contained' sx={{ ml:1 }}>Sign Up</Button>
                </Box>
              </Grid>
            </Grid>
        </Toolbar>}
      </AppBar>
    </Box>
  );
}

export default PrimaryNavbar;
