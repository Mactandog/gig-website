import {
    Autocomplete,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Tooltip,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
  import React, { useState, useEffect } from "react";
  import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
  import EditRoundedIcon from "@mui/icons-material/EditRounded";
  import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
  import Countries from "../../data/Countries";
  import { Link } from "react-router-dom";
  // let form = document.querySelector("#personalInfo");
  
  let talentPersonalInfo = localStorage.getItem("personalInfoDetails")
    ? JSON.parse(localStorage.getItem("personalInfoDetails"))
    : [];
  
  const TalentEditPersonalInfo = ({}) => {
    //////////////////////////////////////////////////
    //Date Picker
    let [birthDateValue, setBirthDateValue] = React.useState(null);
    let selectDate = (newValue) => {
      // setBirthDateValue(newValue.$d);
      setBirthDateValue(newValue);
    };
  
    let formatDateDay = () => {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      console.log(birthDateValue);
      return new Date(birthDateValue).toLocaleDateString("en-us", options);
    };
  
    //Status Picker
    const [civilStatus, setCivilStatus] = React.useState("");
    const handleSelectStatus = (event) => {
      setCivilStatus(event.target.value);
    };
  
    // Gender Radio button
    const [gender, setGender] = React.useState("");
    const handleSelectGender = (event) => {
      setGender(event.target.value);
    };
  
    // Select ID
    const [identification, setIdentification] = React.useState("");
    const selectIdentification = (event) => {
      setIdentification(event.target.value);
    };
  
    //Select Country
    const [country, setCountry] = useState(null);
    const selectCountry = (event, value) => setCountry(value.label);
  
    //Show Edit Personal Info Form
    const [showForm, setShowForm] = React.useState(false);
    const formContainer = React.useRef(null);
    const handleShowForm = () => {
      // setShowForm(!showForm);
      editPersonalInfo();
    };
  
    // Add Personal Info
    const [talentInfo, setTalentInfo] = useState(talentPersonalInfo);
    const [talentId, setTalentId] = useState(Date.now());
    //////////////////////////////////////////////////////////
  
    
    // =================================================== //
    // ============= START OF VALIDATIONS ================ //
    // =================================================== //
  
    const isRequired = (value) => (value == "" ? true : false);
    const isNull = (value) => (value == null ? true : false);
    const isBetween = (length, min, max) =>
      length >= min && length <= max ? true : false;
    const isEmailValid = (email) => {
      let emailPattern = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      return emailPattern.test(email);
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
  
    const checkMiddleName = () => {
      const middleName = document.getElementById("middleName").value.trim();
      if (!isLettersOnly(middleName)) {
        document.getElementById("middleNameHelper").innerHTML =
          "Middle name must not contain numbers";
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
  
    const checkBirthDate = () => {
      if (isNull(birthDateValue)) {
        document.getElementById("birthDateHelper").innerHTML = "Required";
        return false;
      } else {
        document.getElementById("birthDateHelper").innerHTML = `&nbsp`;
        return true;
      }
    };
  
    const checkAge = () => {
      const age = document.getElementById("age").value.trim();
      const min = 1;
      const max = 3;
      if (isRequired(age)) {
        document.getElementById("ageHelper").innerHTML = "Required";
        return false;
      } else if (!isNumbersOnly(age)) {
        document.getElementById("ageHelper").innerHTML =
          "Only numbers are allowed";
        return false;
      } else if (!isBetween(age.length, min, max)) {
        document.getElementById("ageHelper").innerHTML =
          "Age can not be longer than 3 characters.";
        return false;
      } else {
        document.getElementById("ageHelper").innerHTML = `&nbsp`;
        return true;
      }
    };
  
    const checkStatus = () => {
      if (isRequired(civilStatus)) {
        document.getElementById("statusHelper").innerHTML = "Required";
        return false;
      } else {
        document.getElementById("statusHelper").innerHTML = `&nbsp`;
        return true;
      }
    };
  
    const checkGender = () => {
      if (isRequired(gender)) {
        document.getElementById("genderHelper").innerHTML = "Required";
        return false;
      } else {
        document.getElementById("genderHelper").innerHTML = `&nbsp`;
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
  
    const checkPhoneNo = () => {
      const phone = document.getElementById("phoneNo").value.trim();
      const min = 11;
      const max = 15;
      if (isRequired(phone)) {
        document.getElementById("phoneNoHelper").innerHTML = "Required";
        return false;
      } else if (!isNumbersOnly(phone)) {
        document.getElementById("phoneNoHelper").innerHTML =
          "Only numbers are allowed";
        return false;
      } else if (!isBetween(phone.length, min, max)) {
        document.getElementById("phoneNoHelper").innerHTML =
          "Phone number must be 11-15 characters long.";
        return false;
      } else {
        document.getElementById("phoneNoHelper").innerHTML = `&nbsp`;
        return true;
      }
    };
  
    const checkNationality = () => {
      const nationality = document.getElementById("nationality").value.trim();
      if (isRequired(nationality)) {
        document.getElementById("nationalityHelper").innerHTML = "Required";
        return false;
      } else if (!isLettersOnly(nationality)) {
        document.getElementById("nationalityHelper").innerHTML =
          "Must be letters only";
        return false;
      } else {
        document.getElementById("nationalityHelper").innerHTML = `&nbsp`;
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
  
    const checkState = () => {
      const state = document.getElementById("stateRegion").value.trim();
      if (isRequired(state)) {
        document.getElementById("stateHelper").innerHTML = "Required";
        return false;
      } else if (!isLettersOnly(state)) {
        document.getElementById("stateHelper").innerHTML = "Must be letters only";
        return false;
      } else {
        document.getElementById("stateHelper").innerHTML = `&nbsp`;
        return true;
      }
    };
  
    const checkAddress = () => {
      const address = document.getElementById("address").value.trim();
      if (isRequired(address)) {
        document.getElementById("addressHelper").innerHTML = "Required";
        return false;
      } else {
        document.getElementById("addressHelper").innerHTML = `&nbsp`;
        return true;
      }
    };
  
    const checkCity = () => {
      const city = document.getElementById("city").value.trim();
      if (isRequired(city)) {
        document.getElementById("cityHelper").innerHTML = "Required";
        return false;
      } else if (!isLettersOnly(city)) {
        document.getElementById("cityHelper").innerHTML = "Must be letters only";
        return false;
      } else {
        document.getElementById("cityHelper").innerHTML = `&nbsp`;
        return true;
      }
    };
  
    const checkPostal = () => {
      const postal = document.getElementById("postalCode").value.trim();
      const min = 4;
      const max = 4;
      if (isRequired(postal)) {
        document.getElementById("postalHelper").innerHTML = "Required";
        return false;
      } else if (!isNumbersOnly(postal)) {
        document.getElementById("postalHelper").innerHTML =
          "Only numbers are allowed";
        return false;
      } else if (!isBetween(postal.length, min, max)) {
        document.getElementById("postalHelper").innerHTML =
          "Postal Code must be 4 characters long";
        return false;
      } else {
        document.getElementById("postalHelper").innerHTML = `&nbsp`;
        return true;
      }
    };
  
    const checkIdentification = () => {
      if (isRequired(identification)) {
        document.getElementById("identificationHelper").innerHTML = "Required";
        return false;
      } else {
        document.getElementById("identificationHelper").innerHTML = `&nbsp`;
        return true;
      }
    };
  
    const checkIdentificationNo = () => {
      const idNo = document.getElementById("identificationNo").value.trim();
      const min = 9;
      const max = 15;
      if (isRequired(idNo)) {
        document.getElementById("identificationNoHelper").innerHTML = "Required";
        return false;
      } else if (!isNumbersOnly(idNo)) {
        document.getElementById("identificationNoHelper").innerHTML =
          "Only numbers are allowed";
        return false;
      } else if (!isBetween(idNo.length, min, max)) {
        document.getElementById("identificationNoHelper").innerHTML =
          "ID number must be 9-15 characters long.";
        return false;
      } else {
        document.getElementById("identificationNoHelper").innerHTML = `&nbsp`;
        return true;
      }
    };
  
    // =================================================== //
    // ==================END OF VALIDATIONS ============== //
    // =================================================== //
  
    // =================================================== //
    // ========== START OF  ADD PERSONAL INFO ============ //
    // =================================================== //
  
    let addPersonalInfo = () => {
      // e.preventDefault();
      setTalentId(Date.now);
  
      let personalInfoDetails = {
        talentId: talentId,
        firstName: document.getElementById("firstName").value.trim(),
        middleName: document.getElementById("middleName").value.trim(),
        lastName: document.getElementById("lastName").value.trim(),
        birthDate: birthDateValue,
        age: document.getElementById("age").value.trim(),
        status: civilStatus,
        gender: gender,
        email: document.getElementById("email").value.trim(),
        phoneNo: document.getElementById("phoneNo").value.trim(),
        nationality: document.getElementById("nationality").value.trim(),
        country: country,
        state: document.getElementById("stateRegion").value.trim(),
        address: document.getElementById("address").value.trim(),
        city: document.getElementById("city").value.trim(),
        postal: document.getElementById("postalCode").value.trim(),
        identification: identification,
        identificationNo: document
          .getElementById("identificationNo")
          .value.trim(),
      };
  
      setTalentInfo([...talentInfo, personalInfoDetails]);
  
      talentPersonalInfo.push(personalInfoDetails);
      let talentPersonalInfoList = JSON.stringify(talentPersonalInfo);
      localStorage.setItem("personalInfoDetails", talentPersonalInfoList);
      console.log(talentPersonalInfo);
      document.forms[0].reset();
    };
  
    let submitPersonalInfo = (event) => {
      event.preventDefault();
      if (
        checkFirstName() === true &&
        checkMiddleName() === true &&
        checkLastName() === true &&
        checkBirthDate() === true &&
        checkAge() === true &&
        checkStatus() === true &&
        checkGender() === true &&
        checkEmail() === true &&
        checkPhoneNo() === true &&
        checkNationality() === true &&
        checkCountry() === true &&
        checkState() === true &&
        checkAddress() === true &&
        checkCity() === true &&
        checkPostal() === true &&
        checkIdentification() === true &&
        checkIdentificationNo()
      ) {
        addPersonalInfo();
        alert("success");
      }
    };
  
    // =================================================== //
    // ============ END OF ADD PERSONAL INFO ============= //
    // =================================================== //
  
    // =================================================== //
    // =============== POPULATE PERSONAL INO ============= //
    // =================================================== //
  
    useEffect(() => {
      localStorage.setItem("personalInfoDetails", JSON.stringify(talentInfo));
    }, [talentInfo]);
  
    let editPersonalInfo = () => {
      // e.preventDefault();
      // let num = parseInt(e.target.id);
      let num = 1667309736925;
  
      talentInfo
        .filter((talent) => {
          console.log(talent.talentId === num ? true : false);
          console.log(num);
          return talent.talentId === num;
        })
        .map((talent) => {
          setTalentId(talent.talentId);
  
          return (
            (document.getElementById("firstName").value = talent.firstName),
            (document.getElementById("middleName").value = talent.middleName),
            (document.getElementById("lastName").value = talent.lastName),
            (document.getElementById("birthDate").value = talent.birthDate),
            (document.getElementById("age").value = talent.age),
            (document.getElementById("civilStatus").value = talent.status),
            (document.getElementById("gender").value = talent.gender),
            (document.getElementById("email").value = talent.email),
            (document.getElementById("phoneNo").value = talent.phoneNo),
            (document.getElementById("nationality").value = talent.nationality),
            (document.getElementById("country").value = talent.country),
            (document.getElementById("stateRegion").value = talent.state),
            (document.getElementById("address").value = talent.address),
            (document.getElementById("city").value = talent.city),
            (document.getElementById("postalCode").value = talent.postal),
            (document.getElementById("identification").value =
              talent.identification),
            (document.getElementById("identificationNo").value =
              talent.identificationNo)
          );
        });
    };
    //   editPersonalInfo();
    return (
      <>
        <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
          <Grid container>
            <Grid item xs={8} md={8}>
              <Typography variant="h4" fontWeight={500} color="textPrimary">
                <AccountBoxRoundedIcon /> Personal Information
              </Typography>
            </Grid>
          </Grid>
  
          {/* ====================== FORM ======================*/}
          <Box
            component="form"
            // noValidate
            autoComplete="off"
            sx={{ flexGrow: 1, mt: 4 }}
            id="personalInfo"
            onSubmit={submitPersonalInfo}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="First Name*"
                  id="firstName"
                  size="small"
                  type="text"
                  InputLabelProps={{ shrink: true }}
                />
                <small id="firstNameHelper" className="textHelper">
                  &nbsp;
                </small>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  name="middleName"
                  label="Middle Name"
                  id="middleName"
                  size="small"
                  InputLabelProps={{ shrink: true }}
                />
                <small id="middleNameHelper" className="textHelper">
                  &nbsp;
                </small>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Last Name*"
                  id="lastName"
                  size="small"
                  InputLabelProps={{ shrink: true }}
                />
                <small id="lastNameHelper" className="textHelper">
                  &nbsp;
                </small>
              </Grid>
              <Grid item xs={6} md={4}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    id="birthDate"
                    label="Date of Birth"
                    value={birthDateValue}
                    onChange={selectDate}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <br></br>
                  <small id="birthDateHelper" className="textHelper">
                    &nbsp;
                  </small>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6} md={4}>
                <TextField
                  fullWidth
                  label="Age*"
                  id="age"
                  size="small"
                  InputLabelProps={{ shrink: true }}
                />
                <small id="ageHelper" className="textHelper">
                  &nbsp;
                </small>
              </Grid>
              <Grid item xs={6} md={4}>
                <FormControl fullWidth size="small">
                  <InputLabel id="status" shrink>
                    Status*
                  </InputLabel>
                  <Select
                    labelId="status"
                    id="civilStatus"
                    value={civilStatus}
                    label="Status*"
                    onChange={handleSelectStatus}
                  >
                    <MenuItem value={"Single"}>Single</MenuItem>
                    <MenuItem value={"Married"}>Married</MenuItem>
                    <MenuItem value={"Widowed"}>Widowed</MenuItem>
                    <MenuItem value={"Widower"}>Widower</MenuItem>
                  </Select>
                </FormControl>
                <small id="statusHelper" className="textHelper">
                  &nbsp;
                </small>
              </Grid>
              <Grid item xs={6} md={4}>
                <FormControl>
                  <FormLabel id="gender">Gender*</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="gender"
                    id="gender"
                    value={gender}
                    onChange={handleSelectGender}
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="Male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                  <small id="genderHelper" className="textHelper">
                    &nbsp;
                  </small>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Email*"
                  id="email"
                  placeholder="johndoe123@gmail.com"
                  size="small"
                  InputLabelProps={{ shrink: true }}
                />
                <small id="emailHelper" className="textHelper">
                  &nbsp;
                </small>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Phone Number*"
                  id="phoneNo"
                  size="small"
                  InputLabelProps={{ shrink: true }}
                />
                <small id="phoneNoHelper" className="textHelper">
                  &nbsp;
                </small>
              </Grid>
            </Grid>
            <Grid container spacing={2} mt={4} alignItems="center">
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Nationality*"
                  id="nationality"
                  size="small"
                  InputLabelProps={{ shrink: true }}
                />
                <small id="nationalityHelper" className="textHelper">
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
                <TextField
                  fullWidth
                  label="State/Region*"
                  id="stateRegion"
                  size="small"
                  InputLabelProps={{ shrink: true }}
                />
                <small id="stateHelper" className="textHelper">
                  &nbsp;
                </small>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Address*"
                  id="address"
                  size="small"
                  InputLabelProps={{ shrink: true }}
                />
                <small id="addressHelper" className="textHelper">
                  &nbsp;
                </small>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="City*"
                  id="city"
                  size="small"
                  InputLabelProps={{ shrink: true }}
                />
                <small id="cityHelper" className="textHelper">
                  &nbsp;
                </small>
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  fullWidth
                  label="Postal Code*"
                  id="postalCode"
                  size="small"
                  InputLabelProps={{ shrink: true }}
                />
                <small id="postalHelper" className="textHelper">
                  &nbsp;
                </small>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth size="small">
                  <InputLabel id="Identification" shrink>
                    Identification*
                  </InputLabel>
                  <Select
                    labelId="Identification"
                    id="idNo"
                    value={identification}
                    label="Identification*"
                    onChange={selectIdentification}
                    InputLabelProps={{ shrink: true }}
                  >
                    <MenuItem value="" disabled>
                      Select Identification
                    </MenuItem>
                    <MenuItem value="Social Card">Social Card</MenuItem>
                    <MenuItem value="Tax Card">Tax Card</MenuItem>
                    <MenuItem value="Driver's License">Driver's License</MenuItem>
                    <MenuItem value="Passport">Passport</MenuItem>
                    <MenuItem value="Professional License">
                      Professional License
                    </MenuItem>
                  </Select>
                </FormControl>
                <small id="identificationHelper" className="textHelper">
                  &nbsp;
                </small>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Identification No.*"
                  id="identificationNo"
                  size="small"
                  InputLabelProps={{ shrink: true }}
                />
                <small id="identificationNoHelper" className="textHelper">
                  &nbsp;
                </small>
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
                  // onClick={submitForm}
                  // onClick={submitPersonalInfo}
                >
                  Save
                </Button>
              </Grid>
              <Grid item xs={12} md={2}>
                <Link to="/talent/profile/personal-info">
                  <Button
                    variant="contained"
                    color="error"
                    fullWidth
                    // onClick={handleShowForm}
                  >
                    Cancel
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </>
    );
  };
  
  export default TalentEditPersonalInfo;
  