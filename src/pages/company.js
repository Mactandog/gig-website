import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Pagination,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import companyPicture from "../assets/media/images/img2.jpg";
import JobsCard from "../components/cards/JobsCard";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { LocationCityRounded } from "@mui/icons-material";
import FooterMain from "../components/footers/FooterMain";

const Company = () => {
  return (
    <>
      <Box mt={8} pt={4}>
        <Container>
          <Box>
            <Card sx={{ position: "relative", mb: 8 }}>
              <CardMedia
                component="img"
                height="250"
                image={companyPicture}
                alt="Paella dish"
              />
              <Avatar
                variant="rounded"
                alt="Company Name"
                src={companyPicture}
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
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    fontWeight={400}
                  >
                    About
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="primary.dark.200"
                    textAlign="justify"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur, maiores! Beatae, ab sapiente. Unde perspiciatis
                    facilis quidem molestiae commodi voluptates veritatis
                    numquam omnis odit iusto sapiente voluptatum ex nulla cumque
                    nemo saepe, ipsam explicabo vitae. At sapiente eius rerum
                    ullam reiciendis, quaerat vitae similique tenetur pariatur
                    quae adipisci fugiat quo veritatis, nostrum laborum atque
                    optio ad, id non! Quasi illo vel unde ipsa labore facilis
                    nostrum molestias neque aliquam consequuntur laborum
                    quisquam deleniti, doloribus cumque animi temporibus,
                    commodi, quos fugiat dolorem necessitatibus iste sunt fuga
                    est? Quas soluta totam sed aliquid quae cupiditate iste
                    aperiam hic sint nulla? Soluta, incidunt!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    aria-label="message"
                    variant="text"
                    startIcon={<EmailRoundedIcon />}
                  >
                    Message
                  </Button>
                </CardActions>
              </Box>
            </Card>
            <Typography variant="h4" color="textPrimary" mb={2}>
              Recently posted Jobs
            </Typography>
            <Paper
              elevation={0}
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                padding: 4,
                backgroundColor: "#bad2ef",
                justifyContent: "center",
              }}
            >
              <JobsCard />
              <JobsCard />
              <JobsCard />
              <JobsCard />
              <JobsCard />
              <JobsCard />
              <Pagination count={10} shape="rounded" sx={{ marginTop: 4 }} />
            </Paper>
          </Box>
        </Container>
      </Box>
      <footer>
        <Box sx={{ p: 2 }}>
          <FooterMain />
        </Box>
      </footer>
    </>
  );
};

export default Company;
