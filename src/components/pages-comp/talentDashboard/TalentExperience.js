import {
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
import YearMonthPicker from "../../forms/MonthPicker";
import PositionLevelSelect from "../../forms/PositionLevelSelect";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";

const TalentExperience = () => {
  //Checkbox Present
  const [checkedPresent, setcheckedPresent] = React.useState(false);
  const handleChangePresent = (event) => {
    setcheckedPresent(event.target.checked);
  };

  //Show Add Experience Form
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
              <WorkHistoryRoundedIcon /> Work Experince
            </Typography>
          </Grid>
          <Grid item xs={4} md={4} textAlign="right">
            <Tooltip title="Add Experience">
              <Button
                id="add"
                type="button"
                disabled={showForm}
                variant="outlined"
                startIcon={<AddCircleOutlineRoundedIcon />}
                onClick={handleShowForm}
              >
                Add
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
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Position Title*"
                      id="position"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Company Name*"
                      id="company"
                      size="small"
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2} alignItems="center" mt={2}>
                  <Grid item xs={12} md={12}>
                    <Typography variant="body1" color="primary">
                      Work Duration*
                    </Typography>
                  </Grid>
                  <Grid item xs={5} md={3}>
                    <YearMonthPicker />
                  </Grid>
                  <Grid item xs={2} md={1} textAlign="center">
                    <Typography variant="body1" color="primary">
                      To
                    </Typography>
                  </Grid>
                  <Grid item xs={5} md={3}>
                    <YearMonthPicker />
                  </Grid>
                  <Grid item xs={5} md={3}>
                    <FormControl>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checkedPresent}
                            onChange={handleChangePresent}
                            name="present"
                            inputProps={{ "aria-label": "controlled" }}
                          />
                        }
                        label="Present"
                      />
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
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      label="Role*"
                      id="jobRole"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <CountrySelect />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <PositionLevelSelect />
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
        {/* WORK EXPERIENCE */}
        <Grid container my={2}>
          {/* Start mapping here */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
              April 2022 - Present
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h6" color="textPrimary">
              Amazon Virtual Assistant
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Ecomm Partners Group
            </Typography>
          </Grid>
          <Grid item xs={0} md={3}></Grid>
          <Grid item xs={12} md={9} sx={{ display: "flex" }}>
            <Grid container>
              <Grid item md={3}>
                <Typography variant="body2" color="textPrimary" mr={2}>
                  Specialization:
                </Typography>
              </Grid>
              <Grid item md={9}>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  color="textPrimary"
                >
                  Customer Service
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={0} md={3}></Grid>
          <Grid item xs={12} md={9} sx={{ display: "flex" }}>
            <Grid container>
              <Grid item md={3}>
                <Typography variant="body2" color="textPrimary" mr={2}>
                  Role:
                </Typography>
              </Grid>
              <Grid item md={9}>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  color="textPrimary"
                >
                  Customer Service- General
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={0} md={3}></Grid>
          <Grid item xs={12} md={9} sx={{ display: "flex" }}>
            <Grid container>
              <Grid item md={3}>
                <Typography variant="body2" color="textPrimary" mr={2}>
                  Position Level:
                </Typography>
              </Grid>
              <Grid item md={9}>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  color="textPrimary"
                >
                  Fresh Grad / {"<"} 1 Year Experienced Employee
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={0} md={3}></Grid>
          <Grid item xs={12} md={9} sx={{ display: "flex" }}>
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  fontWeight={500}
                  color="textPrimary"
                  mr={2}
                  mt={2}
                >
                  Responsible for managing and maintaining the Amazon Seller
                  Central.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* END OF WORK EXPERINCE  */}
        <Divider />
      </Paper>
    </>
  );
};

export default TalentExperience;
