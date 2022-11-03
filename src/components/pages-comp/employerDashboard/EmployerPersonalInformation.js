import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Portal,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState, useRef } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CountrySelect from "../../forms/CountrySelect";
import IdSelect from "../../forms/IdSelect";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import ListItemText from "@mui/material/ListItemText";
import { TextareaAutosize} from '@mui/material'
const EmployerPersonalInformation = () => {

  <Typography variant="h4" fontWeight={500} color="textPrimary" mb={2}>
  Delete Your Account
</Typography>

let companyNameRef = useRef("");
let companyEmailRef = useRef("");
let companyPasswordRef = useRef("");
let companyDescriptionRef = useRef("");
let companyNumberRef = useRef("");

  const companySession = localStorage.getItem("company") ? JSON.parse(localStorage.getItem("company")): [];
  const userLoginSession = JSON.parse(localStorage.getItem("userInfoSession"));
  const loginSession  = userLoginSession.map((session) => {
    return session.id
  })

  let num = 1667490641233;

  let editPersonalInfo = (e) => {
    e.preventDefault();
    let num = parseInt(e.target.id);

    companySession
      .filter((company) => {
        console.log(company.id === num)
        return company.id === num;
      })
      .map((company) => {
        // return thoughtsRef.current.value = thought.thoughts;
        return  companyNameRef.current.value = company.companyName,
        companyEmailRef.current.value = company.companyEmail,
        companyPasswordRef.current.value = company.companyPassword,
        companyDescriptionRef.current.value = company.companyDescription,
        companyNumberRef.current.value = company.companyNumber
         
          
      });
  };
  

  return (
    <>
      <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>

      <Typography variant="h4" fontWeight={500} color="textPrimary" mb={2}>
         Edit your main account information here:
       </Typography>

      <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              Company Name
              <input type='text' ref={companyNameRef} style={{width:'30%',height:'30px',marginLeft:'10px'}}></input>
                
            </Grid>
            
            <Grid item xs={12}>
            Company Email Address
            <input type='text' ref={companyEmailRef} style={{width:'30%',height:'30px',marginLeft:'10px'}}></input>
                
            </Grid>
            <Grid item xs={12}>
              Company Password
              <input type='password' ref={companyPasswordRef} style={{width:'30%',height:'30px',marginLeft:'10px'}}></input>
          
            </Grid>
            <Grid item xs={12}>
              Company Contact Number: 
              <input type='text' ref={companyNumberRef} style={{width:'30%',height:'30px',marginLeft:'10px'}}></input>
                <small id="errorNumber"></small>
            </Grid>
            <Grid item xs={12}>
            Company Description
            <input type='text' ref={companyDescriptionRef} style={{width:'30%',height:'30px',marginLeft:'10px'}}></input>
            </Grid>
          </Grid>

      <Grid
                container
                  mt={4}
                  >
                  <Grid item xs={12} md={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                     
                    >
                      Save
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={2} style={{marginLeft:'20px'}}>
               {companySession.map((element) => {
                  return  <Button
                  variant="contained"
                  color="error"
                  fullWidth
                  onClick={editPersonalInfo}
                  id={element.id}
                >
                  Edit
                </Button>
               })}     
                   
                  </Grid>
                </Grid>
      
        <Grid container my={2} alignItems="center">
          {/* START MAPPING HERE */}
          <Grid item xs={3} md={3} style={{padding:'20px,5px'}}>
            <Typography variant="h6" color="textPrimary" fontWeight={500}>
              Company ID
            </Typography>
          </Grid>
          <Grid item xs={12} md={9} style={{padding:'20px,5px'}}>
          {companySession.filter((pas) => {
          
                return pas.id == loginSession;
              }).map((pas) => {
              return   <Typography variant="h6" fontWeight={500} color="textPrimary">
             {pas.id}
                </Typography>
              })}
            
          </Grid>
          <Grid item xs={3} md={3} style={{padding:'20px,5px'}}>
            <Typography variant="h6" color="textPrimary">
              Company Name
            </Typography>
          </Grid>
          <Grid item xs={9} md={9} style={{padding:'20px,5px'}}>
          {companySession.filter((pas) => {
             
                return pas.id == loginSession;
              }).map((pas) => {
              return   <Typography variant="h6" fontWeight={500} color="textPrimary">
             {pas.companyName}
                </Typography>
              })}
          </Grid>
          <Grid item xs={3} md={3} style={{padding:'20px,5px'}}>
            <Typography variant="h6" color="textPrimary">
            Email Address
            </Typography>
          </Grid>
          <Grid item xs={9} md={9} style={{padding:'20px,5px'}}>
          {companySession.filter((pas) => {
           
                return pas.id == loginSession;
              }).map((pas) => {
              return   <Typography variant="h6" fontWeight={500} color="textPrimary">
             {pas.companyEmail}
                </Typography>
              })}
          
          </Grid>
          <Grid item xs={3} md={3} style={{padding:'20px,5px'}}>
            <Typography variant="h6" color="textPrimary">
              Company Contact Number:
            </Typography>
          </Grid>
          <Grid item xs={9} md={9} style={{padding:'20px,5px'}}>
          {companySession.filter((pas) => {
               
                return pas.id == loginSession;
              }).map((pas) => {
              return   <Typography variant="h6" fontWeight={500} color="textPrimary">
             {pas.companyNumber}
                </Typography>
              })}
          </Grid>
          <Grid item xs={3} md={3} style={{padding:'20px,5px'}}>
            <Typography variant="h6" color="textPrimary">
              Company Description:
            </Typography>
          </Grid>
          <Grid item xs={9} md={9} style={{padding:'20px,5px'}}>
          {companySession.filter((pas) => {
              
                return pas.id == loginSession;
              }).map((pas) => {
              return   <Typography variant="h6" fontWeight={500} color="textPrimary">
             {pas.companyDescription}
                </Typography>
              })}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default EmployerPersonalInformation;
