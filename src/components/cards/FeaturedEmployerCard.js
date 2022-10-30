import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import companyImage from "../../assets/media/images/img3.jpg";
import { Box, Chip, Grid, Link, Stack } from "@mui/material";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import TurnedInRoundedIcon from "@mui/icons-material/TurnedInRounded";

export default function FeaturedEmployerCard() {
  return (
    <Card sx={{ display: "flex", justifyContent: "center" }}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto", pt: 4, pr: 4, pb: 10, pl: 4 }}>
            <Stack direction="row" spacing={2}>
              <Stack direction="column" spacing={2}>
                <Avatar
                  sx={{ bgcolor: "secondary" }}
                  variant="rounded"
                  alt="Company name"
                  src={companyImage}
                />
                <IconButton color="success">
                  <TurnedInRoundedIcon />
                </IconButton>
              </Stack>
              <Stack direction="column">
                <Link component="button" underline="none" textAlign="left">
                  <Typography
                    component="div"
                    variant="h4"
                    fontWeight={500}
                    sx={{
                      overflow: "hidden",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      display: "-webkit-box",
                      textOverflow: "ellipsis",
                    }}
                  >
                    Company name Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Id, ullam?
                  </Typography>
                </Link>
                <Typography
                  component="div"
                  variant="body1"
                  mb={4}
                  sx={{
                    overflow: "hidden",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    display: "-webkit-box",
                    textOverflow: "ellipsis",
                  }}
                >
                  <LocationOnRoundedIcon />
                  Company address
                </Typography>
              </Stack>
            </Stack>
            <Typography
              variant="subtitle1"
              color="info.dark"
              component="div"
              sx={{
                textAlign: "justify",
                overflow: "hidden",
                WebkitLineClamp: 7,
                WebkitBoxOrient: "vertical",
                display: "-webkit-box",
                textOverflow: "ellipsis",
              }}
            >
              About the Company <br></br>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              voluptatem earum aliquam blanditiis minima inventore suscipit
              doloremque ducimus ipsum animi. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Doloribus repellendus placeat
              distinctio voluptates quia magnam? Mollitia at eius maiores odit
              dolorum, quae voluptate deserunt quaerat expedita, veniam
              voluptates nisi, inventore id iusto eveniet ab? Illum voluptas
              blanditiis earum nam quo nisi tempora quos sapiente iure. Dolorem
              veniam debitis vitae sed?
            </Typography>
          </CardContent>
          <Box sx={{ position: "absolute", bottom: 20, left: 20 }}>
            <Chip
              icon={<GroupsRoundedIcon />}
              label="500 Employees"
              color="secondary"
            />
          </Box>
        </Grid>
        <Grid
          item
          md={5}
          sx={{
            backgroundImage: `url(${companyImage})`,
            backgroundSize: "cover",
            xs: "none",
          }}
        />
      </Grid>
    </Card>
  );
}
