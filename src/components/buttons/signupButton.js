import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@mui/material";
import { KeyboardArrowDownRounded } from "@mui/icons-material";

export default function SignUpButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        variant="contained"
        color="secondary"
        sx={{ width: "100%" }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownRounded />}
      >
        Sign up
      </Button>
      <Menu
        id="basic-menu"
        mt={2}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/talent/signup" underline="none">
            Talent
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <Link href="/business/signup" underline="none">
            Employer
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
