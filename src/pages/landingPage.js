import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import PrimaryNavbar from '../components/navbars/PrimaryNavbar';
import jobImg from '../assets/media/images/jobsearch.png'
import navLinks from '../components/navbars/navLinksLandingPage';
import EmployersCard from '../components/cards/EmployersCard';
import JobCategories from '../components/cards/JobCategories';




const LandingPage = () => {
  return (
    <>
      <PrimaryNavbar links={navLinks}/>

        <Grid container sx={{ p: 8, mt: 10 }}>
          <Grid item>
            <Paper sx={{p: 3}} elevation={0}>
              <Grid container sx={{display: 'flex', aligItems: 'center'}}>
                <Grid item xs={12} lg={6}>
                  <Box >
                    <Typography variant='h2' fontWeight={500} color='primary' >
                    The Ultimate Tool to Find the Best People.
                    </Typography>
                    <Typography variant='h5' >
                    You're one good hire away from getting it all done.
                    </Typography>
                  </Box>
                  <Button variant='contained' color='secondary' sx={{my: 3}}>
                    Get Started
                  </Button>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Box>
                    <img src={jobImg} className="heroImg" alt='Job Search'/>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item>
          <Box sx={{mt: 10, mb: 2}}>
            <Typography variant='h3' color='primary'>
                Top Employers
            </Typography>
          </Box>
          
            <Paper sx={{p: 3}} elevation={2} >
              <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'> 
                <EmployersCard />                
              </Box>
              <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center' marginTop={5}> 
                <Button variant="contained" size='large' >Show all</Button>          
              </Box>
            </Paper>
          </Grid>
          
              <JobCategories />
         
          
        </Grid>
  
    </>
  )
}

export default LandingPage;
