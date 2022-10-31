import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import ApprovalRoundedIcon from "@mui/icons-material/ApprovalRounded";
import DoDisturbOnRoundedIcon from "@mui/icons-material/DoDisturbOnRounded";

const TalentMyJobs = () => {
  return (
    <>
      <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
        <Typography variant="h4" fontWeight={500} color="textPrimary" mb={2}>
          <WorkRoundedIcon /> My Jobs
        </Typography>
        <Divider />
        <Box sx={{ flexGrow: 1, mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card variant="outlined" my={1}>
                <CardHeader
                  title="Saved"
                  titleTypographyProps={{}}
                  avatar={<BookmarkRoundedIcon />}
                />
                <CardContent>
                  {/* ============ START MAP HERE ================= */}
                  <Box my={2}>
                    <Stack direction="row" spacing={2}>
                      <Avatar
                        variant="rounded"
                        aria-label="Logo"
                        alt="Company Name" // include in mapping
                        src="https://source.unsplash.com/random/500x500?sig=1"
                      >
                        Company Name
                      </Avatar>
                      <Stack direction="column">
                        <Typography
                          variant="body1"
                          fontWeight={500}
                          color="primary"
                          sx={{
                            overflow: "hidden",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                            display: "-webkit-box",
                            textOverflow: "ellipsis",
                          }}
                        >
                          Microsoft Front End Development dasdasdasda sdasdas
                          asd
                        </Typography>
                        <Typography
                          variant="body2"
                          color="primary"
                          sx={{
                            overflow: "hidden",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                            display: "-webkit-box",
                            textOverflow: "ellipsis",
                          }}
                        >
                          Accenture Philippines
                        </Typography>
                        <Typography variant="caption" color="grey">
                          Posted 2d ago
                        </Typography>
                      </Stack>
                    </Stack>
                    <Box sx={{ justifyContent: "end", textAlign: "end" }}>
                      <Button
                        variant="text"
                        color="secondary"
                        startIcon={<BookmarkRoundedIcon />}
                      >
                        Unsave
                      </Button>
                    </Box>
                  </Box>
                  <Divider />
                  {/* ============ END MAP HERE ================= */}
                  <Box my={2}>
                    <Stack direction="row" spacing={2}>
                      <Avatar
                        variant="rounded"
                        aria-label="Logo"
                        alt="Company Name" // include in mapping
                        src="https://source.unsplash.com/random/500x500?sig=1"
                      >
                        Company Name
                      </Avatar>
                      <Stack direction="column">
                        <Typography
                          variant="body1"
                          fontWeight={500}
                          color="primary"
                          sx={{
                            overflow: "hidden",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                            display: "-webkit-box",
                            textOverflow: "ellipsis",
                          }}
                        >
                          Microsoft Front End Development dasdasdasda sdasdas
                          asd
                        </Typography>
                        <Typography
                          variant="body2"
                          color="primary"
                          sx={{
                            overflow: "hidden",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                            display: "-webkit-box",
                            textOverflow: "ellipsis",
                          }}
                        >
                          Accenture Philippines
                        </Typography>
                        <Typography variant="caption" color="grey">
                          Posted 2d ago
                        </Typography>
                      </Stack>
                    </Stack>
                    <Box sx={{ justifyContent: "end", textAlign: "end" }}>
                      <Button
                        variant="text"
                        color="secondary"
                        startIcon={<BookmarkRoundedIcon />}
                      >
                        Unsave
                      </Button>
                    </Box>
                  </Box>
                  <Divider />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardHeader
                  title="Applied"
                  titleTypographyProps={{}}
                  avatar={<ApprovalRoundedIcon />}
                />
                <CardContent>
                  {/* ============ START MAP HERE ================= */}
                  <Box my={2}>
                    <Stack direction="row" spacing={2}>
                      <Avatar
                        variant="rounded"
                        aria-label="Logo"
                        alt="Company Name" // include in mapping
                        src="https://source.unsplash.com/random/500x500?sig=1"
                      >
                        Company Name
                      </Avatar>
                      <Stack direction="column">
                        <Typography
                          variant="body1"
                          fontWeight={500}
                          color="primary"
                          sx={{
                            overflow: "hidden",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                            display: "-webkit-box",
                            textOverflow: "ellipsis",
                          }}
                        >
                          Microsoft Front End Development dasdasdasda sdasdas
                          asd
                        </Typography>
                        <Typography
                          variant="body2"
                          color="primary"
                          sx={{
                            overflow: "hidden",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                            display: "-webkit-box",
                            textOverflow: "ellipsis",
                          }}
                        >
                          Accenture Philippines
                        </Typography>
                        <Typography variant="caption" color="grey">
                          Posted 2d ago
                        </Typography>
                      </Stack>
                    </Stack>
                    <Box sx={{ justifyContent: "end", textAlign: "end" }}>
                      <Button
                        variant="text"
                        color="secondary"
                        startIcon={<DoDisturbOnRoundedIcon />}
                      >
                        Withdraw
                      </Button>
                    </Box>
                  </Box>
                  <Divider />
                  {/* ============ END MAP HERE ================= */}
                  <Box my={2}>
                    <Stack direction="row" spacing={2}>
                      <Avatar
                        variant="rounded"
                        aria-label="Logo"
                        alt="Company Name" // include in mapping
                        src="https://source.unsplash.com/random/500x500?sig=1"
                      >
                        Company Name
                      </Avatar>
                      <Stack direction="column">
                        <Typography
                          variant="body1"
                          fontWeight={500}
                          color="primary"
                          sx={{
                            overflow: "hidden",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                            display: "-webkit-box",
                            textOverflow: "ellipsis",
                          }}
                        >
                          Microsoft Front End Development dasdasdasda sdasdas
                          asd
                        </Typography>
                        <Typography
                          variant="body2"
                          color="primary"
                          sx={{
                            overflow: "hidden",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                            display: "-webkit-box",
                            textOverflow: "ellipsis",
                          }}
                        >
                          Accenture Philippines
                        </Typography>
                        <Typography variant="caption" color="grey">
                          Applied 2d ago
                        </Typography>
                      </Stack>
                    </Stack>
                    <Box sx={{ justifyContent: "end", textAlign: "end" }}>
                      <Button
                        variant="text"
                        color="secondary"
                        startIcon={<DoDisturbOnRoundedIcon />}
                      >
                        Withdraw
                      </Button>
                    </Box>
                  </Box>
                  <Divider />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default TalentMyJobs;
