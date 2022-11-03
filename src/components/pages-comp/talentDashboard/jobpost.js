import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Avatar,
  Chip,
} from "@mui/material";
import React , { useState } from "react";
import companyImage from "../../../assets/media/images/pexels-mikhail-nilov-7988208.jpg";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { LocationCityRounded } from "@mui/icons-material";
import TurnedInNotRoundedIcon from "@mui/icons-material/TurnedInNotRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import { Stack } from "@mui/system";

const JobsList2 =  localStorage.getItem("jobpost") ? JSON.parse(localStorage.getItem("jobpost")) : [];
let id = localStorage.getItem("jobpostIDselected") ? JSON.parse(localStorage.getItem("jobpostIDselected")) : [];
const JobPost = () => {
  let idpost = id;
  
 
 
  
    
  return (
    
    <Box p={4}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10}>
          <Card sx={{ position: "relative", mb: 8 }}>
            <CardMedia
              component="img"
              height="250"
              image={companyImage}
              alt="Paella dish"
            />



            <Avatar
              variant="rounded"
              alt="Company Name"
              src={companyImage}
              sx={{
                width: 150,
                height: 150,
                position: "absolute",
                left: 30,
                top: 160,
                border: 2,
                borderRadius: 4,
              }}
            />
            
            <Box padding={4}>
              <CardContent>
              <Typography
                  variant="h2" color="textDark" fontWeight={500}
                >
                  {JobsList2.filter((val) => {
    
                      if(val.id === idpost){
                        return val
                      } 
                      
                    }
                    
                  ).map((val,key) => {
                            
                    return (
                    
                      
                      <div key={key}>
                        <p>{val.company} </p>
                      </div>

                    )
                    })}
                </Typography>


                <Typography
                  variant="h4" color="textSecondary" fontWeight={500}
                >
                  {JobsList2.filter((val) => {
    
                      if(val.id === idpost){
                        return val
                      } 
                      
                    }
                    
                  ).map((val,key) => {
                            
                    return (
                    
                      
                      <div key={key}>
                        <p>{val.title} </p>
                      </div>

                    )
                    })}
                </Typography>

                


               
              </CardContent>
              <CardContent>
                
                <Typography
                  variant="h5"
                  color="primary"
                  fontWeight={500}
                  textAlign="justify"
                  mb={2}
                >
                 {JobsList2.filter((val) => {
    
                      if(val.id === idpost){
                        return val
                      } 
                      
                    }
                    
                  ).map((val,key) => {
                            
                    return (
                    
                      
                      <div key={key}>
                        <p> Skill: {val.skill}</p>
                      </div>

                    )
                    })}
                </Typography>
                

                <Typography
                  variant="h4" color="textSecondary" fontWeight={500}
                >
                  {JobsList2.filter((val) => {
    
                      if(val.id === idpost){
                        return val
                      } 
                      
                    }
                    
                  ).map((val,key) => {
                            
                    return (
                    
                      
                            <Chip
                        icon={<PaidRoundedIcon />}
                        label={val.salary}$
                        variant="outlined"
                        color="success"
                        sx={{ fontSize: 20 }}
                      />

                    )
                    })}
                </Typography>
                
              </CardContent>
              
              {/*  */}
               
              <CardActions>
                <Button
                  aria-label="message"
                  variant="contained"
                  size="large"
                  startIcon={<EmailRoundedIcon />}
                >
                  Easy Apply
                </Button>
                {/* <Button
                  aria-label="message"
                  variant="outlined"
                  size="large"
                  color="secondary"
                  startIcon={<TurnedInNotRoundedIcon />}
                >
                  Save
                </Button> */}
              </CardActions>
              <CardContent>
                <Typography variant="subtitle1" color="primary">
                
                  {JobsList2.filter((val) => {
    
                      if(val.id === idpost){
                        return val
                      } 
                      
                    }
                    
                  ).map((val,key) => {
                            
                    return (
                    
                      <div key={key}>
                        <p> Posted: {val.date}</p>
                      </div>
                    

                    )
                    })}
                
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={10}>
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" fontWeight={500} color="primary" mb={4}>
                About the Job
              </Typography>
              <Typography variant="subtitle1" color="primary">
              
                  {JobsList2.filter((val) => {
    
                      if(val.id === idpost){
                        return val
                      } 
                      
                    }
                    
                  ).map((val,key) => {
                            
                    return (
                    
                      
                      <div key={key}>
                        <p> {val.desc}</p>
                      </div>

                    )
                    })}
                
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

};

export default JobPost;
