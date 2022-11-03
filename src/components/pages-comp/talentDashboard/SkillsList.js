import { Button, Grid, Typography } from "@mui/material";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import React from "react";

const SkillsList = ({ skillsList, deleteSkill, currentSessionId }) => {
  return (
    <div>
      {skillsList
        .filter((skill) => {
          console.log(skill.skillId);
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
                id={skill.skillId}
                onClick={deleteSkill}
                variant="text"
                color="secondary"
                startIcon={<DeleteForeverRoundedIcon />}
              ></Button>
            </Grid>
          </Grid>
        ))}
    </div>
  );
};

export default SkillsList;
