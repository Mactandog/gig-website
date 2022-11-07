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
import React, { useState, useEffect } from "react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { useRef } from "react";
import SkillsList from "./SkillsList";

let skillsList = localStorage.getItem("skillsTalent")
  ? JSON.parse(localStorage.getItem("skillsTalent"))
  : [];

let userLoginSession = localStorage.getItem("userInfoSession")
  ? JSON.parse(localStorage.getItem("userInfoSession"))
  : [];

const TalentSkills = () => {
  //Age Picker
  const [proficiency, setProficiency] = React.useState("");
  const handleChange = (event) => {
    setProficiency(event.target.value);
  };

  const [skill, setSkill] = useState(skillsList);
  const [skillId, setSkillId] = useState(Date.now);
  const [userSession, setUserSession] = useState(userLoginSession);
  const skillRef = useRef("");
  const proficiencyRef = useRef("");
  const isRequired = (value) => (value == "" ? true : false);
  const currentSessionId = userLoginSession.map((user) => user.id);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfoSession"));
    if (userSession) {
      setUserSession(user);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("skillsTalent", JSON.stringify(skill));
  }, [skill]);

  const checkSkill = () => {
    const skills = document.getElementById("skills").value.trim();
    if (isRequired(skills)) {
      document.getElementById("skillsHelper").innerHTML = "Required";
      return false;
    } else {
      document.getElementById("skillsHelper").innerHTML = `&nbsp`;
      return true;
    }
  };

  const checkProficiency = () => {
    if (isRequired(proficiency)) {
      document.getElementById("proficiencyHelper").innerHTML = "Required";
      return false;
    } else {
      document.getElementById("proficiencyHelper").innerHTML = `&nbsp`;
      return true;
    }
  };

  const addSkill = () => {
    let num = parseInt(currentSessionId);
    setSkillId(Date.now);
    // setTalentId(num);

    let skillDetails = {
      skillId: skillId,
      talentId: num,
      skill: document.getElementById("skills").value.trim(),
      proficiency: proficiency,
    };

    setSkill([...skill, skillDetails]);
    skillsList.push(skillDetails);
    let skillsInfo = JSON.stringify(skillsList);
    localStorage.setItem("skillsTalent", skillsInfo);
  };

  let submitSkill = (event) => {
    event.preventDefault();
    if (checkSkill() === true && checkProficiency()) {
      addSkill();
      // alert("success");
      setProficiency("");
      document.forms[0].reset();
    }
  };

  let deleteSkill = (e) => {
    // e.preventDefault();
    let num = parseInt(e.target.id);
    // console.log(num);
    const remove = [...skill].filter((skill) => {
      return skill.skillId !== num;
    });

    setSkill(remove);
    alert("Skill deleted");
    console.log(remove);

    setTimeout(() => {
      window.location.reload(true);
    }, 500);
  };

  return (
    <>
      <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
        <Typography variant="h4" fontWeight={500} color="textPrimary">
          <PsychologyRoundedIcon /> Skills
        </Typography>
        <Box
          onSubmit={submitSkill}
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
              <small id="skillsHelper" className="textHelper">
                &nbsp;
              </small>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth size="small">
                <InputLabel id="proficiency">Proficiency</InputLabel>
                <Select
                  labelId="proficiency"
                  id="proficiency"
                  value={proficiency}
                  label="Proficiency"
                  onChange={handleChange}
                >
                  <MenuItem value={""} selected disabled>
                    Select Proficiency
                  </MenuItem>
                  <MenuItem value={"Advanced"}>Advanced</MenuItem>
                  <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                  <MenuItem value={"Beginner"}>Beginner</MenuItem>
                </Select>
              </FormControl>
              <small id="proficiencyHelper" className="textHelper">
                &nbsp;
              </small>
            </Grid>

            <Grid item xs={12} md={2} textAlign="center">
              <Button
                type="submit"
                variant="text"
                color="primary"
                startIcon={<AddCircleOutlineRoundedIcon />}
                disableRipple
              >
                Add Skill
              </Button>
            </Grid>
          </Grid>
        </Box>
        <SkillsList
          skillsList={skillsList}
          deleteSkill={deleteSkill}
          currentSessionId={currentSessionId}
        />
        {/* START MAPPING HERE */}
        {/* {skillsList
          .filter((skill) => {
            return skill.talentId == currentSessionId;
          })
          .map((skill) => (
            <Grid container my={2} alignItems="center" key={skill.skillId}>
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
                  {skill.proficiency}
                </Typography>
              </Grid>
              <Grid item xs={1} md={1}>
                <Button
                  type="button"
                  key={skill.skillId}
                  id={skill.skillId}
                  onClick={deleteSkill}
                  variant="text"
                  color="secondary"
                  startIcon={<DeleteForeverRoundedIcon />}
                ></Button>
              </Grid>
            </Grid>
          ))} */}
      </Paper>
    </>
  );
};

export default TalentSkills;
