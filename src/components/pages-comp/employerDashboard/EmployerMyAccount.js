import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

const EmployerMyAccount = () => {
  return (
    <>
      <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
        <Typography variant="h4" fontWeight={500} color="textPrimary">
          <ManageAccountsRoundedIcon /> My Account
        </Typography>
        <Box>
          <Grid container mt={4}>
            <Root>
              <Divider textAlign="center">
                <Chip label="PASSWORD" color="primary" />
              </Divider>
              <Grid container>
                <Grid item xs={12} md={12} textAlign="right">
                  <Button
                    variant="text"
                    color="secondary"
                    startIcon={<EditRoundedIcon />}
                    disableRipple
                  ></Button>
                </Grid>
              </Grid>
              <Grid container spacing={1} my={5} mx={4} alignItems="center">
                <Grid item xs={2} md={3}>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    textAlign="right"
                  >
                    Password:
                  </Typography>
                </Grid>
                <Grid item xs={10} md={8}>
                  <Typography
                    variant="body1"
                    fontWeight={500}
                    color="textPrimary"
                  >
                    ********
                  </Typography>
                </Grid>
              </Grid>
              <Divider textAlign="center">
                <Chip label="CONTACT INFORMATION" color="primary" />
              </Divider>
              <Grid container>
                <Grid item xs={12} md={12} textAlign="right">
                  <Button
                    variant="text"
                    color="secondary"
                    startIcon={<EditRoundedIcon />}
                    disableRipple
                  ></Button>
                </Grid>
              </Grid>
              <Grid container spacing={1} my={5} mx={4} alignItems="center">
                <Grid item xs={2} md={3}>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    textAlign="right"
                  >
                    Name:
                  </Typography>
                </Grid>
                <Grid item xs={10} md={8}>
                  <Typography
                    variant="body1"
                    fontWeight={500}
                    color="textPrimary"
                  >
                    Ryan Mark Eyana
                  </Typography>
                </Grid>
                <Grid item xs={2} md={3}>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    textAlign="right"
                  >
                    Email:
                  </Typography>
                </Grid>
                <Grid item xs={10} md={8}>
                  <Typography
                    variant="body1"
                    fontWeight={500}
                    color="textPrimary"
                  >
                    ryan123@gmail.com
                  </Typography>
                </Grid>
                <Grid item xs={2} md={3}>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    textAlign="right"
                  >
                    Phone No:
                  </Typography>
                </Grid>
                <Grid item xs={10} md={8}>
                  <Typography
                    variant="body1"
                    fontWeight={500}
                    color="textPrimary"
                  >
                    0912344556
                  </Typography>
                </Grid>
                <Grid item xs={2} md={3}>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    textAlign="right"
                  >
                    Address:
                  </Typography>
                </Grid>
                <Grid item xs={10} md={8}>
                  <Typography
                    variant="body1"
                    fontWeight={500}
                    color="textPrimary"
                  >
                    Causing Subd., Centrala, Surallah, South Cotabato, 9512,
                    Philippines
                  </Typography>
                </Grid>
              </Grid>

              <Divider textAlign="center">
                <Chip label="SUBSCRIPTIONS" color="primary" />
              </Divider>
              <Grid container>
                <Grid item xs={12} md={12} textAlign="right">
                  <Button
                    variant="text"
                    color="secondary"
                    startIcon={<EditRoundedIcon />}
                    disableRipple
                  />
                </Grid>
              </Grid>

              <Grid container spacing={1} my={5} mx={4} alignItems="center">
                <Grid item xs={2} md={3}>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    textAlign="right"
                  >
                    Job Alerts Emai:
                  </Typography>
                </Grid>
                <Grid item xs={10} md={8}>
                  <Typography
                    variant="body1"
                    fontWeight={500}
                    color="textPrimary"
                  >
                    Subscribed
                  </Typography>
                </Grid>
              </Grid>
            </Root>
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default EmployerMyAccount;
