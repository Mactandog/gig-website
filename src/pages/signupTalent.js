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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import signup2 from "../assets/media/images/signup2.png";
import signup3 from "../assets/media/images/signup3.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

let talentPersonalInfo = localStorage.getItem("personalInfoDetails")
  ? JSON.parse(localStorage.getItem("personalInfoDetails"))
  : [];

export default function TalentSignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const navigate = new useNavigate();

  // Add Personal Info
  const [talentInfo, setTalentInfo] = useState(talentPersonalInfo);
  const [talentId, setTalentId] = useState(Date.now());

  // =================================================== //
  // ============= START OF VALIDATIONS ================ //
  // =================================================== //

  const isRequired = (value) => (value == "" ? true : false);
  const isBetween = (length, min, max) =>
    length >= min && length <= max ? true : false;
  const isEmailValid = (email) => {
    let emailPattern = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return emailPattern.test(email);
  };

  const isPasswordValid = (password) => {
    let passwordPattern = new RegExp(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    );
    return passwordPattern.test(password);
  };
  const isLettersOnly = (name) => {
    let namePattern = new RegExp(/^[A-Za-z\s]*$/);
    return namePattern.test(name);
  };
  const isNumbersOnly = (zip) => {
    let zipPattern = new RegExp(/^\d+$/);
    return zipPattern.test(zip);
  };

  const checkFirstName = () => {
    const firstName = document.getElementById("firstName").value.trim();
    if (isRequired(firstName)) {
      document.getElementById("firstNameHelper").innerHTML = "Required";
      return false;
    } else if (!isLettersOnly(firstName)) {
      document.getElementById("firstNameHelper").innerHTML =
        "First name must not contain numbers";
      return false;
    } else {
      document.getElementById("firstNameHelper").innerHTML = `&nbsp`;
      return true;
    }
  };

  const checkLastName = () => {
    const lastName = document.getElementById("lastName").value.trim();
    if (isRequired(lastName)) {
      document.getElementById("lastNameHelper").innerHTML = "Required";
      return false;
    } else if (!isLettersOnly(lastName)) {
      document.getElementById("lastNameHelper").innerHTML =
        "Last name must not contain numbers";
      return false;
    } else {
      document.getElementById("lastNameHelper").innerHTML = `&nbsp`;
      return true;
    }
  };

  const checkEmail = () => {
    const email = document.getElementById("email").value.trim();
    if (isRequired(email)) {
      document.getElementById("emailHelper").innerHTML = "Required";
      return false;
    } else if (!isEmailValid(email)) {
      document.getElementById("emailHelper").innerHTML =
        "Please enter a valid email";
      return false;
    } else {
      document.getElementById("emailHelper").innerHTML = `&nbsp`;
      return true;
    }
  };

  // Validate Password
  const checkPasswordVal = () => {
    const password = document.getElementById("password").value.trim();
    const min = 7;
    const max = 12;
    if (isRequired(password)) {
      document.getElementById("passwordHelper").innerHTML = "Required";
      return false;
    } else if (!isBetween(password.length, min, max)) {
      document.getElementById("passwordHelper").innerHTML =
        "Password must be 7 to 12 characters long";
      return false;
    } else if (!isPasswordValid(password)) {
      document.getElementById("passwordHelper").innerHTML =
        "Password must have at least one number and one special character.";
      return false;
    } else {
      document.getElementById("passwordHelper").innerHTML = `&nbsp`;
      return true;
    }
  };

  const checkConfirmPass = () => {
    const confirmPass = document.getElementById("confirmPassword").value.trim();
    const password = document.getElementById("password").value.trim();
    if (isRequired(confirmPass)) {
      document.getElementById("confirmPasswordHelper").innerHTML = "Required";
      return false;
    } else if (confirmPass !== password) {
      document.getElementById("confirmPasswordHelper").innerHTML =
        "Password didn't match";
      return false;
    } else {
      document.getElementById("confirmPasswordHelper").innerHTML = `&nbsp`;
      return true;
    }
  };

  let addPersonalInfo = () => {
    // e.preventDefault();
    setTalentId(Date.now);

    let personalInfoDetails = {
      talentId: talentId,
      userType: "Talent",
      firstName: document.getElementById("firstName").value.trim(),
      middleName: "",
      lastName: document.getElementById("lastName").value.trim(),
      birthDate: "",
      age: "",
      status: "",
      gender: "",
      email: document.getElementById("email").value.trim(),
      password: document.getElementById("password").value.trim(),
      phoneNo: "",
      nationality: "",
      country: "",
      state: "",
      address: "",
      city: "",
      postal: "",
      identification: "",
      identificationNo: "",
    };

    setTalentInfo([...talentInfo, personalInfoDetails]);
    talentPersonalInfo.push(personalInfoDetails);
    let talentPersonalInfoList = JSON.stringify(talentPersonalInfo);
    localStorage.setItem("personalInfoDetails", talentPersonalInfoList);
    console.log(talentPersonalInfo);
    document.forms[0].reset();
  };

  let createAccount = (event) => {
    event.preventDefault();
    if (
      checkFirstName() === true &&
      checkLastName() === true &&
      checkEmail() === true &&
      checkPasswordVal() === true &&
      checkConfirmPass()
    ) {
      addPersonalInfo();
      alert("success");
      navigate("/talent/login");
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ height: "93vh" }}>
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
            bottom: -20,
            left: -470,
          }}
        >
          <img src={signup3} width={350} alt="woman illustration" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 470,
          }}
        >
          <img src={signup2} width={400} alt="man illustration" />
        </Box>

        <Avatar sx={{ m: 1, mt: 6, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h4">
          Create a new acount
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={createAccount}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
              <small id="firstNameHelper" className="textHelper">
                &nbsp;
              </small>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
              <small id="lastNameHelper" className="textHelper">
                &nbsp;
              </small>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <small id="emailHelper" className="textHelper">
                &nbsp;
              </small>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
              <small id="passwordHelper" className="textHelper">
                &nbsp;
              </small>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
              />
              <small id="confirmPasswordHelper" className="textHelper">
                &nbsp;
              </small>
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
              <small id="termsHelper" className="textHelper">
                &nbsp;
              </small>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive job posts and updates via email."
              />
              <small id="subscribeHelper" className="textHelper">
                &nbsp;
              </small>
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create acount
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/talent/login" variant="body2">
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
