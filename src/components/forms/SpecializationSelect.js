import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SpecializationSelect() {
  const [specialization, setSpecialization] = React.useState("");

  const handleChange = (event) => {
    setSpecialization(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Specialization</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="specialization"
          value={specialization}
          label="Specialization"
          onChange={handleChange}
        >
          <MenuItem value="" disabled>
            Select Specialization
          </MenuItem>
          <MenuItem value="Front-end Developer">Front-end Developer</MenuItem>
          <MenuItem value="Back-end Developer">Back-end Developer</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
