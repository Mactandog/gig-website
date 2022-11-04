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
import TextareaAutosize from "@mui/base/TextareaAutosize";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import signup1 from "../../assets/media/images/signup1.png";
import ribbon from "../../assets/media/images/ribbon.png";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
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

export default function EmployerSignUp() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    companyName: "",
    companyEmail: "",
    companyPassword: "",
    companyNumber: "",
    companyDescription: "",
  });

  //created functions for validation

  let isEmpty = (element) => (element == "" ? true : false);
  function containsNumbers(str) {
    return /\d/.test(str);
  }

  let companyNameValidation = () => {
    if (isEmpty(input.companyName)) {
      document.getElementById("CompanyMessage").innerHTML =
        "Company name cannot be empty";
      document.getElementById("CompanyMessage").style.color = "red";
      return false;
    } else {
      document.getElementById("CompanyMessage").innerHTML = "Accepted";
      document.getElementById("CompanyMessage").style.color = "green";
      return input.companyName;
    }
  };
  let companyEmailValidation = () => {
    if (isEmpty(input.companyEmail)) {
      document.getElementById("CompanyEmail").innerHTML =
        "Company email cannot be empty";
      document.getElementById("CompanyEmail").style.color = "red";
      return false;
    } else if (!input.companyEmail.includes("@")) {
      document.getElementById("CompanyEmail").innerHTML =
        "Input a valid email address";
      document.getElementById("CompanyEmail").style.color = "red";
      return false;
    } else {
      document.getElementById("CompanyEmail").innerHTML = "Accepted";
      document.getElementById("CompanyEmail").style.color = "green";
      return input.companyEmail;
    }
  };

  let companyPasswordValidation = () => {
    if (isEmpty(input.companyPassword)) {
      document.getElementById("CompanyPassword").innerHTML =
        "Password cannot be empty";
      document.getElementById("CompanyPassword").style.color = "red";
      return false;
    } else if (
      input.companyPassword.length < 7 ||
      input.companyPassword.length >= 20
    ) {
      document.getElementById("CompanyPassword").innerHTML =
        "Password must between 7 and 20 characters";
      document.getElementById("CompanyPassword").style.color = "red";
      return false;
    } else {
      document.getElementById("CompanyPassword").innerHTML = "Accepted";
      document.getElementById("CompanyPassword").style.color = "green";
      return input.companyPassword;
    }
  };

  let companyNumberValidation = () => {
    if (isEmpty(input.companyNumber)) {
      document.getElementById("CompanyNumber").innerHTML =
        "Number cannot be empty";
      document.getElementById("CompanyNumber").style.color = "red";
      return false;
    } else if (!containsNumbers(input.companyNumber)) {
      document.getElementById("CompanyNumber").innerHTML =
        "Cannot be associated with letters";
      document.getElementById("CompanyNumber").style.color = "red";
      return false;
    } else {
      document.getElementById("CompanyNumber").innerHTML = "Accepted";
      document.getElementById("CompanyNumber").style.color = "green";
      return input.companyNumber;
    }
  };

  // let datas = {
  //   name:companyNameValidation(),
  //   email: companyEmailValidation(),
  //   password: companyPasswordValidation(),
  //   number:companyNumberValidation(),
  //   description:input.companyDescription,
  // }

  // console.log(datas)
  // storing to localStorage
  let handleSubmit = (e) => {
    e.preventDefault();

    companyNameValidation();
    companyEmailValidation();
    companyPasswordValidation();
    companyNumberValidation();

    let datas = {
      id: Date.now(),
      name: companyNameValidation(),
      email: companyEmailValidation(),
      password: companyPasswordValidation(),
      number: companyNumberValidation(),
      description: input.companyDescription,
    };

    localStorage.setItem("companies", JSON.stringify(datas));

    if (
      !companyNameValidation() ||
      !companyEmailValidation() ||
      !companyPasswordValidation() ||
      !companyNumberValidation()
    ) {
      alert(`complete fields`);
    } else {
      alert(`account created`);
      navigate("/business/login");
    }
  };

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
                value={input.companyName}
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <small id="CompanyMessage"></small>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="companyEmail"
                label="Company Email Address"
                name="companyEmail"
                autoComplete="email"
                value={input.companyEmail}
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <small id="CompanyEmail"></small>
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
                value={input.companyPassword}
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <small id="CompanyPassword"></small>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="companyNumber"
                label="Company Contact Number"
                name="companyNumber"
                autoComplete="number"
                value={input.companyNumber}
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <small id="CompanyNumber"></small>
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
                value={input.companyDescription}
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
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
