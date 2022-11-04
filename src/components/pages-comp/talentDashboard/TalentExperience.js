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
import React, { useState } from "react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import { Link } from "react-router-dom";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

let workExperienceList = localStorage.getItem("WorkExperienceDetails")
  ? JSON.parse(localStorage.getItem("WorkExperienceDetails"))
  : [];

let userLoginSession = localStorage.getItem("userInfoSession")
  ? JSON.parse(localStorage.getItem("userInfoSession"))
  : [];

const TalentExperience = () => {
  //Checkbox Present
  const [checkedPresent, setcheckedPresent] = React.useState(false);
  const handleChangePresent = (event) => {
    setcheckedPresent(event.target.checked);
  };

  const [work, setWork] = useState(workExperienceList);
  const currentSessionId = userLoginSession.map((user) => user.id);

  let deleteWork = (e) => {
    e.preventDefault();
    let num = parseInt(e.target.id);
    // console.log(num);
    const remove = workExperienceList.filter((work) => {
      return work.workId !== num;
    });

    setWork(remove);
    alert("Skill deleted");
    console.log(remove);

    setTimeout(() => {
      window.location.reload(true);
    }, 500);
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

        {/* Start mapping here */}
        {workExperienceList
          .filter((work) => {
            console.log(work.talentId);
            return work.talentId == currentSessionId;
          })
          .map((work) => (
            <>
              <Grid container my={2} key={work.workId}>
                <Grid item xs={12} md={12} textAlign="right">
                  <Button
                    id={work.workId}
                    type="button"
                    onClick={deleteWork}
                    variant="text"
                    color="secondary"
                    startIcon={<EditRoundedIcon />}
                    disableRipple
                  ></Button>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="subtitle2" color="textPrimary">
                    {work.startDate} - {work.endDate}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <Typography variant="h6" color="textPrimary">
                    {work.position}
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    {work.company}
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
                        {work.specialization}
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
                        {work.role}
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
                        {work.positionLevel}
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
                        {work.jobDescription}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Divider />
            </>
          ))}

        {/* END OF WORK EXPERINCE  */}
      </Paper>
    </>
  );
};

export default TalentExperience;
