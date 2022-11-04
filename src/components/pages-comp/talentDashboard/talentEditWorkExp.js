import {
  Autocomplete,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Portal,
  TextareaAutosize,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CountrySelect from "../../forms/CountrySelect";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import { Form, FormLabel } from "react-bootstrap";
import { useState } from "react";
import Countries from "../../data/Countries";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

let workExperienceList = localStorage.getItem("WorkExperienceDetails")
  ? JSON.parse(localStorage.getItem("WorkExperienceDetails"))
  : [];

let userLoginSession = localStorage.getItem("userInfoSession")
  ? JSON.parse(localStorage.getItem("userInfoSession"))
  : [];

const TalentEditWorkExp = () => {
  const [work, setWork] = useState(workExperienceList);
  const [talentId, setTalentId] = useState();
  const [workId, setWorkId] = useState(Date.now);
  const [userSession, setUserSession] = useState(userLoginSession);

  const currentSessionId = userLoginSession.map((user) => user.id);

  //Checkbox Present
  const [checkedPresent, setcheckedPresent] = React.useState(false);
  const handleChangePresent = (event) => {
    setcheckedPresent(event.target.checked);
  };

  //Select Country
  const [country, setCountry] = useState(null);
  const selectCountry = (event, value) => setCountry(value.label);

  // =================================================== //
  // ============= START OF VALIDATIONS ================ //
  // =================================================== //

  const isRequired = (value) => (value == "" ? true : false);

  const checkPositionTitle = () => {
    const position = document.getElementById("position").value.trim();
    if (isRequired(position)) {
      document.getElementById("positionHelper").innerHTML = "Required";
      return false;
    } else {
      document.getElementById("positionHelper").innerHTML = `&nbsp`;
      return true;
    }
  };

  const checkCompany = () => {
    const company = document.getElementById("company").value.trim();
    if (isRequired(company)) {
      document.getElementById("companyHelper").innerHTML = "Required";
      return false;
    } else {
      document.getElementById("companyHelper").innerHTML = `&nbsp`;
      return true;
    }
  };

  const checkStartDate = () => {
    const startDate = document.getElementById("startDate").value;
    if (isRequired(startDate)) {
      document.getElementById("startDateHelper").innerHTML = "Required";
      return false;
    } else {
      document.getElementById("startDateHelper").innerHTML = `&nbsp`;
      return true;
    }
  };

  const checkEndDate = () => {
    const endDate = document.getElementById("endDate").value;
    if (isRequired(endDate)) {
      document.getElementById("endDateHelper").innerHTML = "Required";
      return false;
    } else {
      document.getElementById("endDateHelper").innerHTML = `&nbsp`;
      return true;
    }
  };

  const checkSpecialization = () => {
    const specialization = document
      .getElementById("specialization")
      .value.trim();
    if (isRequired(specialization)) {
      document.getElementById("specializationHelper").innerHTML = "Required";
      return false;
    } else {
      document.getElementById("specializationHelper").innerHTML = `&nbsp`;
      return true;
    }
  };

  const checkRole = () => {
    const role = document.getElementById("role").value.trim();
    if (isRequired(role)) {
      document.getElementById("roleHelper").innerHTML = "Required";
      return false;
    } else {
      document.getElementById("roleHelper").innerHTML = `&nbsp`;
      return true;
    }
  };

  const checkCountry = () => {
    const country = document.getElementById("country").value;
    if (isRequired(country)) {
      document.getElementById("countryHelper").innerHTML = "Required";
      return false;
    } else {
      document.getElementById("countryHelper").innerHTML = `&nbsp`;
      return true;
    }
  };

  const checkPositionLevel = () => {
    const positionLevel = document.getElementById("positionLevel").value;
    if (isRequired(positionLevel)) {
      document.getElementById("positionLevelHelper").innerHTML = "Required";
      return false;
    } else {
      document.getElementById("positionLevelHelper").innerHTML = `&nbsp`;
      return true;
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfoSession"));
    if (userSession) {
      setUserSession(user);
    }
  }, []);

  let addWorkExperience = () => {
    // e.preventDefault();
    // setTalentId(Date.now);
    let num = parseInt(currentSessionId);
    setWorkId(Date.now);
    setTalentId(num);

    let workInfo = {
      workId: workId,
      talentId: num,
      position: document.getElementById("position").value.trim(),
      company: document.getElementById("company").value.trim(),
      startDate: document.getElementById("startDate").value,
      endDate: document.getElementById("endDate").value,
      specialization: document.getElementById("specialization").value.trim(),
      role: document.getElementById("role").value.trim(),
      country: country,
      positionLevel: document.getElementById("positionLevel").value,
      jobDescription: document.getElementById("jobDescription").value.trim(),
    };

    setWork([...work, workInfo]);
    workExperienceList.push(workInfo);
    let workExpList = JSON.stringify(workExperienceList);
    localStorage.setItem("WorkExperienceDetails", workExpList);
  };

  const navigate = useNavigate();
  let submitWorkExperience = (event) => {
    event.preventDefault();
    if (
      checkPositionTitle() === true &&
      checkCompany() === true &&
      checkStartDate() === true &&
      checkEndDate() === true &&
      checkSpecialization() === true &&
      checkRole() === true &&
      checkCountry() === true &&
      checkPositionLevel()
    ) {
      addWorkExperience();
      alert("success");
      navigate("/talent/profile/work-experience");
    }
  };

  return (
    <>
      <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
        <Grid container>
          <Grid item xs={8} md={8}>
            <Typography variant="h4" fontWeight={500} color="textPrimary">
              <WorkHistoryRoundedIcon /> Work Experince
            </Typography>
          </Grid>
          <Grid item xs={4} md={4} textAlign="right">
            <Tooltip title="Add Experience">
              <Button
                id="add"
                type="button"
                // disabled={showForm}
                variant="outlined"
                startIcon={<AddCircleOutlineRoundedIcon />}
                // onClick={handleShowForm}
              >
                Add
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
        <Box>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ flexGrow: 1, mt: 4 }}
            onSubmit={submitWorkExperience}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Position Title*"
                  id="position"
                  size="small"
                />
                <small id="positionHelper" className="textHelper">
                  &nbsp;
                </small>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Company Name*"
                  id="company"
                  size="small"
                />
                <small id="companyHelper" className="textHelper">
                  &nbsp;
                </small>
              </Grid>
            </Grid>

            <Grid container spacing={2} alignItems="center" mt={2}>
              <Grid item xs={12} md={12}>
                <Typography variant="body1" color="primary">
                  Work Duration*
                </Typography>
              </Grid>
              <Grid item xs={5} md={3}>
                <FormControl>
                  <FormLabel>Date of Birth*</FormLabel>
                  <input
                    type="date"
                    name="startDate"
                    id="startDate"
                    style={{ fontSize: "1rem" }}
                  />
                  <small id="startDateHelper" className="textHelper">
                    &nbsp;
                  </small>
                </FormControl>
              </Grid>
              <Grid item xs={2} md={1} textAlign="center">
                <Typography variant="body1" color="primary">
                  To
                </Typography>
              </Grid>
              <Grid item xs={5} md={3}>
                <FormControl>
                  <FormLabel>Date of Birth*</FormLabel>
                  <input
                    type="date"
                    name="endDate"
                    id="endDate"
                    style={{ fontSize: "1rem" }}
                  />
                  <small id="endDateHelper" className="textHelper">
                    &nbsp;
                  </small>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center" mt={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Specialization*"
                  id="specialization"
                  size="small"
                />
                <small id="specializationHelper" className="textHelper">
                  &nbsp;
                </small>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth label="Role*" id="role" size="small" />
                <small id="roleHelper" className="textHelper">
                  &nbsp;
                </small>
              </Grid>
              <Grid item xs={12} md={4}>
                <Autocomplete
                  id="country"
                  sx={{ width: "100%" }}
                  options={Countries}
                  autoHighlight
                  onChange={selectCountry}
                  getOptionLabel={(option) => option.label}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                      />
                      {option.label} ({option.code}) +{option.phone}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Choose a country*"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                      }}
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                />
                <small id="countryHelper" className="textHelper">
                  &nbsp;
                </small>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl>
                  <FormLabel>Position Level*</FormLabel>
                  <Form.Select
                    aria-label="Select Position Level"
                    id="positionLevel"
                    className="form-select"
                    // onChange={handleSelectPositionLevel}
                    // value={positionLevel}
                  >
                    <option disabled selected value="">
                      Select Position Level
                    </option>
                    <option value="CEO / SVP / AVP / VP / Director">
                      CEO / SVP / AVP / VP / Director
                    </option>
                    <option value="Assistant Manager / Manager">
                      Assistant Manager / Manager
                    </option>
                    <option value="Supervisor / 5 Years & Up Experienced Employee">
                      Supervisor / 5 Years & Up Experienced Employee
                    </option>
                    <option value="1-4 Years Experienced Employee">
                      1-4 Years Experienced Employee
                    </option>
                    <option value="Fresh Grad / < 1 Year Experienced Employee">
                      Fresh Grad / {"<"} 1 Year Experienced Employee
                    </option>
                    <option value="Non-Executive">Non-Executive</option>
                  </Form.Select>
                  <small id="positionLevelHelper" className="textHelper">
                    &nbsp;
                  </small>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center" mt={2}>
              <Grid item xs={12} md={12}>
                <Typography variant="body1" color="primary">
                  Job Description {"(Optional)"}
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <TextareaAutosize
                  id="jobDescription"
                  aria-label="minimum height"
                  minRows={10}
                  placeholder="Brief description of your previous job"
                  style={{ width: "100%" }}
                />
              </Grid>
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
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  // onClick={handleShowForm}
                >
                  Save
                </Button>
              </Grid>
              <Grid item xs={12} md={2}>
                <Button
                  type="button"
                  component="a"
                  href="/talent/profile/work-experience"
                  variant="contained"
                  color="error"
                  fullWidth
                  // onClick={handleShowForm}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Divider />
      </Paper>
    </>
  );
};

export default TalentEditWorkExp;
