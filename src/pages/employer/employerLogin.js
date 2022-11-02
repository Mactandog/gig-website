import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import loginImg2 from "../../assets/media/images/login2.jpg";
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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

export default function EmployerLogin() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    companyEmail:"",
    companyPassword:"",
   
  });
  
  let handleLogin = (e) => {
      e.preventDefault();
      const loggedCompany = JSON.parse(localStorage.getItem("companies"));
      if(input.companyEmail === loggedCompany.email && 
          input.companyPassword === loggedCompany.password) 
          {
              navigate("/companies")
      }else{
          alert("wrong email or password")
      }

      console.log(loggedCompany)

  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${loginImg2})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Employer Log in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleLogin}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="companyEmail"
              label="Company Email Address"
              name="companyEmail"
              autoComplete="email"
              autoFocus
              onChange={(e)=>setInput({
                ...input,
                [e.target.name]: e.target.value,
              })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="companyPassword"
              label="Password"
              type="password"
              id="companyPassword"
              autoComplete="current-password"
              onChange={(e)=>setInput({
                ...input,
                [e.target.name]: e.target.value,
              })}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/business/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
