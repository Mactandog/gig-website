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
import TalentPersonalInformation from "../../components/pages-comp/talentDashboard/TalentPersonalInformation";
import TalentExperience from "../../components/pages-comp/talentDashboard/TalentExperience";
import TalentSkills from "../../components/pages-comp/talentDashboard/TalentSkills";
import TalentEducation from "../../components/pages-comp/talentDashboard/TalentEducation";
import TalentMyAccount from "../../components/pages-comp/talentDashboard/TalentMyAccount";
import TalentProfile from "../../components/pages-comp/talentDashboard/TalentProfile";
import TalentUploadResume from "../../components/pages-comp/talentDashboard/TalentUploadResume";
import TalentHome from "../../components/pages-comp/talentDashboard/TalentHome";
import TalentMyJobs from "../../components/pages-comp/talentDashboard/TalentMyJobs";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
        <Link className="sidebarLink" to="/talent/profile/my-profile">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt="User Picture" variant="square" src={profilePic} />
              </ListItemAvatar>
              <ListItemText primary="Ryan Mark" secondary="View My Profile" />
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
            name: "Personal Information",
            path: "/personal-info",
          },
          {
            icon: <WorkHistoryRoundedIcon />,
            name: "Experience",
            path: "/work-experience",
          },
          { icon: <PsychologyRoundedIcon />, name: "Skills", path: "/skills" },
          {
            icon: <WysiwygRoundedIcon />,
            name: "Portfolio",
            path: "/my-portfolio",
          },
          {
            icon: <SchoolRoundedIcon />,
            name: "Education",
            path: "/education",
          },
          {
            icon: <AttachmentRoundedIcon />,
            name: "Upload Resume",
            path: "/upload-resume",
          },
        ].map((tab, index) => (
          <CustomLink
            key={index}
            className="sidebarLink"
            to={`/talent/profile${tab.path}`}
          >
            {/* <Link className="sidebarLink" to={`/talent/profile${tab.path}`}> */}
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
        <Link className="sidebarLink" to="/talent/profile/my-jobs">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WorkRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="My Jobs" />
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
            <Route index element={<TalentHome />} />
            <Route path="my-profile" element={<TalentProfile />} />
            <Route
              path="personal-info"
              element={<TalentPersonalInformation />}
            />
            <Route path="work-experience" element={<TalentExperience />} />
            <Route path="skills" element={<TalentSkills />} />
            <Route path="education" element={<TalentEducation />} />
            <Route path="upload-resume" element={<TalentUploadResume />} />
            <Route path="account-settings" element={<TalentMyAccount />} />
            <Route path="my-jobs" element={<TalentMyJobs />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
