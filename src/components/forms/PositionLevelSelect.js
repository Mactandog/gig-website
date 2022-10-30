import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function PositionLevelSelect() {
  const [positionLevel, setpositionLevel] = React.useState("");

  const handleChange = (event) => {
    setpositionLevel(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Position Level*</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="positionLevel"
          value={positionLevel}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="" disabled>
            Select Position Level
          </MenuItem>
          <MenuItem value="CEO / SVP / AVP / VP / Director">
            CEO / SVP / AVP / VP / Director
          </MenuItem>
          <MenuItem value="Assistant Manager / Manager">
            Assistant Manager / Manager
          </MenuItem>
          <MenuItem value="Supervisor / 5 Years & Up Experienced Employee">
            Supervisor / 5 Years & Up Experienced Employee
          </MenuItem>
          <MenuItem value="1-4 Years Experienced Employee">
            1-4 Years Experienced Employee
          </MenuItem>
          <MenuItem value="Fresh Grad / < 1 Year Experienced Employee">
            Fresh Grad / {"<"} 1 Year Experienced Employee
          </MenuItem>
          <MenuItem value="Non-Executive">Non-Executive</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
