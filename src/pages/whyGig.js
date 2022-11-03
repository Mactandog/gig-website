import React from 'react'
import { Card, Grid } from '@mui/material'
// import '../assets/whygig.css';
import "../styles/css/whygig.css";
import Button from '@mui/material/Button';
import CardPort from '../components/cards/CardPort'
import work1 from "../assets/media/images/work1.png";
import work2 from "../assets/media/images/work2.png";
import work3 from "../assets/media/images/work3.png";
// "../assets/media/images/jobsearch.png";
import CardMedia from '@mui/material/CardMedia';
import avatar1 from "../assets/media/images/avatar1.png";
import avatar2 from "../assets/media/images/avatar2.PNG";
import avatar3 from "../assets/media/images/avatar3.PNG";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import FooterMain from "../components/footers/FooterMain";


import { width } from '@mui/system';
const WhyGig = () => {
  return (
    <div>
        <Grid container className='display-banner'>
                    <Grid item xs={12}>
                        <div className='div-item-1'>
                           <h1 className="typo-h1">WHY GIG?</h1>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className='fluid'>
                            <p class='parag1'>
                            It’s easy for companies to find a freelancer online. Gig, the emerging work marketplace, makes finding the right freelance candidate simple. On Gig, companies can search for the skill set or position they need and browse a list of freelancer profiles with matching experiences. 
                            Companies can also post a freelance project and receive personalized project proposals from qualified freelancers. Gig's platform makes finding, interviewing, and hiring freelancers easy. 
                            If you’re ready to hire a freelancer to help your company, sign up for an account on Gig today.
                            </p>      
                        </div>
                        <div className='fluid-center'>
                        </div>

                    </Grid>     
        </Grid>

        <Grid container>
               
               <Grid item sx={{my:3}} xs={12}>
                       <h1 className="typo-h2">HOW GIG WORKS?</h1>
               </Grid>
                <div className='divider'>
               <Grid item>
                  <img src={work1} className="work1"></img>
               </Grid>
               <Grid item>
               <h2 className='title-left'>Create your profile</h2> 
               <p className='parag2'>An eye-catching title and client-focused overview help us match you to the work you want. </p>
               <p className='parag2'>Include your work history, your skills, and your photo. Add more, like an introduction video, 
                       to create a profile that really stands out.</p>
               </Grid>
               </div>
               <div className='divider'>
               <Grid item >
                  <img src={work2} className="work1"></img>
               </Grid>
               <Grid item>
                   <h2 className='title-left'>Explore ways to earn</h2> 
                   <p className='parag2'>Work and earn in different ways. Bid for jobs. Pitch your projects. Discuss your in-demand skills with our recruiters so they can find opportunities aligned with your passions and career goals. </p>
                   <p className='parag2'>Do all three. Create a predictable pipeline and build your network.</p>
               </Grid>
                </div>
                <div className='divider'>
               <Grid item>
                  <img src={work3} className="work1"></img>
               </Grid>
               <Grid item>
                   <h2 className='title-left'>Get paid securely</h2> 
                   <p className='parag2'>Choose how you get paid. Our fixed-price protection releases client payments at project milestones. </p>
                   <p className='parag2'> Hourly protection bills clients every week. However you work, our service fees are the same. Spend less time chasing, more earning.</p>
               </Grid> 
               </div>
   
           </Grid>   
   
        <Grid container sx={{ justifyContent: 'center' }}>

            <Grid item xs={12}>
                <h1 className="typo-h2">MEET OUR TEAM</h1>
            </Grid>
            <Grid item lg={4} sx={{display:'flex', justifyContent: 'center' }}>
            <Card sx={{ width:400, height:400, my:2}}>
                <CardMedia/>
                <img src={avatar1} className='avatar'></img>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
                        Norman
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
                    <span style={{fontSize:'17px'}}>FullStack Developer</span>
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Button size="small" variant='contained' color='info'><a href ="https://normsamorganda.github.io/eportfolio/" target="_blank" style={{textDecoration:'none',color:'white'}}>Check Portfolio </a></Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item lg={4} sx={{ display:'flex', justifyContent: 'center' }}>
            <Card sx={{ width:400, height:400, my:2}}>
      <CardMedia/>
      <img src={avatar3} className='avatar'></img>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
        Ryan
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
        <span style={{fontSize:'17px'}}>FullStack Developer</span>
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button size="small" variant='contained' color='info'><a href ="https://mactandog.github.io/portfolio/" target="_blank" style={{textDecoration:'none',color:'white'}}>Check Portfolio </a></Button>
      </CardActions>
    </Card>
            </Grid>
            <Grid item  lg={4} sx={{ display:'flex', justifyContent: 'center' }}>
            <Card sx={{ width:400, height:400, my:2}}>
      <CardMedia/>
      <img src={avatar2} className='avatar'></img>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
            Shamuel
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
       <span style={{fontSize:'17px'}}>FullStack Developer</span>
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button size="small" variant='contained' color='info'><a href ="https://azor-gh.github.io/portfolio/" target="_blank" style={{textDecoration:'none',color:'white'}}>Check Portfolio </a></Button>
      </CardActions>
    </Card>

            </Grid>
        </Grid>

        
        <FooterMain />
        </div>
  )
}

export default WhyGig
