import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import logoWhite from "../../assets/media/logo/gig-white-icon.svg";
import DrawerComp from "../drawers/Drawer";
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import LoginButton from "../buttons/loginButton";
import SignUpButton from "../buttons/signupButton";

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

function PrimaryNavbar({ links }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box>
        <AppBar component="nav" className="topNav">
          {isMatch ? (
            <DrawerComp links={links} />
          ) : (
            <Toolbar sx={{ justifyContent: "space-between" }} className="navs">
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
                  <nav>
                    <ul>
                      {[
                        { path: "/", page: "HOME" },
                        { path: "/search-jobs", page: "JOB SEARCH" },
                        { path: "/companies", page: "COMPANY PROFILES" },
                        { path: "/about-us", page: "WHY GIG?" },
                        { path: "/for-employer", page: "FOR EMPLOYER" },
                      ].map((link, index) => {
                        return (
                          <CustomLink
                            key={index}
                            to={link.path}
                            className="navEffect"
                          >
                            {link.page}
                          </CustomLink>
                        );
                      })}
                    </ul>
                  </nav>
                </Grid>

                {/* Buttons */}
                <Grid item xs={3}>
                  <Box display="flex">
                    <Box sx={{ ml: "auto" }}>
                      <LoginButton />
                    </Box>
                    <Box sx={{ ml: 1 }}>
                      <SignUpButton />
                    </Box>
                  </Box>
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

export default PrimaryNavbar;
