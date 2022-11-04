import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import { useNavigate } from "react-router-dom";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

let talentPersonalInfo = localStorage.getItem("personalInfoDetails")
  ? JSON.parse(localStorage.getItem("personalInfoDetails"))
  : [];

let userLoginSession = localStorage.getItem("userInfoSession")
  ? JSON.parse(localStorage.getItem("userInfoSession"))
  : [];

const TalentChangePassword = () => {
  const [userSession, setUserSession] = useState(userLoginSession);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfoSession"));
    if (userSession) {
      setUserSession(user);
    }
  }, []);

  const currentSessionId = userLoginSession.map((user) => user.id);
  const navigate = useNavigate();

  const isRequired = (value) => (value == "" ? true : false);
  const isPasswordValid = (password) => {
    let passwordPattern = new RegExp(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    );
    return passwordPattern.test(password);
  };

  const isBetween = (length, min, max) =>
    length >= min && length <= max ? true : false;

  const isNoWhiteSpace = (value) => {
    const noWhiteSpace = new RegExp(/^\S*$/);
    return noWhiteSpace.test(value);
  };

  const checkPass = () => {
    const currentPass = document.getElementById("currentPass").value;
    if (isRequired(currentPass)) {
      document.getElementById("currentPassHelper").innerHTML = "Required";
      return false;
    } else if (
      currentPass ==
      talentPersonalInfo
        .filter((talent) => {
          return talent.talentId == currentSessionId;
        })
        .map((talent) => {
          return talent.password;
        })
    ) {
      document.getElementById("currentPassHelper").innerHTML = `&nbsp`;
      return true;
    } else {
      document.getElementById(
        "currentPassHelper"
      ).innerHTML = `Password didn't match! Try again.`;
      return true;
    }
  };

  const checkNewPass = () => {
    const newPass = document.getElementById("newPass").value.trim();

    const min = 7;
    const max = 12;
    if (isRequired(newPass)) {
      document.getElementById("newPassHelper").innerHTML = "Required";
      return false;
    } else if (!isBetween(newPass.length, min, max)) {
      document.getElementById("newPassHelper").innerHTML =
        "Password must be 7 to 12 characters long";
      return false;
    } else if (!isNoWhiteSpace(newPass)) {
      document.getElementById("newPassHelper").innerHTML =
        "Password must not have spaces.";
      return false;
    } else if (!isPasswordValid(newPass)) {
      document.getElementById("newPassHelper").innerHTML =
        "Password must have at least one number and one special character.";
      return false;
    } else {
      document.getElementById("newPassHelper").innerHTML = `&nbsp`;
      return true;
    }
  };

  const checkConfirmPass = () => {
    const confirmPass = document.getElementById("confirmPass").value.trim();
    const newPass = document.getElementById("newPass").value.trim();
    if (isRequired(confirmPass)) {
      document.getElementById("confirmPassHelper").innerHTML = "Required";
      return false;
    } else if (newPass !== confirmPass) {
      document.getElementById("confirmPassHelper").innerHTML =
        "Password didn't match.";
      return false;
    } else {
      document.getElementById("confirmPassHelper").innerHTML =
        "Password didn't match.";
      return true;
    }
  };

  let submitPassword = (event) => {
    event.preventDefault();
    if (checkPass() == true && checkNewPass() && checkConfirmPass()) {
      alert("Password Changed successfully!");
      setTimeout(() => {
        window.location.reload(true);
      }, 500);
    }
  };

  return (
    <>
      <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
        <Typography variant="h4" fontWeight={500} color="textPrimary">
          <ManageAccountsRoundedIcon /> Change Password
        </Typography>
        <Box>
          <Grid container mt={4}>
            <Root>
              <Divider textAlign="center">
                <Chip label="PASSWORD" color="primary" />
              </Divider>

              <Grid
                component="form"
                onSubmit={submitPassword}
                container
                spacing={1}
                my={5}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={12} md={4}>
                  <TextField
                    type="password"
                    fullWidth
                    label="Current Password*"
                    id="currentPass"
                    size="small"
                  />
                  <small id="currentPassHelper" className="textHelper">
                    &nbsp;
                  </small>

                  <br></br>

                  <TextField
                    type="password"
                    fullWidth
                    label="New Password*"
                    id="newPass"
                    size="small"
                  />
                  <small id="newPassHelper" className="textHelper">
                    &nbsp;
                  </small>

                  <br></br>

                  <TextField
                    type="password"
                    fullWidth
                    label="Confirm Password*"
                    id="confirmPass"
                    size="small"
                  />
                  <small id="confirmPassHelper" className="textHelper">
                    &nbsp;
                  </small>
                </Grid>
                <Grid
                  container
                  spacing={2}
                  mt={4}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item xs={12} md={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      type="submit"
                    >
                      Save
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Button variant="contained" color="error" fullWidth>
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Root>
            <small id="confirmPassHelper" />
            <small id="confirmPassHelper" />
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default TalentChangePassword;
