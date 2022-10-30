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
import React from "react";
import profilePic from "../../../assets/media/images/login1.png";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";

const TalentProfile = () => {
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
          <Grid item xs={12} md={10}>
            <Typography variant="h4" fontWeight={500} color="textPrimary">
              Ryan Mark T. Eyana
            </Typography>
            <Typography variant="body1" fontWeight={400} color="textPrimary">
              Human Capital Management Clerk {"("}2017-2019{")"}
            </Typography>
            <Typography variant="body2" color="textPrimary">
              Marbel Universal Trading Incorporated
            </Typography>
            <Typography variant="body2" color="textPrimary" mt={1}>
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
                  091234567899{" "}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <EmailRoundedIcon sx={{ width: 15, mr: 1, ml: 2 }} />{" "}
                  ryan123@gmail.com{" "}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <LocationOnRoundedIcon sx={{ width: 15, mr: 1, ml: 2 }} />
                  Surallah, South Cotabato
                </Typography>
              </Stack>
            </Typography>
          </Grid>
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
            <Typography variant="body1" color="textPrimary">
              Bachelor's Degree in Information Technology
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Philippines
            </Typography>
          </Grid>
        </Grid>
        {/* END OF EDUCATION */}
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
        <Grid container my={2}>
          {/* START MAPPING HERE */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
              Advanced
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography
              variant="subtitle1"
              fontWeight={500}
              color="textPrimary"
            >
              None {"(If none, then do not display)"}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              variant="subtitle2"
              fontWeight={500}
              color="textPrimary"
            >
              Intermediate
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography
              variant="subtitle1"
              fontWeight={500}
              color="textPrimary"
            >
              Administrative Skills, Virtual Assistant, Customer Support
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle2" color="textPrimary">
              Basic
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography
              variant="subtitle1"
              fontWeight={500}
              color="textPrimary"
            >
              Computer Hardware And Software Repair, Graphic Designing,
              Programming Skills
            </Typography>
          </Grid>
        </Grid>
        {/* END OF SKILLS */}
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
              Male
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
              26 years old
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
              Single
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
              Filipino
            </Typography>
          </Grid>

          {/* END OF PERSONAL INFORMATION */}
        </Grid>
      </Paper>
    </>
  );
};

export default TalentProfile;
