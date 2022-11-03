import {
  Avatar,
  Divider,
  Grid,
  ListItem,
  ListItemAvatar,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import profilePic from "../../../assets/media/images/login1.png";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import { useState } from "react";
const EmployerProfile = () => {

  const companySession = localStorage.getItem("company") ? JSON.parse(localStorage.getItem("company")): [];
  const userLoginSession = JSON.parse(localStorage.getItem("userInfoSession"));
  const loginSession  = userLoginSession.map((session) => {
    return session.id
  })


  // const  currentSessionID = userLoginSession.map((user) => {
  //   user.id
  // })

  return (
    <>
      <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
        <Grid container m={2}>
          <Grid item xs={12} md={2}>
            <ListItem sx={{ width: "100%" }}>
              <ListItemAvatar>
                <Avatar
                  alt="User First Name"
                  variant="square"
                  src={profilePic}
                  sx={{ width: 100, height: 100, mr: 4 }}
                />
              </ListItemAvatar>
            </ListItem>
          </Grid>
          <Grid item xs={12} md={10}>
          {companySession.filter((pas) => {
                console.log(pas.id == loginSession)
                return pas.id == loginSession;
              }).map((pas) => {
              return <Typography variant="h3" fontWeight={500} color="textPrimary">
             {pas.companyName}
            </Typography>
              })}
            <Typography variant="body1" fontWeight={400} color="textPrimary">
              Lorem Ipsum
            </Typography>
            <Typography variant="body2" color="textPrimary">
           Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            </Typography>
            <Typography variant="body2" color="textPrimary" mt={1}>
              <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }}>
              {companySession.filter((pas) => {
                console.log(pas.id == loginSession)
                return pas.id == loginSession;
              }).map((pas) => {
              return <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <LocalPhoneRoundedIcon sx={{ width: 15, mr: 1, ml: 2 }} />
              {pas.companyNumber}{" "}
            </Typography>
              })}

              {companySession.filter((pas) => {
                
                return pas.id == loginSession;
              }).map((pas) => {
              return <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <EmailRoundedIcon sx={{ width: 15, mr: 1, ml: 2 }} />{" "}
              {pas.companyEmail}{" "}
            </Typography>
              })}
                
                
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <LocationOnRoundedIcon sx={{ width: 15, mr: 1, ml: 2 }} />
                  minima veniam, quis
                </Typography>
              </Stack>
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid item xs={12} mt={2}>
          <Typography
            variant="h6"
            color="textPrimary"
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              mb: 2,
            }}
          >
            <WorkHistoryRoundedIcon sx={{ mr: 1 }} /> COMPANY EXPERIENCE
          </Typography>
        </Grid>
        {/* ============== WORK EXPERIENCE ================== */}
        <Grid container my={2}>
          {/* Start mapping here */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
            Neque porro quisquam
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h6" color="textPrimary">
            Molestiae non recusandae. Itaque earum rerum
            </Typography>
            <Typography variant="body1" color="textPrimary">
            Itaque earum rerum Consequatur aut perferendis doloribus asperiores repellat. Nam libero tempore, 
            cum soluta nobis est eligendi optio cumque nihil impedit quo minus 
            id quod maxime placeat facere possimus
            blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et 
            quas molestias excepturi sint occaecati cupiditate non provident
            </Typography>
          </Grid>
          <Grid item xs={0} md={3}></Grid>
          <Grid item xs={12} md={9} sx={{ display: "flex" }}>
            <Grid container>
              <Grid item md={9}>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={0} md={3}></Grid>
          <Grid item xs={0} md={3}></Grid>
        </Grid>
        {/* END OF WORK EXPERINCE  */}
        <Divider />

        {/* ================ EDUCATION ============= */}
        <Grid item xs={12} mt={2}>
          <Typography
            variant="h6"
            color="textPrimary"
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              mb: 2,
            }}
          >
            <SchoolRoundedIcon sx={{ mr: 1 }} /> HOW OUR COMPANY STARTED
          </Typography>
        </Grid>
        <Grid container my={2}>
          {/* START MAPPING HERE */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
            
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h6" color="textPrimary">
            Debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
            </Typography>
            <Typography variant="body1" color="textPrimary">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </Typography>
            <Typography variant="body1" color="textPrimary">
             
            </Typography>
          </Grid>
        </Grid>
        {/* END OF EDUCATION */}
        <Divider />
        {/* ================ SKILLS ============= */}
        <Grid item xs={12} mt={2}>
          <Typography
            variant="h6"
            color="textPrimary"
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              mb: 2,
            }}
          >
            <PsychologyRoundedIcon sx={{ mr: 1 }} /> OUR PEOPLE
          </Typography>
        </Grid>
        <Grid container my={2}>
          {/* START MAPPING HERE */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
            
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography
              variant="subtitle1"
              fontWeight={500}
              color="textPrimary"
            >
        
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              variant="subtitle2"
              fontWeight={500}
              color="textPrimary"
            >
            
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography
              variant="subtitle1"
              fontWeight={500}
              color="textPrimary"
            >
           
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
            
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography
              variant="subtitle1"
              fontWeight={500}
              color="textPrimary"
            >
            Itaque earum rerum Consequatur aut perferendis doloribus asperiores repellat. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
            </Typography>
          </Grid>
        </Grid>
        {/* END OF SKILLS */}
        <Divider />
        {/* ================ PERSONAL INFORMATION ============= */}
        
      </Paper>
    </>
  );
};

export default EmployerProfile;
