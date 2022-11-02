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

const TalentEducation = () => {
  //Qualification Picker
  const [qualification, setqualification] = React.useState("");
  const handleChange = (event) => {
    setqualification(event.target.value);
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

export default TalentEducation;
