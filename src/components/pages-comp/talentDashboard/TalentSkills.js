import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

const TalentSkills = () => {
  //Age Picker
  const [proficiency, setProficiency] = React.useState("");
  const handleChange = (event) => {
    setProficiency(event.target.value);
  };

  return (
    <>
      <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
        <Typography variant="h4" fontWeight={500} color="textPrimary">
          <PsychologyRoundedIcon /> Skills
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ flexGrow: 1, mt: 4 }}
        >
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Skills" id="skills" size="small" />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">
                  Proficiency
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={proficiency}
                  label="Proficiency"
                  onChange={handleChange}
                >
                  <MenuItem value={"Advanced"}>Advanced</MenuItem>
                  <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                  <MenuItem value={"Beginner"}>Beginner</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={2} textAlign="center">
              <Button
                variant="text"
                color="primary"
                startIcon={<AddCircleOutlineRoundedIcon />}
                disableRipple
              >
                Add Skill
              </Button>
            </Grid>
          </Grid>

          {/* START MAPPING HERE */}
          {[
            { skill: "Web Design", level: "Intermediate" },
            { skill: "JavaScript", level: "Basic" },
            { skill: "HTML", level: "Advanced" },
            { skill: "CSS", level: "Advanced" },
          ].map((skill, index) => {
            return (
              <Grid container my={2} alignItems="center" key={index}>
                <Grid item xs={8} md={8}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={500}
                    color="textPrimary"
                  >
                    {skill.skill}
                  </Typography>
                </Grid>
                <Grid item xs={3} md={3}>
                  <Typography
                    variant="subtitle2"
                    fontWeight={400}
                    color="textPrimary"
                  >
                    {skill.level}
                  </Typography>
                </Grid>
                <Grid item xs={1} md={1}>
                  <IconButton aria-label="delete" size="small" color="primary">
                    <DeleteForeverRoundedIcon fontSize="inherit" />
                  </IconButton>
                </Grid>
              </Grid>
            );
          })}
        </Box>
      </Paper>
    </>
  );
};

export default TalentSkills;
