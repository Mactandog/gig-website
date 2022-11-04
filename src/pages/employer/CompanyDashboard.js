import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, Button, Grid, ListItemAvatar } from "@mui/material";
import logoWhite from "../../assets/media/logo/gig-white-icon.svg";
import profilePic from "../../assets/media/images/login1.png";
import UserMenu from "../../components/menus/UserMenu";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import WysiwygRoundedIcon from "@mui/icons-material/WysiwygRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import AttachmentRoundedIcon from "@mui/icons-material/AttachmentRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import {
  Link,
  Route,
  Routes,
  useResolvedPath,
  useMatch,
} from "react-router-dom";
import EmployerPersonalInformation from "../../components/pages-comp/employerDashboard/EmployerPersonalInformation";
import EmployerExperience from "../../components/pages-comp/employerDashboard/EmployerExperience";
import EmployerSkills from "../../components/pages-comp/employerDashboard/EmployerSkills";
import EmployerEducation from "../../components/pages-comp/employerDashboard/EmployerEducation";
import EmployerMyAccount from "../../components/pages-comp/employerDashboard/EmployerMyAccount";
import EmployerProfile from "../../components/pages-comp/employerDashboard/EmployerProfile";
import EmployerUploadResume from "../../components/pages-comp/employerDashboard/EmployerUploadResume";
import EmployerHome from "../../components/pages-comp/employerDashboard/EmployerHome";
import EmployerMyJobs from "../../components/pages-comp/employerDashboard/EmployerMyJobs";
import { useState } from "react";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const companySession = localStorage.getItem("company") ? JSON.parse(localStorage.getItem("company")): [];
  const userLoginSession = JSON.parse(localStorage.getItem("PHPsession"));

  const loginSession  = userLoginSession.map((session) => {
    return session.id
  })

  // ACTIVE LINK
  let CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  };
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {/* USER PROFILE */}
        <Link className="sidebarLink" to="/employer/profile/employer-profile">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt="User Picture" variant="square" src={profilePic} />
              </ListItemAvatar>
              {/* matching the current session and company */}
              {companySession.filter((pas) => {
                console.log(pas.id == loginSession)
                return pas.id == loginSession;
              }).map((pas) => {
              return <ListItemText primary={pas.companyName} secondary="View Profile" />
              })}
             
            </ListItemButton>
          </ListItem>
        </Link>
        {/* //// */}
        {[
          {
            icon: <HomeRoundedIcon />,
            name: "Home",
            path: "/",
          },
          {
            icon: <AccountBoxRoundedIcon />,
            name: "Company Information",
            path: "/employer-info",
          },
          {
            icon: <WorkHistoryRoundedIcon />,
            name: "Add Job Post",
            path: "/employer-experience",
          },
          {
            icon: <WorkHistoryRoundedIcon />,
            name: "Jobs",
            path: "/employer-skills",
          },
          // { icon: <PsychologyRoundedIcon />, name: "Skills", path: "/employer-skills" },
        
          // {
          //   icon: <SchoolRoundedIcon />,
          //   name: "Education",
          //   path: "/employer-education",
          // },
        ].map((tab, index) => (
          <CustomLink
            key={index}
            className="sidebarLink"
            to={`/employer/profile${tab.path}`}
          >
            {/* <Link className="sidebarLink" to={`/Employer/profile${tab.path}`}> */}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{tab.icon}</ListItemIcon>
                <ListItemText primary={tab.name} />
              </ListItemButton>
            </ListItem>
          </CustomLink>
        ))}
      </List>
      <Divider />
      <List>
        <Link className="sidebarLink" to="/employer/profile/employer-my-jobs">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WorkRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Delete Account" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          //   zIndex: 1500,
          //   width: { sm: `calc(100% - ${drawerWidth}px)` },
          //   ml: { sm: `${drawerWidth}px` },
          flexDirection: "row",
          justifyContent: "space-between",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        {/* <Container sx={{ display: "flex", flexDirection: "row" }}> */}
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid item xs={2}>
            <Button
              component="a"
              href="/"
              disableRipple
              sx={{ width: 5, display: "flex", alignItems: "center" }}
            >
              <img src={logoWhite} className="logo" alt="Gig Logo" />
            </Button>
          </Grid>
        </Toolbar>
        <Toolbar>
          <UserMenu profilePic={profilePic} />
        </Toolbar>
        {/* </Container> */}
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Search1 /> */}
        {/* <JobsCard /> */}

        <Box
          sx={{
            overflowX: "hidden",
          }}
        >
          <Routes>
            <Route index element={<EmployerHome />} />
            <Route path="employer-profile" element={<EmployerProfile />} />
            <Route path="employer-info" element={<EmployerPersonalInformation />}/>
            <Route path="employer-experience" element={<EmployerExperience />} />
            <Route path="employer-skills" element={<EmployerSkills />} />
            <Route path="employer-education" element={<EmployerEducation />} />
            <Route path="employer-upload-resume" element={<EmployerUploadResume />} />
            <Route path="employer-account-settings" element={<EmployerMyAccount />} />
            <Route path="employer-my-jobs" element={<EmployerMyJobs />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
