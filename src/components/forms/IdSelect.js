import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const IdSelect = React.forwardRef((props, ref) => {
  const [idNo, setIdNo] = React.useState("");

  const selectIdentification = (event) => {
    setIdNo(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Identification*</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="idNo"
          value={idNo}
          label="Age"
          onChange={selectIdentification}
          ref={ref}
          {...props}
        >
          <MenuItem value="" disabled>
            Select Identification
          </MenuItem>
          <MenuItem value="Social Card">Social Card</MenuItem>
          <MenuItem value="Tax Card">Tax Card</MenuItem>
          <MenuItem value="Driver's License">Driver's License</MenuItem>
          <MenuItem value="Passport">Passport</MenuItem>
          <MenuItem value="Proffesional License">Proffesional License</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
});

export default IdSelect;
