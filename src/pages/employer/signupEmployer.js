import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import signup1 from "../../assets/media/images/signup1.png";
import ribbon from "../../assets/media/images/ribbon.png";
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dataset } from "@mui/icons-material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Gig
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

let companyList = localStorage.getItem("company") ? JSON.parse(localStorage.getItem("company")): [];

export default function EmployerSignUp() {

  const navigate = useNavigate();

  let [id, setId] = useState(Date.now);
  let [employerList, setEmployerList] = useState(companyList);

  let isEmpty = (element) => element == "" ? true : false;
  function containsNumbers(str) { return /\d/.test(str);}
  
  
  let companyNameValidation = () => {
    const comName = document.getElementById("companyName").value.trim();
    if(isEmpty(comName)) {
      document.getElementById("errorName").innerHTML = "Company name cannot be empty"
      document.getElementById("errorName").style.color = "red";
      return false;
    }else {
      document.getElementById("errorName").innerHTML = "Accepted"
      document.getElementById("errorName").style.color = "green";
      return comName; 
  }
  }
  let companyEmailValidation = () => {
    const comEmail = document.getElementById("companyEmail").value.trim();
    if(isEmpty(comEmail)) {
      document.getElementById("errorEmail").innerHTML = "Company email cannot be empty"
      document.getElementById("errorEmail").style.color = "red";
      return false;
    } else if(!comEmail.includes("@")){
      document.getElementById("errorEmail").innerHTML = "Input a valid email address"
      document.getElementById("errorEmail").style.color = "red";
      return false;
    }else{
      document.getElementById("errorEmail").innerHTML = "Accepted"
      document.getElementById("errorEmail").style.color = "green";
      return comEmail;
      }
  }

  let companyPasswordValidation = () => {
    const comPass = document.getElementById("companyPassword").value.trim();
    if(isEmpty(comPass)) {
      document.getElementById("errorPassword").innerHTML = "Password cannot be empty"
      document.getElementById("errorPassword").style.color = "red";
      return false;
    }
    else if (comPass.length < 7 || comPass.length >= 20)  {
      document.getElementById("errorPassword").innerHTML = "Password must between 7 and 20 characters"
      document.getElementById("errorPassword").style.color = "red";
      return false;
    }else {
      document.getElementById("errorPassword").innerHTML = "Accepted"
      document.getElementById("errorPassword").style.color = "green";
      return comPass;
    }
  }
  
  let companyNumberValidation = () => {
    const compNumber = document.getElementById("companyNumber").value.trim();
    if(isEmpty(compNumber)) {
      document.getElementById("errorNumber").innerHTML = "Number cannot be empty"
      document.getElementById("errorNumber").style.color = "red";
      return false;
    }else if (!containsNumbers(compNumber)) {
      document.getElementById("errorNumber").innerHTML = "Cannot be associated with letters"
      document.getElementById("errorNumber").style.color = "red";
      return false;
    }
    else {
      document.getElementById("errorNumber").innerHTML = "Accepted"
      document.getElementById("errorNumber").style.color = "green";
      return compNumber;
    }
  }

  let addCompanyInfo = () => {
    let company = {
      id: id,
      companyName: companyNameValidation(), 
      companyEmail: companyEmailValidation(), 
      companyPassword: companyPasswordValidation(), 
      companyNumber: companyNumberValidation(), 
      companyDescription: document.getElementById("companyDescription").value.trim(), 
    };
  
    setEmployerList([...employerList, company]);
  
    companyList.push(company);
      let CompanyInfoList = JSON.stringify(companyList);
      localStorage.setItem("company", CompanyInfoList);
      console.log(companyList);
      document.forms[0].reset();
    
  }

let handleSubmit = (e) => {
  e.preventDefault();

  companyNameValidation()  
  companyEmailValidation() 
  companyPasswordValidation() 
  companyNumberValidation()

   if(!companyNameValidation() || !companyEmailValidation() || !companyPasswordValidation() || !companyNumberValidation()){
    navigate("/business/signup");
  } else {
    alert(`Success the account has been created!`)
    addCompanyInfo()
    navigate("/business/login");
  }

}

useEffect(() => {
 localStorage.setItem("company", JSON.stringify(employerList))},
  [employerList]);



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: -470,
          }}
        >
          <img src={signup1} width={400} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: -100,
            left: -470,
            transform: "rotate(40deg)",
          }}
        >
          <img src={ribbon} width={200} height={1000} />
        </Box>

        <Avatar sx={{ m: 1, mt: 6, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h4">
          Employer Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="given-name"
                name="companyName"
                required
                fullWidth
                id="companyName"
                label="Company Name"
                autoFocus
              />
                 <small id="errorName"></small>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="companyEmail"
                label="Company Email Address"
                name="companyEmail"
                autoComplete="email"
              />
                <small id="errorEmail"></small>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="companyPassword"
                label="Company Password"
                type="password"
                id="companyPassword"
                autoComplete="new-password"
              />
            <small id="errorPassword"></small>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="companyNumber"
                label="Company Contact Number"
                name="companyNumber"
                autoComplete="number"
              />
                <small id="errorNumber"></small>
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                fullWidth
                id="companyDescription"
                label="Brief company description."
                name="companyDescription"
                autoComplete="companyDescription"
                multiline
                rows={8}
              />
            </Grid>
  
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowTerms" color="primary" />}
                label={
                  <span>
                    I agree to the {""}
                    <Link
                      href="/gig/terms-and-conditions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      terms and conditions
                    </Link>
                    *
                  </span>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/business/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
