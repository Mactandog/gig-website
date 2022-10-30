import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {
  Button,
  Grid,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logoWhite from "../../assets/media/logo/gig-white-icon.svg";
import { useState } from "react";
import DrawerComp from "../drawers/Drawer";
import { Link, Outlet } from "react-router-dom";

function SecondaryNavbar({ links }) {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(isMatch)

  return (
    <>
      <Box>
        <AppBar component="nav" className="topNav">
          {isMatch ? (
            <DrawerComp links={links} />
          ) : (
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Grid container sx={{ alignItems: "center" }}>
                {/* Logo */}
                <Grid item xs={2}>
                  <Button
                    disableRipple
                    sx={{ width: 5, display: "flex", alignItems: "center" }}
                  >
                    <img src={logoWhite} className="logo" alt="Gig Logo" />
                  </Button>
                </Grid>

                {/* Nav links */}
                <Grid item xs={7}>
                  <Tabs
                    indicatorColor="secondary"
                    textColor="inherit"
                    value={value}
                    onChange={(e, value) => setValue(value)}
                  >
                    {links.map((link) => (
                      <Tab
                        key={link.id}
                        label={link.page}
                        value={link.id}
                        to={link.path}
                        component={Link}
                      />
                    ))}
                  </Tabs>
                </Grid>
              </Grid>
            </Toolbar>
          )}
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}

export default SecondaryNavbar;
