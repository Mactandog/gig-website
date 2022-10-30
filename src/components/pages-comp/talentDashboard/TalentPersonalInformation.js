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
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CountrySelect from "../../forms/CountrySelect";
import IdSelect from "../../forms/IdSelect";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";

const TalentPersonalInformation = () => {
  //Date Picker
  const [value, setValue] = React.useState(null);

  //Status Picker
  const [status, setStatus] = React.useState("");
  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  //Show Edit Personal Info Form
  const [showForm, setShowForm] = React.useState(false);
  const formContainer = React.useRef(null);
  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
        <Grid container>
          <Grid item xs={8} md={8}>
            <Typography variant="h4" fontWeight={500} color="textPrimary">
              <AccountBoxRoundedIcon /> Personal Information
            </Typography>
          </Grid>
          <Grid item xs={4} md={4} textAlign="right">
            <Tooltip title="Edit Personal Information">
              <Button
                type="button"
                variant="outlined"
                disabled={showForm}
                startIcon={<EditRoundedIcon />}
                onClick={handleShowForm}
              >
                Edit
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
        <Box>
          {showForm ? (
            <Portal container={formContainer.current}>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{ flexGrow: 1, mt: 4 }}
              >
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      label="First Name*"
                      id="firstName"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      name="middleName"
                      label="Middle Name"
                      id="middleName"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      label="Last Name*"
                      id="lastName"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        disableFuture
                        name="MuiDatePicker"
                        label="Date of Birth*"
                        openTo="year"
                        views={["year", "month", "day"]}
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <TextField fullWidth label="Age*" id="Age" size="small" />
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-simple-select-label">
                        Status*
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Status*"
                        onChange={handleChange}
                      >
                        <MenuItem value={"Single"}>Single</MenuItem>
                        <MenuItem value={"Married"}>Married</MenuItem>
                        <MenuItem value={"Widowed"}>Widowed</MenuItem>
                        <MenuItem value={"Widower"}>Widower</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <FormControl>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Gender*
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue=""
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      label="Email*"
                      id="email"
                      placeholder="johndoe123@gmail.com"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      label="Phone Number*"
                      id="phone"
                      size="small"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} mt={4} alignItems="center">
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      label="Nationality*"
                      id="nationality"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <CountrySelect />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      label="State/Region*"
                      id="stateRegion"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Address*"
                      id="address"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField fullWidth label="City*" id="city" size="small" />
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <TextField
                      fullWidth
                      label="Postal Code*"
                      id="postalCode"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <IdSelect />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      label="Identification No.*"
                      id="identificationNo"
                      size="small"
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
                      onClick={handleShowForm}
                    >
                      Save
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Button
                      variant="contained"
                      color="error"
                      fullWidth
                      onClick={handleShowForm}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Portal>
          ) : null}
        </Box>
        <Box ref={formContainer} />
        <Grid container my={2} alignItems="center">
          {/* START MAPPING HERE */}
          <Grid item xs={3} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
              Full Name
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h6" fontWeight={500} color="textPrimary">
              Ryan Mark Tandog Eyana
            </Typography>
          </Grid>
          <Grid item xs={3} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
              Date of Birth
            </Typography>
          </Grid>
          <Grid item xs={9} md={9}>
            <Typography variant="h6" fontWeight={500} color="textPrimary">
              March 22, 1996
            </Typography>
          </Grid>
          <Grid item xs={3} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
              Age
            </Typography>
          </Grid>
          <Grid item xs={9} md={9}>
            <Typography variant="h6" fontWeight={500} color="textPrimary">
              26
            </Typography>
          </Grid>
          <Grid item xs={3} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
              Status
            </Typography>
          </Grid>
          <Grid item xs={9} md={9}>
            <Typography variant="h6" fontWeight={500} color="textPrimary">
              Single
            </Typography>
          </Grid>
          <Grid item xs={3} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
              Gender
            </Typography>
          </Grid>
          <Grid item xs={9} md={9}>
            <Typography variant="h6" fontWeight={500} color="textPrimary">
              Male
            </Typography>
          </Grid>
          <Grid item xs={3} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
              Age
            </Typography>
          </Grid>
          <Grid item xs={9} md={9}>
            <Typography variant="h6" fontWeight={500} color="textPrimary">
              26 years old
            </Typography>
          </Grid>
          <Grid item xs={3} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
              Email
            </Typography>
          </Grid>
          <Grid item xs={9} md={9}>
            <Typography variant="h6" fontWeight={500} color="textPrimary">
              ryan123@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={3} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
              Phone Number
            </Typography>
          </Grid>
          <Grid item xs={9} md={9}>
            <Typography variant="h6" fontWeight={500} color="textPrimary">
              +63 912345678
            </Typography>
          </Grid>
          <Grid item xs={3} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
              Nationality
            </Typography>
          </Grid>
          <Grid item xs={9} md={9}>
            <Typography variant="h6" fontWeight={500} color="textPrimary">
              Filipino
            </Typography>
          </Grid>
          <Grid item xs={3} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
              Country
            </Typography>
          </Grid>
          <Grid item xs={9} md={9}>
            <Typography variant="h6" fontWeight={500} color="textPrimary">
              Philippines
            </Typography>
          </Grid>
          <Grid item xs={3} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
              State/Region
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h6" fontWeight={500} color="textPrimary">
              South Cotabato
            </Typography>
          </Grid>
          <Grid item xs={3} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
              Address
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h6" fontWeight={500} color="textPrimary">
              Causing Subd., Centrala
            </Typography>
          </Grid>
          <Grid item xs={3} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
              City/Municipality
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h6" fontWeight={500} color="textPrimary">
              Surallah
            </Typography>
          </Grid>
          <Grid item xs={3} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
              Postal Code
            </Typography>
          </Grid>
          <Grid item xs={9} md={9}>
            <Typography variant="h6" fontWeight={500} color="textPrimary">
              9512
            </Typography>
          </Grid>
          <Grid item xs={3} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
              TIN
            </Typography>
          </Grid>
          <Grid item xs={9} md={9}>
            <Typography variant="h6" fontWeight={500} color="textPrimary">
              011118847
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default TalentPersonalInformation;
