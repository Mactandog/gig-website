import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import JobPost from "../pages-comp/talentDashboard/jobpost";
import {
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Typography,
  Grid,
  Avatar,
  Container,
} from "@mui/material";
import { Stack } from "@mui/system";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import TurnedInNotRoundedIcon from "@mui/icons-material/TurnedInNotRounded";
import JobsList from "../data/jobs/jobsList";
import KeyboardReturnRoundedIcon from "@mui/icons-material/KeyboardReturnRounded";

export default function JobsListCard() {
  
  const [state, setState] = React.useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    // =========================== Job Post Details Layout
    <Box
      sx={{
        width: "100vw",
        mt: 8,
        p: 4,
        backgroundColor: "#f3f2ef",
      }}
      role="presentation"
      onKeyDown={toggleDrawer("right", false)}
    >
      <Box sx={{ pl: 10 }}>
        <Button
          onClick={toggleDrawer("right", false)}
          startIcon={<KeyboardReturnRoundedIcon />}
          variant="text"
          size="large"
        >
          Back
        </Button>
      </Box>

      <JobPost />
    </Box>
    // ========================= End of Layout
  );

  // =================== Jobs List ==================
  const jobsCard = () => {
    return (
      <Container >
        <Grid container alignItems="center">
          {/* ======== START MAPPING HERE ============= */}
          {JobsList.map((job) => (
              
            <Grid item xs={12} key={job.id} my={1}>
              <button  type="button" id={job.id} onClick={(e) => {
                        e.preventDefault();
                        
                        
                        
                        localStorage.setItem("jobpostIDselected", JSON.stringify(job.id))
                       
                      }}>
              <Card  sx={{ width: "100%", height: "282px" }} variant="outlined">
                <CardActionArea
                  onClick={toggleDrawer("right", true)}
                  sx={{ display: "flex" }}
                >
                  <Stack direction="row" alignItems="center" pl={2}>
                    <Avatar
                      alt="Remy Sharp"
                      variant="rounded"
                      src={job.logo}
                      sx={{ width: 100, height: 100 }}
                    />
                    
                    <CardContent>
                      <Typography
                        variant="h5"
                        sx={{
                          overflow: "hidden",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                          display: "-webkit-box",
                          textOverflow: "ellipsis",
                        }}
                      >
                      {/* {alert(job.id)} */}
                        {job.title}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        color="primary"
                        component="div"
                        sx={{
                          overflow: "hidden",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                          display: "-webkit-box",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {job.company}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="primary"
                        fontWeight={500}
                        mb={2}
                      >
                        <Stack direction="row" alignItems="center">
                          <PaidRoundedIcon /> {job.salary}
                        </Stack>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          overflow: "hidden",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          display: "-webkit-box",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {job.desc}
                      </Typography>
                      <Box mt={2}>
                        <Typography variant="caption" color="primary">
                          Posted {job.date}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Stack>
                </CardActionArea>
                <CardActions sx={{ ml: 1 }}>
                  {/* <Button
                    aria-label="message"
                    variant="outlined"
                    size="small"
                    color="secondary"
                    startIcon={<TurnedInNotRoundedIcon />}
                  >
                    Save
                  </Button> */}
                </CardActions>
              </Card>
              </button>
            </Grid>
          ))}
          
        </Grid>
      </Container>

      // =================== End of Jobs List ==================
    );
  };
  return (
    <div>
      <Drawer
        
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {list("right")}
      </Drawer>
      <Box>{jobsCard()}</Box>
    </div>
  );
}
