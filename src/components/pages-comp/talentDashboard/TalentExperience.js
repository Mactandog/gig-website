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
import { Link } from "react-router-dom";

const TalentExperience = () => {
  //Checkbox Present
  const [checkedPresent, setcheckedPresent] = React.useState(false);
  const handleChangePresent = (event) => {
    setcheckedPresent(event.target.checked);
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
            <Link to="edit">
              <Tooltip title="Add Experience">
                <Button
                  id="add"
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
