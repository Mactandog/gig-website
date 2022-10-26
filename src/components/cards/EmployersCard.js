import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";

import { deepmerge } from "@mui/utils";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import joyTheme from "../../styles/joyUI";
import { customTheme } from "../../styles/customTheme";
import { Bookmark } from "@mui/icons-material";
import EmployersList from "../data/employers/employersList";
import GroupsIcon from "@mui/icons-material/Groups";

// const muiTheme = extendMuiTheme();

const theme = deepmerge(joyTheme, customTheme);

export default function EmployersCard() {
  return (
    <CssVarsProvider theme={theme}>
      {EmployersList.map((employer) => (
        <Card
          key={employer.id}
          variant="outlined"
          sx={{
            width: 320,
            m: 2,
            transition: "transform 0.3s, border 0.3s",
            "&:hover": {
              boxShadow: "md",
              borderColor: "theme.vars.palette.primary.outlinedHoverBorder",
              transform: "translateY(-2px)",
            },
          }}
        >
          <CardOverflow>
            <AspectRatio ratio="2" objectFit="contain">
              <img
                srcSet={`${employer.img} 2x`}
                // srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                loading="lazy"
                alt={employer.companyName}
              />
            </AspectRatio>

            <IconButton
              aria-label="Like minimal photography"
              size="md"
              variant="solid"
              color="success"
              sx={{
                position: "absolute",
                zIndex: 2,
                borderRadius: "50%",
                right: "1rem",
                bottom: 0,
                transform: "translateY(50%)",
              }}
            >
              <Bookmark />
            </IconButton>
          </CardOverflow>
          <Link href="#multiple-actions" overlay underline="none">
            <Typography
              variant="h1"
              textColor="primary.solidBg"
              sx={{
                fontSize: "md",
                fontWeight: "bold",
                mt: 2,
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                display: "-webkit-box",
              }}
            >
              {employer.companyName}
            </Typography>
          </Link>
          <Typography
            level="body2"
            textColor="primary.main"
            sx={{
              mt: 0.5,
              mb: 4,
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              display: "-webkit-box",
            }}
          >
            {employer.address}
          </Typography>
          <Divider inset="context" />
          <CardOverflow
            variant="soft"
            sx={{
              display: "flex",
              gap: 1.5,
              py: 1.5,
              px: "var(--Card-padding)",
              bgcolor: "background.level1",
            }}
          >
            <Typography
              variant="soft"
              startDecorator={<GroupsIcon />}
              sx={{ fontWeight: "md", color: "primary.solidBg" }}
            >
              {employer.noOfEmp}
            </Typography>
          </CardOverflow>
        </Card>
      ))}
    </CssVarsProvider>
  );
}
