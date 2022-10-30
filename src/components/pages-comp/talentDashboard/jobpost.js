import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Avatar,
  Chip,
} from "@mui/material";
import React from "react";
import companyImage from "../../../assets/media/images/pexels-mikhail-nilov-7988208.jpg";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { LocationCityRounded } from "@mui/icons-material";
import TurnedInNotRoundedIcon from "@mui/icons-material/TurnedInNotRounded";

const JobPost = () => {
  return (
    <Box p={4}>
      <Grid container justifyContent="center">
        <Grid item sx={12} md={10}>
          <Card sx={{ position: "relative", mb: 8 }}>
            <CardMedia
              component="img"
              height="250"
              image={companyImage}
              alt="Paella dish"
            />
            <Avatar
              variant="rounded"
              alt="Company Name"
              src={companyImage}
              sx={{
                width: 150,
                height: 150,
                position: "absolute",
                left: 30,
                top: 160,
                border: 2,
                borderRadius: 4,
              }}
            />
            <Box padding={4}>
              <CardContent>
                <Typography
                  variant="h4"
                  fontWeight={500}
                  mt={8}
                  color="primary"
                >
                  Company Name
                </Typography>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  alignItems="center"
                >
                  <LocationCityRounded /> Company Address
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="h4" color="textSecondary" fontWeight={500}>
                  QA Tester (Health Care)
                </Typography>
                <Typography
                  variant="h5"
                  color="primary"
                  fontWeight={500}
                  textAlign="justify"
                >
                  Category: Front-end
                </Typography>
                <Typography
                  variant="h5"
                  color="primary"
                  fontWeight={500}
                  textAlign="justify"
                >
                  Job Location: National Capital Region
                </Typography>
                <Typography>
                  <Chip variant="outlined" color="secondary">
                    19K
                  </Chip>
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  aria-label="message"
                  variant="contained"
                  size="large"
                  startIcon={<EmailRoundedIcon />}
                >
                  Easy Apply
                </Button>
                <Button
                  aria-label="message"
                  variant="outlined"
                  size="large"
                  color="secondary"
                  startIcon={<TurnedInNotRoundedIcon />}
                >
                  Save
                </Button>
              </CardActions>
              <CardContent>
                <Typography variant="subtitle1" color="primary">
                  Posted 7 days ago
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobPost;
