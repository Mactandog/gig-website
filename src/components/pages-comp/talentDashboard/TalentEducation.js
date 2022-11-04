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
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

let educationList = localStorage.getItem("EducationData")
  ? JSON.parse(localStorage.getItem("EducationData"))
  : [];

let userLoginSession = localStorage.getItem("userInfoSession")
  ? JSON.parse(localStorage.getItem("userInfoSession"))
  : [];

const TalentEducation = () => {
  //Qualification Picker
  const [qualification, setqualification] = React.useState("");
  const handleChange = (event) => {
    setqualification(event.target.value);
  };

  const [userSession, setUserSession] = useState(userLoginSession);
  const currentSessionId = userLoginSession.map((user) => user.id);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfoSession"));
    if (userSession) {
      setUserSession(user);
    }
  }, []);

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
            <Link to="add">
              <Tooltip title="Add Education">
                <Button
                  type="button"
                  variant="outlined"
                  startIcon={<AddCircleOutlineRoundedIcon />}
                >
                  Add
                </Button>
              </Tooltip>
            </Link>
          </Grid>
        </Grid>

        {/* ================ EDUCATION ============= */}

        {/* START MAPPING HERE */}
        {educationList
          .filter((education) => {
            console.log(education.talentId);
            return education.talentId == currentSessionId;
          })
          .map((education, index) => (
            <Grid container my={2} key={index}>
              <Grid item xs={12} md={3}>
                <Typography variant="subtitle2" color="textPrimary">
                  {education.date}
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography variant="h6" color="textPrimary">
                  {education.school}
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  color="textPrimary"
                >
                  {education.course}
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  {education.major}
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  {education.country}
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  {education.description}
                </Typography>
              </Grid>
            </Grid>
          ))}

        {/* END OF EDUCATION */}
        <Divider />
      </Paper>
    </>
  );
};

export default TalentEducation;
