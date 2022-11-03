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
import React , { useState } from "react";
import companyImage from "../../../assets/media/images/pexels-mikhail-nilov-7988208.jpg";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { LocationCityRounded } from "@mui/icons-material";
import TurnedInNotRoundedIcon from "@mui/icons-material/TurnedInNotRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import { Stack } from "@mui/system";

const JobsList2 =  localStorage.getItem("jobpost") ? JSON.parse(localStorage.getItem("jobpost")) : [];
let id = localStorage.getItem("jobpostIDselected") ? JSON.parse(localStorage.getItem("jobpostIDselected")) : [];
const JobPost = () => {
  let idpost = id;
  const [display2,setDisplay] = useState([]);
  let companyName =[];
  const display = JobsList2.filter((val) => {
    
    if(val.id === idpost){
      return setDisplay(val)
    } 
    ;
  }
  
)
  return (
    
    <Box p={4}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10}>
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
                  
                </Typography>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  alignItems="center"
                > {companyName}
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
                  mb={2}
                >
                  Category: Front-end
                </Typography>

                <Chip
                  icon={<PaidRoundedIcon />}
                  label="19K"
                  variant="outlined"
                  color="success"
                  sx={{ fontSize: 20 }}
                />
              </CardContent>
              <CardContent>
                <Stack direction="row" alignItems="center" mb={2}>
                  <Typography
                    color="primary"
                    fontWeight={500}
                    textAlign="justify"
                    mr={4}
                  >
                    Skills:
                  </Typography>
                  
                  <Stack direction="row" spacing={2}>
                    {/* ============ Map skills here ============== */}
                    <Chip
                      label="JavaScript"
                      variant="outlined"
                      color="primary"
                    />
                    <Chip label="HTML" variant="outlined" color="primary" />
                    <Chip label="MySQL" variant="outlined" color="primary" />
                    
                    {/* End of Map */}
                  </Stack>
                </Stack>
              </CardContent>
              {/*  */}
               
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
        <Grid item xs={12} md={10}>
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" fontWeight={500} color="primary" mb={4}>
                About the Job
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
                rem, harum assumenda blanditiis ut praesentium, veritatis
                aliquam, labore qui dolor architecto impedit vero sunt?
                Obcaecati odio asperiores totam autem eligendi voluptatum
                provident, rem hic sequi sit consequuntur quia velit quaerat,
                repellendus minus porro! Vel perferendis id expedita possimus!
                Repellendus labore illum eum facere tempora quia a, deserunt
                dignissimos quisquam quam officiis, ratione minima reiciendis.
                Ipsa sint, similique a amet nesciunt quia vitae voluptas atque
                maiores unde. Quo, excepturi minus, labore quisquam sapiente,
                enim inventore porro delectus omnis vero voluptates! Quidem aut
                est, ipsam molestias reprehenderit obcaecati temporibus harum
                facilis maxime!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

};

export default JobPost;
