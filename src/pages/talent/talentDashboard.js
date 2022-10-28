import * as React from "react";
import PropTypes from "prop-types";
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
import Typography from "@mui/material/Typography";
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
import Search1 from "../../components/searchBars/Search1";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {/* USER PROFILE */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar alt="User Picture" variant="square" src={profilePic} />
            </ListItemAvatar>
            <ListItemText primary="User First Name" />
          </ListItemButton>
        </ListItem>
        {/* //// */}
        {[
          {
            icon: <AccountBoxRoundedIcon />,
            name: "Personal Information",
            path: "/personal-information",
          },
          {
            icon: <WorkHistoryRoundedIcon />,
            name: "Experience",
            path: "/experience",
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
          <Link className="sidebarLink">
            {/* <Link className="sidebarLink" to={`/talent/profile${tab.path}`}> */}
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{tab.icon}</ListItemIcon>
                <ListItemText primary={tab.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <WorkRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Job Applications" />
          </ListItemButton>
        </ListItem>
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
              href="/talent/profile"
              disableRipple
              sx={{ width: 5, display: "flex", alignItems: "center" }}
            >
              <img src={logoWhite} className="logo" alt="Gig Logo" />
            </Button>
          </Grid>
        </Toolbar>
        <Toolbar>
          <UserMenu />
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
        <Search1 />
        {/* <JobsCard /> */}
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
