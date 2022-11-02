import {
  Button,
  Divider,
  FormControl,
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
import React from "react";
import CountrySelect from "../../forms/CountrySelect";
import YearMonthPicker from "../../forms/MonthPicker";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

const EmployerEducation = () => {
  //Qualification Picker
  const [qualification, setqualification] = React.useState("");
  const handleChange = (event) => {
    setqualification(event.target.value);
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
              <SchoolRoundedIcon /> Education
            </Typography>
          </Grid>
          <Grid item xs={4} md={4} textAlign="right">
            <Tooltip title="Add Education">
              <Button
                type="button"
                variant="outlined"
                disabled={showForm}
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
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Institute/University*"
                      id="school"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <YearMonthPicker />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <CountrySelect />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-simple-select-label">
                        Qualification*
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={qualification}
                        label="Status"
                        onChange={handleChange}
                      >
                        <MenuItem value="" disabled>
                          Select Qualification
                        </MenuItem>
                        <MenuItem value={"Single"}>
                          High School Diploma
                        </MenuItem>
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
                          Professional License {"("}Passed
                          Board/Bar/Professional License Exam{")"}
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Course / Field of Study*"
                      id="course"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Major (Optional)"
                      id="major"
                      size="small"
                    />
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
        <Box ref={formContainer} mb={8} />

        {/* ================ EDUCATION ============= */}

        <Grid container my={2}>
          {/* START MAPPING HERE */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
              2017
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h6" color="textPrimary">
              Holy Child College of Information Technology, Inc.
            </Typography>
            <Typography variant="body1" fontWeight={500} color="textPrimary">
              Bachelor's Degree in Information Technology
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Major in Website Development
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Philippines
            </Typography>
            <Typography variant="body2" color="textPrimary">
              PSITE-PSITS Awardee of the year, Best in Capstone, Graphic Artist
              of the Year, Programmer of the year,
            </Typography>
          </Grid>
        </Grid>
        {/* END OF EDUCATION */}
        <Divider />
      </Paper>
    </>
  );
};

export default EmployerEducation;
