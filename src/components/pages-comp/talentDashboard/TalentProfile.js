import {
  Avatar,
  Divider,
  Grid,
  ListItem,
  ListItemAvatar,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import profilePic from "../../../assets/media/images/login1.png";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import TalentExperience from "./TalentExperience";

let talentPersonalInfo = localStorage.getItem("personalInfoDetails")
  ? JSON.parse(localStorage.getItem("personalInfoDetails"))
  : [];

let educationList = localStorage.getItem("EducationData")
  ? JSON.parse(localStorage.getItem("EducationData"))
  : [];

let skillsList = localStorage.getItem("skillsTalent")
  ? JSON.parse(localStorage.getItem("skillsTalent"))
  : [];

let workExperienceList = localStorage.getItem("WorkExperienceDetails")
  ? JSON.parse(localStorage.getItem("WorkExperienceDetails"))
  : [];

let userLoginSession = localStorage.getItem("userInfoSession")
  ? JSON.parse(localStorage.getItem("userInfoSession"))
  : [];

const TalentProfile = () => {
  const [userSession, setUserSession] = useState(userLoginSession);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfoSession"));
    if (userSession) {
      setUserSession(user);
    }
  }, []);

  const currentSessionId = userLoginSession.map((user) => user.id);

  return (
    <>
      <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
        <Grid container m={2}>
          <Grid item xs={12} md={2}>
            <ListItem sx={{ width: "100%" }}>
              <ListItemAvatar>
                <Avatar
                  alt="User First Name"
                  variant="square"
                  src={profilePic}
                  sx={{ width: 100, height: 100, mr: 4 }}
                />
              </ListItemAvatar>
            </ListItem>
          </Grid>
          {talentPersonalInfo
            .filter((talent) => {
              return talent.talentId == currentSessionId;
            })
            .map((talent) => (
              <Grid item xs={12} md={10} key={talent.talentId}>
                <Typography variant="h4" fontWeight={500} color="textPrimary">
                  {talent.firstName} {talent.middleName} {talent.lastName}
                </Typography>

                <Typography variant="body2" color="textPrimary" mt={4}>
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <LocalPhoneRoundedIcon sx={{ width: 15, mr: 1, ml: 2 }} />
                      {talent.phoneNo}
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <EmailRoundedIcon sx={{ width: 15, mr: 1, ml: 2 }} />{" "}
                      {talent.email}
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <LocationOnRoundedIcon sx={{ width: 15, mr: 1, ml: 2 }} />
                      {talent.address}
                    </Typography>
                  </Stack>
                </Typography>
              </Grid>
            ))}
        </Grid>
        <Divider />
        <Grid item xs={12} mt={2}>
          <Typography
            variant="h6"
            color="textPrimary"
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              mb: 2,
            }}
          >
            <WorkHistoryRoundedIcon sx={{ mr: 1 }} /> Experience
          </Typography>
        </Grid>

        {/* ============== WORK EXPERIENCE ================== */}
        {workExperienceList
          .filter((work) => {
            console.log(work.talentId);
            return work.talentId == currentSessionId;
          })
          .map((work) => (
            <>
              <Grid container my={2} key={work.talentId}>
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

        {/* ================ EDUCATION ============= */}
        <Grid item xs={12} mt={2}>
          <Typography
            variant="h6"
            color="textPrimary"
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              mb: 2,
            }}
          >
            <SchoolRoundedIcon sx={{ mr: 1 }} /> Education
          </Typography>
        </Grid>
        {educationList
          .filter((education) => {
            console.log(education.talentId);
            return education.talentId == currentSessionId;
          })
          .map((education) => (
            <Grid container my={2} key={education.educationId}>
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
        <Divider />
        {/* ================ SKILLS ============= */}
        <Grid item xs={12} mt={2}>
          <Typography
            variant="h6"
            color="textPrimary"
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              mb: 2,
            }}
          >
            <PsychologyRoundedIcon sx={{ mr: 1 }} /> Skills
          </Typography>
        </Grid>
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
            </Grid>
          ))}
        <Divider />
        {/* ================ PERSONAL INFORMATION ============= */}
        <Grid item xs={12} mt={2}>
          <Typography
            variant="h6"
            color="textPrimary"
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              mb: 2,
            }}
          >
            <AccountBoxRoundedIcon sx={{ mr: 1 }} /> Personal Information
          </Typography>
        </Grid>
        <Grid container my={2}>
          {/* START MAPPING HERE */}
          {talentPersonalInfo
            .filter((talent) => {
              return talent.talentId == currentSessionId;
            })
            .map((talent) => (
              <>
                <Grid item xs={3} md={3}>
                  <Typography variant="subtitle2" color="textPrimary">
                    Gender
                  </Typography>
                </Grid>
                <Grid item xs={9} md={9}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={500}
                    color="textPrimary"
                  >
                    {talent.gender}
                  </Typography>
                </Grid>
                <Grid item xs={3} md={3}>
                  <Typography variant="subtitle2" color="textPrimary">
                    Age
                  </Typography>
                </Grid>
                <Grid item xs={9} md={9}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={500}
                    color="textPrimary"
                  >
                    {talent.age}
                  </Typography>
                </Grid>
                <Grid item xs={3} md={3}>
                  <Typography variant="subtitle2" color="textPrimary">
                    Status
                  </Typography>
                </Grid>
                <Grid item xs={9} md={9}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={500}
                    color="textPrimary"
                  >
                    {talent.status}
                  </Typography>
                </Grid>
                <Grid item xs={3} md={3}>
                  <Typography variant="subtitle2" color="textPrimary">
                    Nationality
                  </Typography>
                </Grid>
                <Grid item xs={9} md={9}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={500}
                    color="textPrimary"
                  >
                    {talent.nationality}
                  </Typography>
                </Grid>
              </>
            ))}
          {/* END OF PERSONAL INFORMATION */}
        </Grid>
      </Paper>
    </>
  );
};

export default TalentProfile;
