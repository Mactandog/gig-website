import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import companyAvatar from "../../assets/media/images/img2.jpg";
import BookmarkAddRoundedIcon from "@mui/icons-material/BookmarkAddRounded";
import { Link } from "react-router-dom";

export default function JobsCard() {
  return (
    <Card sx={{ width: 500, m: 1 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500], height: 70, width: 70 }}
            aria-label="recipe"
            src={companyAvatar}
            variant="rounded"
          />
        }
        action={
          <IconButton aria-label="settings">
            <BookmarkAddRoundedIcon />
          </IconButton>
        }
      />
      <Link to="/company/jobs/jobdesc">
        <CardContent>
          <Typography
            variant="body1"
            color="text.primary"
            sx={{
              textAlign: "left",
              overflow: "hidden",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              display: "-webkit-box",
              textOverflow: "ellipsis",
              fontWeight: 600,
            }}
          >
            This impressive paella is a perfect party dish and a fun meal to
            cook
          </Typography>
          <Typography
            variant="body1"
            color="text.primary"
            sx={{
              textAlign: "left",
              overflow: "hidden",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              display: "-webkit-box",
              textOverflow: "ellipsis",
              fontWeight: 300,
            }}
          >
            National Capital region, Philippines
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="caption" color="textSecondary" fontWeight={500}>
            10 hours ago
          </Typography>{" "}
        </CardContent>
      </Link>
    </Card>
  );
}
