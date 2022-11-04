import {
  Autocomplete,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Portal,
  Select,
  TextareaAutosize,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import CountrySelect from "../../forms/CountrySelect";
import YearMonthPicker from "../../forms/MonthPicker";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import { Link } from "react-router-dom";
import { useState } from "react";
import Countries from "../../data/Countries";

let educationList = localStorage.getItem("EducationData")
  ? JSON.parse(localStorage.getItem("EducationData"))
  : [];

let userLoginSession = localStorage.getItem("userInfoSession")
  ? JSON.parse(localStorage.getItem("userInfoSession"))
  : [];

const TalentEditEducation = () => {
  const [education, setEducation] = useState(educationList);
  const [educationId, setEducationId] = useState(Date.now);
  const [userSession, setUserSession] = useState(userLoginSession);

  const currentSessionId = userLoginSession.map((user) => user.id);

  //Qualification Picker
  const [qualification, setqualification] = React.useState("");
  const handleChange = (event) => {
    setqualification(event.target.value);
  };

  //Select Country
  const [country, setCountry] = useState(null);
  const selectCountry = (event, value) => setCountry(value.label);

  const isRequired = (value) => (value == "" ? true : false);
  const isNull = (value) => (value == null ? true : false);
  const checkSchool = () => {
    const school = document.getElementById("school").value.trim();
    if (isRequired(school)) {
      document.getElementById("schoolHelper").innerHTML = "Required";
      return false;
    } else {
      document.getElementById("schoolHelper").innerHTML = `&nbsp`;
      return true;
    }
  };

  const checkDate = () => {
    const date = document.getElementById("date").value.trim();
    if (isRequired(date)) {
      document.getElementById("dateHelper").innerHTML = "Required";
      return false;
    } else {
      document.getElementById("dateHelper").innerHTML = `&nbsp`;
      return true;
    }
  };

  const checkCountry = () => {
    if (isNull(country)) {
      document.getElementById("countryHelper").innerHTML = "Required";
      return false;
    } else {
      document.getElementById("countryHelper").innerHTML = `&nbsp`;
      return true;
    }
  };

  const checkQualification = () => {
    if (isRequired(qualification)) {
      document.getElementById("qualificationHelper").innerHTML = "Required";
      return false;
    } else {
      document.getElementById("qualificationHelper").innerHTML = `&nbsp`;
      return true;
    }
  };

  const checkCourse = () => {
    const course = document.getElementById("course").value.trim();
    if (isRequired(course)) {
      document.getElementById("courseHelper").innerHTML = "Required";
      return false;
    } else {
      document.getElementById("courseHelper").innerHTML = `&nbsp`;
      return true;
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfoSession"));
    if (userSession) {
      setUserSession(user);
    }
  }, []);

  let addEducation = () => {
    let num = parseInt(currentSessionId);
    setEducationId(Date.now);
    console.log(num);

    let educationDetails = {
      eductionId: educationId,
      talentId: num,
      schhool: document.getElementById("school").value.trim(),
      date: document.getElementById("date").value,
      country: country,
      qualification: document.getElementById("qualification").value,
      course: document.getElementById("course").value.trim(),
      major: document.getElementById("major").value.trim(),
      description: document.getElementById("description").value.trim(),
    };

    setEducation([...education, educationDetails]);
    educationList.push(educationDetails);
    let educationInfo = JSON.stringify(educationList);
    localStorage.setItem("EducationData", educationInfo);
  };

  let submitEducation = (event) => {
    event.preventDefault();
    if (
      checkSchool() == true &&
      checkDate() == true &&
      checkCountry() == true &&
      checkQualification() == true &&
      checkCourse()
    ) {
      alert("success");
      addEducation();
    }
  };

  return (
    <>
      <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
        <Grid container>
          <Grid item xs={8} md={8}>
            <Typography variant="h4" fontWeight={500} color="textPrimary">
              <SchoolRoundedIcon /> Education
            </Typography>
          </Grid>
          <Grid item xs={4} md={4} textAlign="right">
            <Tooltip title="Add Education">
              <Button
                type="button"
                variant="outlined"
                startIcon={<AddCircleOutlineRoundedIcon />}
              >
                Add
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
        <Box>
          <Box
            onSubmit={submitEducation}
            component="form"
            noValidate
            autoComplete="off"
            sx={{ flexGrow: 1, mt: 4 }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Institute/University*"
                  id="school"
                  size="small"
                />
                <small id="schoolHelper" className="textHelper">
                  &nbsp;
                </small>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl>
                  <FormLabel>Year and Month Graduated*</FormLabel>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    style={{ fontSize: "1rem" }}
                  />
                  <small id="dateHelper" className="textHelper">
                    &nbsp;
                  </small>
                </FormControl>
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
              <Grid item xs={12} md={8}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    Qualification*
                  </InputLabel>
                  <Select
                    labelId="qualification"
                    id="qualification"
                    value={qualification}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value="" disabled>
                      Select Qualification
                    </MenuItem>
                    <MenuItem value={"Single"}>High School Diploma</MenuItem>
                    <MenuItem value={"Married"}>
                      Vocational Diploma / Short Course Certificated
                    </MenuItem>
                    <MenuItem value={"Widowed"}>
                      Bachelor's Degree/College Degree
                    </MenuItem>
                    <MenuItem value={"Widower"}>
                      Post graduate Diploma / Master's Degree
                    </MenuItem>
                    <MenuItem value={"Widower"}>
                      Professional License {"("}Passed Board/Bar/Professional
                      License Exam{")"}
                    </MenuItem>
                  </Select>
                  <small id="qualificationHelper" className="textHelper">
                    &nbsp;
                  </small>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Course / Field of Study*"
                  id="course"
                  size="small"
                />
                <small id="courseHelper" className="textHelper">
                  &nbsp;
                </small>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Major (Optional)"
                  id="major"
                  size="small"
                />
                <small id="majorHelper" className="textHelper">
                  &nbsp;
                </small>
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center" mt={2}>
              <Grid item xs={12} md={12}>
                <Typography variant="body1" color="primary">
                  Additional Information {"(Optional)"}
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <TextareaAutosize
                  id="description"
                  aria-label="minimum height"
                  minRows={10}
                  placeholder="Achievements / Certifications"
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
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default TalentEditEducation;
